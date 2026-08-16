export interface Skill {
  name: string;
  src: string;
  link: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
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
  /** Achievements with numbers where they exist. This is the section recruiters read. */
  highlights: string[];
  stack: string[];
  /** e.g. "Promotion" — a small signal that says more than a job title alone. */
  badge?: string;
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
