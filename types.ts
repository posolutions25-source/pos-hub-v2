
export interface Division {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: string;
  link: string;
  isExternal?: boolean;
  status?: 'active' | 'coming-soon';
}

export type Page = 'hub' | 'business-tools';
