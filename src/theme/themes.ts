import { ThemeOptions } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import { ThemeMode } from './types';

const sharedTheme = {
  palette: {
    primary: {
      main: '#0A2540',
    },
    secondary: {
      main: '#4E8FF7',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiDivider: {
      styleOverrides: {
        vertical: {
          marginRight: 10,
          marginLeft: 10,
        },
      },
    },
  },
};

// to explore all the options, check out https://mui.com/material-ui/customization/default-theme/
const themes: Record<ThemeMode, ThemeOptions> = {
  light: deepmerge(sharedTheme, {
    palette: {
      mode: 'light',
      background: {
        default: '#FFFFFF',
        paper: '#E8ECF2',
      },
      text: {
        secondary: '#A9B4C2',
      },
    },
  }),

  dark: deepmerge(sharedTheme, {
    palette: {
      mode: 'dark',
      background: {
        default: '#0A2540',
        paper: '#1a3a5a',
      },
      text: {
        secondary: '#A9B4C2',
      },
    },
  }),
};

export default themes;
