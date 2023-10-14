export interface Category {
  name: string;
  arName: string;
  progCode: string;
  url: string;
  father: string;
  pointTo: string;
  level: number;
  is_main: boolean;
  children:Category[]
}
