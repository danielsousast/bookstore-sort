import "styled-componets";
declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      background: string;
      text: string;
      icon: string;
      textLight: string;
      backgroundLight: string;
    };
  }
}
