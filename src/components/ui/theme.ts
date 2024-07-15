import { Colors, ProjectType } from '@/types/theme';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    projectTheme: ProjectType;
    colors: Colors;
  }

  interface ThemeOptions {
    projectTheme: ProjectType;
    colors: Colors;
  }
}

const theme = createTheme({
  projectTheme: {
    name: 'Demo',
    drawerWidth: 240,
    version: '2.0.0',
  },
  colors: {
    primary: '',
    secondary: '',
    text: '',
    white: '#ffffff',
    black: '#000000',
    gray: {
      100: '#FBFBFB',
      300: '#D0D5DD',
      500: '#667085',
      700: '#344054',
    },
    error: {
      600: '#B42318',
    },
    blue: {
      50: '#EFF8FF',
      500: '#197CC0',
    },
    success: {
      700: '#027A48',
    },
  },
  // palette: {
  //   mode: "dark"
  // },
  typography: {
    fontFamily: '',
    h1: { color: '#344054' },
    h2: { color: '#344054' },
    h3: { color: '#344054' },
    h4: { color: '#344054' },
    h5: { color: '#344054' },
    h6: { color: '#344054' },
    subtitle1: { color: '#344054' },
    subtitle2: { color: '#344054' },
    body1: { color: '#667085' },
    body2: { color: '#667085' },
    // h1: {},
    // h2: {},
    // h3: {},
    // h4: {},
    // h5: {},
    // h6: {},
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '0 !important',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '12px',
          minWidth: '100px',
          height: '37px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& fieldset': {},
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paperWidthMd: {
          maxWidth: '390px',
          width: '100%',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          paddingBottom: '25px',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          width: '120px',
        },
      },
    },
  },
});

export default theme;
