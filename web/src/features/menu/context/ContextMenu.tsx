import { useNuiEvent } from '../../../hooks/useNuiEvent';
import { Box, Stack, Text, Flex, createStyles } from '@mantine/core';
import { useEffect, useState } from 'react';
import { ContextMenuProps } from '../../../typings';
import ContextButton from './components/ContextButton';
import { fetchNui } from '../../../utils/fetchNui';
import ReactMarkdown from 'react-markdown';
import HeaderButton from './components/HeaderButton';
import ScaleFade from '../../../transitions/ScaleFade';
import MarkdownComponents from '../../../config/MarkdownComponents';
import { globalClasses } from '../../../theme';
import React from 'react';

const openMenu = (id: string | undefined) => {
  fetchNui<ContextMenuProps>('openContext', { id: id, back: true });
};

const useStyles = createStyles((theme, _params, getRef) => ({
  container: {
    position: 'absolute',
    top: '15%',
    right: '25%',
    width: 340,
    height: 580,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: "0 10px",
    gap: 6,
  },
  titleContainer: {
    borderRadius: 4,
    flex: '1 85%',
    backgroundColor: theme.colors.dark[6],
  },
  titleText: {
    color: theme.colors.dark[0],
    padding: 6,
    textAlign: 'center',
  },
  buttonsContainer: {
    height: 560,
    overflowY: 'scroll',
  },
  scrollTopFeedback:{
    ref: getRef('scrollTop'),
    display:"none",
    position:"absolute",
    top: "0",
    left: "11px",
    width:"94%",
    height:"4px",
    zIndex: 99,
    boxShadow: '0 3px 20px 15px #ff4e46',
    background: '#ff4e46',
    clipPath: "polygon(0 0, 100% 0, 100% 1670%, 0 1670%)"
  },
  scrollBottomFeedback:{
    ref: getRef('scrollBottom'),
    display:"none",
    position:"absolute",
    bottom: "-20px",
    left: "11px",
    width:"94%",
    height:"4px",
    zIndex: 99,
    boxShadow: '0 3px 20px 15px #ff4e46',
    background: '#ff4e46',
    clipPath: "polygon(0 -1670%, 100% -1670%, 100% 94%, 0 94%)"
  },
  show:{
    display:"block"
  },
  buttonsFlexWrapper: {
    gap: 4,
    padding: "10px"
  },
}));

const ContextMenu: React.FC = () => {
  const { classes, cx } = useStyles();
  const globalClass = globalClasses().classes;
  const [visible, setVisible] = useState(false);
  const [contextMenu, setContextMenu] = useState<ContextMenuProps>({
    title: '',
    options: { '': { description: '', metadata: [] } },
  });
  const [activeScrollTop, setActiveScrollTop] = useState(0);
  const [activeScrollDown, setActiveScrollDown] = useState(0);
  const [heightFixScrollTop, setHeightFixScrollTop] = useState(0);

  const refOverflow = React.createRef<HTMLDivElement>();
  const refContent = React.createRef<HTMLDivElement>();
  const refHeader = React.createRef<HTMLDivElement>();
  
  const closeContext = () => {
    if (contextMenu.canClose === false) return;
    setVisible(false);
    fetchNui('closeContext');
  };

  const scrollHandle = ()=>{
    if (refOverflow == null || refContent == null){ return;}
    let overflowHeight = refOverflow.current?.getBoundingClientRect().height;
    let contentHeight = refContent.current?.getBoundingClientRect().height;
    let scrollTop = refOverflow.current?.scrollTop;
    if (overflowHeight == null || contentHeight == null || scrollTop == null){return;}
    let dif = contentHeight - overflowHeight;
    if(overflowHeight < contentHeight){
      if(dif >= scrollTop){
        setActiveScrollDown(1)
      }else{
        setActiveScrollDown(0)
      }
      if(scrollTop > 0){
        setActiveScrollTop(1)
      }else{
        setActiveScrollTop(0)
      }
    }
  }

  // Hides the context menu on ESC
  useEffect(() => {
    if (!visible) return;

    const keyHandler = (e: KeyboardEvent) => {
      if (['Escape'].includes(e.code)) closeContext();
    };

    //Load initial scroll
    scrollHandle();
    if(refHeader.current!=null){
      let heig = refHeader.current.getBoundingClientRect().height
      setHeightFixScrollTop(heig)
    }

    window.addEventListener('keydown', keyHandler);

    return () => window.removeEventListener('keydown', keyHandler);
  }, [visible]);

  useNuiEvent('hideContext', () => setVisible(false));

  useNuiEvent<ContextMenuProps>('showContext', async (data) => {
    if (visible) {
      setVisible(false);
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    setContextMenu(data);
    setVisible(true);
  });

  return (
    <Box className={classes.container}>
      <ScaleFade visible={visible}>
        <Flex className={classes.header} ref={refHeader}>
          {contextMenu.menu && (
            <HeaderButton icon="chevron-left" iconSize={16} handleClick={() => openMenu(contextMenu.menu)} />
          )}
          <Box className={classes.titleContainer+" "+globalClass.container}>
            <Text className={classes.titleText+" "+globalClass.colorSecundary} style={{textTransform:'uppercase',fontWeight:600}}>
              <ReactMarkdown components={MarkdownComponents}>{contextMenu.title}</ReactMarkdown>
            </Text>
          </Box>
          <HeaderButton icon="xmark" canClose={contextMenu.canClose} iconSize={18} handleClick={closeContext} />
        </Flex>
        <Box className={classes.buttonsContainer} onScroll={scrollHandle} ref={refOverflow}>
          <span className={cx(classes.scrollTopFeedback,{[classes.show]:activeScrollTop==1})} style={{top:heightFixScrollTop}}></span>
          <Stack className={classes.buttonsFlexWrapper} ref={refContent}>
            {Object.entries(contextMenu.options).map((option, index) => (
              <ContextButton option={option} key={`context-item-${index}`} />
            ))}
          </Stack>
          <span className={cx(classes.scrollBottomFeedback,{[classes.show]:activeScrollDown==1})}></span>
        </Box>
      </ScaleFade>
    </Box>
  );
};

export default ContextMenu;
