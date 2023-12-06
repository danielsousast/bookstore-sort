import { ImageSourcePropType } from "react-native";

export interface Book {
  id: number;
  title: string;
  author: string;
  editionYear: number;
  image: ImageSourcePropType;
}
