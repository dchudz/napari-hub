export interface CollectionInstitution {
  institution: string;
  website: string[];
}

export interface CollectionLinks {
  orcid: string;
  twitter?: string;
  github?: string;
  website?: string;
}

export interface CollectionCurator {
  name: string;
  title: string;
  affiliation: CollectionInstitution;
  links?: CollectionLinks;
}

export interface CollectionAuthor {
  name: string;
  email?: string;
  orcid?: string;
}

export interface CollectionPlugin {
  name: string;
  summary: string;
  authors: CollectionAuthor[];
  display_name?: string;
  comment?: string;
}

export interface CollectionIndexData {
  title: string;
  cover_image: string;
  summary: string;
  curator: CollectionCurator;
  symbol: string;
}

export interface CollectionData extends CollectionIndexData {
  description: string;
  updated_date: Date;
  visible: boolean;
  plugins: CollectionPlugin[];
  visibility?: 'public' | 'hidden' | 'disabled';
}
