export type Item = {
  name?: string;
  text?: string;
  type?: string;
  level?: string;
  enabled?: boolean;
  url?: string;
  viewBox?: string;
  path?: string;
  position?: string;
  degree?: string;
  date?: string;
  description?: string;
  responsibilities?: string;
};
export type InfoComponent = {
  type: string;
  name?: string;
  profession?: string;
  profileImageURL?: string;
  display: boolean;
  phone?: string;
  email?: string;
  cite?: string;
  about?: string;
  header: string;
  degree?: string;
  date?: string;
  items?: Item[];
  text?: string;
  position: "left" | "right";
};

export type Page = {
  id: number;
  elements: InfoComponent[];
};
