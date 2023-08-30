import { Box, Group, Stack, Text, Progress, Image } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { forwardRef } from 'react';
import CustomCheckbox from './CustomCheckbox';
import type { MenuItem } from '../../../typings';
import { createStyles } from '@mantine/core';
import { isIconUrl } from '../../../utils/isIconUrl';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { globalClasses } from '../../../theme';

interface Props {
  item: MenuItem;
  index: number;
  scrollIndex: number;
  checked: boolean;
}

const useStyles = createStyles((theme, params: { iconColor?: string }) => ({
  buttonContainer: {
    //backgroundColor: theme.colors.dark[6],
    backgroundColor: 'rgba(41,17,23,0.92)',
    //borderRadius: theme.radius.md,
    border: '2px solid transparent',
    boxShadow: '0 0 5px 0px #9a322f',
    padding: 2,
    height: 60,
    scrollMargin: 8,
    '&:focus': {
      outline: 'none',
    },
  },
  iconImage: {
    maxWidth: 32,
  },
  buttonWrapper: {
    paddingLeft: 5,
    paddingRight: 12,
    height: '100%',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    width: 32,
    height: 32,
  },
  icon: {
    fontSize: 24,
    //color: params.iconColor || theme.colors.dark[2],
  },
  label: {
    color: theme.colors.dark[2],
    textTransform: 'uppercase',
    fontSize: 12,
    verticalAlign: 'middle',
  },
  chevronIcon: {
    fontSize: 14,
    //color: theme.colors.dark[2],
  },
  scrollIndexValue: {
    color: theme.colors.dark[2],
    textTransform: 'uppercase',
    fontSize: 14,
  },
  progressStack: {
    width: '100%',
    marginRight: 5,
  },
  progressLabel: {
    verticalAlign: 'middle',
    marginBottom: 3,
  },
}));

const ListItem = forwardRef<Array<HTMLDivElement | null>, Props>(({ item, index, scrollIndex, checked }, ref) => {
  const { classes } = useStyles({ iconColor: item.iconColor });
  const globalClass = globalClasses().classes;

  return (
    <Box
      tabIndex={index}
      className={classes.buttonContainer}
      key={`item-${index}`}
      ref={(element: HTMLDivElement) => {
        if (ref)
          // @ts-ignore i cba
          return (ref.current = [...ref.current, element]);
      }}
    >
      <Group spacing={15} noWrap className={classes.buttonWrapper}>
        {item.icon && (
          <Box className={classes.iconContainer}>
            {typeof item.icon === 'string' && isIconUrl(item.icon) ? (
              <img src={item.icon} alt="Missing image" className={classes.iconImage} />
            ) : (
              <FontAwesomeIcon icon={item.icon as IconProp} className={classes.icon+" "+globalClass.colorTerciary} fixedWidth />
            )}
          </Box>
        )}
        {Array.isArray(item.values) ? (
          <Group position="apart" w="100%">
            <Stack spacing={0} justify="space-between">
              <Text className={classes.label+" "+globalClass.colorTerciary} style={{fontWeight:600, textTransform:'uppercase'}}>{item.label}</Text>
              <Text className={globalClass.colorPrimary}>
                {typeof item.values[scrollIndex] === 'object'
                  ? // @ts-ignore for some reason even checking the type TS still thinks it's a string
                    item.values[scrollIndex].label
                  : item.values[scrollIndex]}
              </Text>
            </Stack>
            <Group spacing={1} position="center">
              <FontAwesomeIcon icon="chevron-left" className={classes.chevronIcon+" "+globalClass.colorSecundary} />
              <Text className={classes.scrollIndexValue+" "+globalClass.colorSecundary}>
                {scrollIndex + 1}/{item.values.length}
              </Text>
              <FontAwesomeIcon icon="chevron-right" className={classes.chevronIcon+" "+globalClass.colorSecundary} />
            </Group>
          </Group>
        ) : item.checked !== undefined ? (
          <Group position="apart" w="100%">
            <Text className={globalClass.colorPrimary}>{item.label}</Text>
            <CustomCheckbox checked={checked}></CustomCheckbox>
          </Group>
        ) : item.progress !== undefined ? (
          <Stack className={classes.progressStack} spacing={0}>
            <Text className={classes.progressLabel+" "+globalClass.colorPrimary}>{item.label}</Text>
            <Progress
              value={item.progress}
              color={item.colorScheme || '#e7b52f' || 'dark.0'}
              styles={(theme) => ({ root: { backgroundColor: theme.colors.dark[3] } })}
            />
          </Stack>
        ) : (
          <Text className={globalClass.colorPrimary}>{item.label}</Text>
        )}
      </Group>
    </Box>
  );
});

export default React.memo(ListItem);
