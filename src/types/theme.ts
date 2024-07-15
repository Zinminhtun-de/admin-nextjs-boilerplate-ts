export type ProjectType = {
  name: string;
  drawerWidth: number;
  version?: string;
};

export type Colors = {
  primary: string;
  secondary: string;
  text: string;
  white: string;
  black: string;
  gray: {
    100: string;
    300: string;
    500: string;
    700: string;
  };
  error: {
    600: string;
  };
  blue: {
    50: string;
    500: string;
  };
  success: {
    700: string;
  };
};
