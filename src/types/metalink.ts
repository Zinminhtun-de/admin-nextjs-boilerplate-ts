export interface MetaLinkProps {
  links: Links;
  meta: Meta;
}

export interface Links {
  first: string;
  last: string;
  prev: any;
  next: any;
}

export interface Meta {
  current_page: number;
  from: any;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: any;
  total: number;
}

export interface Link {
  url?: string;
  label: string;
  active: boolean;
}
