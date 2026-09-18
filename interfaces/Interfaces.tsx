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
    /** Set for marks that are a full badge rather than a bare glyph — they
        carry their own frame, so they sit better filling the tile than
        floating inset in it. */
    bleed?: boolean;
  };
}

/** A dev.to post, normalised by data/blogs.ts — see DevToArticle there for the raw shape. */
export interface BlogPost {
  id: number;
  title: string;
  description: string;
  url: string;
  coverImage: string;
  /** ISO 8601, straight from the feed. */
  publishedAt: string;
}

export interface Social {
  name: string;
  url: string;
  imageUrl: string;
  /** Analytics event name, read by components/Analytics/TrackClicks. */
  event: string;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  role: string;
  description: string;
}
