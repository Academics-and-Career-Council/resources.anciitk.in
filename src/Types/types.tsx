export type subItem = {
  id: string;
  name: string;
  category: string;
  link: string;
};

export interface item {
  id: string;
  wing: string;
  order: number;
  title: string;
  category?: string;
  objects: Readonly<Array<subItem>>;
}

export interface mutItem {
  id: string;
  wing: string;
  order: number;
  title: string;
  category: string;
  objects: Array<subItem>;
}
