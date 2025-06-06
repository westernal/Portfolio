export interface Project {
  id: number;
  title: string;
  myRole: {
    frontEnd: boolean;
    backEnd: boolean;
    design: boolean;
  };
  description: string;
  image: {
    mobile: string;
    website: string;
  };
  link: string;
  color: string;
}

export interface Skill {
  name: string;
  src: string;
  link: string;
}

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: {
    from: string;
    to: string;
  };
  companyLogo: {
    url: string;
    width: number;
    height: number;
  };
}

export interface Blog {
  id: string;
  title: string;
  description: string;
  url: string;
  user: { profile_image: string };
  cover_image: string;
  published_at: Date;
}

export interface Social {
  name: string;
  url: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  role: string;
  description: string;
}
