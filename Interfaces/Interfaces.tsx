export interface Project {
  id: number;
  title: string;
  myRole: {
    frontEnd: boolean;
    backEnd: boolean;
    designer: boolean;
  };
  description: string;
  image: {
    logo?: string;
    mobile: string;
  };
  link: {
    website?: string;
    documentation?: string;
    gitHub: string;
  };
  color: string;
}

export interface Skill {
  name: string;
  src: string;
  link: string;
}
