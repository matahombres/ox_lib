import { Button, Box, Group, Stack, Text, Progress, HoverCard, Image, createStyles } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactMarkdown from 'react-markdown';
import { Option, ContextMenuProps } from '../../../../typings';
import { fetchNui } from '../../../../utils/fetchNui';
import { isIconUrl } from '../../../../utils/isIconUrl';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import MarkdownComponents from '../../../../config/MarkdownComponents';
import { globalClasses } from '../../../../theme';

const openMenu = (id: string | undefined) => {
  fetchNui<ContextMenuProps>('openContext', { id: id, back: false });
};

const clickContext = (id: string) => {
  fetchNui('clickContext', id);
};

const useStyles = createStyles((theme, params: { disabled?: boolean; readOnly?: boolean }) => ({
  inner: {
    justifyContent: 'flex-start'
  },
  label: {
    width: '100%',
    color: params.disabled ? theme.colors.dark[3] : theme.colors.dark[0],
    whiteSpace: 'pre-wrap',
  },
  button: {
    height: 'fit-content',
    width: '100%',
    padding: 10,
    ":disabled":{
      opacity:0.7,
      background: 'rgba(41,17,23,0.82)',
      border: '2px solid #9a322f',
      boxShadow: '0 0 8px 2px #9a322f',
    },
    '&:hover': {
      background:'rgba(41,17,23,0.92)',
      //backgroundColor: params.readOnly ? theme.colors.dark[6] : undefined,
      cursor: params.readOnly ? 'unset' : 'pointer',
    },
    '&:active': {
      transform: params.readOnly ? 'unset' : undefined,
    },
  },
  iconImage: {
    maxWidth: '25px',
  },
  description: {
    color: params.disabled ? theme.colors.dark[3] : theme.colors.dark[2],
    fontSize: 12,
  },
  dropdown: {
    padding: 10,
    color: theme.colors.dark[0],
    fontSize: 14,
    maxWidth: 256,
    width: 'fit-content',
    border: 'none',
  },
  buttonStack: {
    gap: 4,
    flex: '1',
  },
  buttonGroup: {
    gap: 4,
    flexWrap: 'nowrap',
  },
  buttonIconContainer: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitleText: {
    overflowWrap: 'break-word',
  },
  buttonArrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
  },
}));

const ContextButton: React.FC<{
  option: [string, Option];
}> = ({ option }) => {
  const button = option[1];
  const buttonKey = option[0];
  const globalClass = globalClasses().classes;
  const { classes } = useStyles({ disabled: button.disabled, readOnly: button.readOnly });

  return (
    <>
      <HoverCard
        position="right-start"
        disabled={button.disabled || !(button.metadata || button.image)}
        openDelay={200}
      >
        <HoverCard.Target>
          <Button
            classNames={{ inner: classes.inner, label: classes.label, root: classes.button }}
            onClick={() =>
              !button.disabled && !button.readOnly
                ? button.menu
                  ? openMenu(button.menu)
                  : clickContext(buttonKey)
                : null
            }
            variant="default"
            className={classes.button+" "+globalClass.container}
            disabled={button.disabled}
          >
            <Group position="apart" w="100%" noWrap>
              <Stack className={classes.buttonStack}>
                <Group className={classes.buttonGroup}>
                  {button?.icon && (
                    <Stack className={classes.buttonIconContainer}>
                      {typeof button.icon === 'string' && isIconUrl(button.icon) ? (
                        <img src={button.icon} className={classes.iconImage} alt="Missing img" />
                      ) : (
                        <FontAwesomeIcon
                          icon={button.icon as IconProp}
                          fixedWidth
                          size="lg"
                          className={globalClass.colorTerciary}
                          style={{ color: button.iconColor }}
                        />
                      )}
                    </Stack>
                  )}
                  <Text className={classes.buttonTitleText+" "+globalClass.colorPrimary}>
                    <ReactMarkdown components={MarkdownComponents}>{button.title || buttonKey}</ReactMarkdown>
                  </Text>
                </Group>
                {button.description && (
                  <Text className={classes.description+" "+globalClass.colorSecundary}>
                    <ReactMarkdown components={MarkdownComponents}>{button.description}</ReactMarkdown>
                  </Text>
                )}
                {button.progress !== undefined && (
                  <Progress value={button.progress} size="sm" color={button.colorScheme || '#e7b52f' || 'dark.3'} />
                )}
              </Stack>
              {(button.menu || button.arrow) && button.arrow !== false && (
                <Stack className={classes.buttonArrowContainer}>
                  <FontAwesomeIcon icon="chevron-right" fixedWidth className={globalClass.colorSecundary} />
                </Stack>
              )}
            </Group>
          </Button>
        </HoverCard.Target>
        <HoverCard.Dropdown className={classes.dropdown+" "+globalClass.container}>
          {button.image && <Image src={button.image} />}
          {Array.isArray(button.metadata) ? (
            button.metadata.map(
              (metadata: string | { label: string; value?: any; progress?: number }, index: number) => (
                <>
                  <Text key={`context-metadata-${index}`} className={globalClass.colorSecundary}>
                    {typeof metadata === 'string' ? `${metadata}` : `${metadata.label}: ${metadata?.value ?? ''}`}
                  </Text>

                  {typeof metadata === 'object' && metadata.progress !== undefined && (
                    <Progress value={metadata.progress} size="sm" color={button.colorScheme || '#e7b52f' || 'dark.3'} />
                  )}
                </>
              )
            )
          ) : (
            <>
              {typeof button.metadata === 'object' &&
                Object.entries(button.metadata).map((metadata: { [key: string]: any }, index) => (
                  <Text key={`context-metadata-${index}`}>
                    {metadata[0]}: {metadata[1]}
                  </Text>
                ))}
            </>
          )}
        </HoverCard.Dropdown>
      </HoverCard>
    </>
  );
};

export default ContextButton;
