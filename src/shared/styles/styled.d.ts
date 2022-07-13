import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'light' | 'dark';
    primary: string;
    secondary: string;
    accent: string;
    accentHover: string;
    textPrimary: string;
    textSecondary: string;
    textButton: string;
  }
}
