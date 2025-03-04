import { Button, createStyles } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { globalClasses } from '../../../../theme';

interface Props {
  icon: IconProp;
  canClose?: boolean;
  iconSize: number;
  handleClick: () => void;
}

const useStyles = createStyles((theme, params: { canClose?: boolean }) => ({
  button: {
    borderRadius: 4,
    flex: '1 15%',
    alignSelf: 'stretch',
    height: 'auto',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 2,
    ":hover":{
      background:'rgba(41,17,23,0.92)'
    }
  },
  root: {
    border: 'none',
  },
  label: {
    color: params.canClose === false ? theme.colors.dark[2] : theme.colors.dark[0],
  },
}));

const HeaderButton: React.FC<Props> = ({ icon, canClose, iconSize, handleClick }) => {
  const { classes } = useStyles({ canClose });
  const globalClass = globalClasses().classes;

  return (
    <Button
      variant="default"
      className={classes.button+" "+globalClass.container}
      classNames={{ label: classes.label, root: classes.root }}
      disabled={canClose === false}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={icon} fontSize={iconSize} fixedWidth className={globalClass.colorTerciary} />
    </Button>
  );
};

export default HeaderButton;
