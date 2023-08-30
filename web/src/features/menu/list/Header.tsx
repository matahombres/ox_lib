import { Box, createStyles, Text } from '@mantine/core';
import React from 'react';
import { globalClasses } from '../../../theme';

const useStyles = createStyles((theme) => ({
  container: {
    textAlign: 'center',
    //backgroundColor: theme.colors.dark[6],
    backgroundColor: 'rgba(41,17,23,0.92)',
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 500,
  },
}));

const Header: React.FC<{ title: string }> = ({ title }) => {
  const { classes } = useStyles();
  const globalClass = globalClasses().classes;

  return (
    <Box className={classes.container}>
      <Text className={classes.heading+" "+globalClass.colorSecundary}>{title}</Text>
    </Box>
  );
};

export default React.memo(Header);
