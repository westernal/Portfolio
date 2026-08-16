/**
 * Single source of truth for the facts a recruiter reads first.
 * Hero, contact block, footer, page metadata and JSON-LD all read from here,
 * so a detail can never drift out of sync between sections again.
 */

export const profile = {
  name: "Ali Navidi",
  firstName: "Ali",
  role: "Senior Frontend Engineer",

  /**
   * Sum of employed months across the roles in data/jobs.tsx
   * (Jan 2020 onward, excluding the gaps). Bump when it rolls over.
   */
  yearsExperience: 5,

  /** The one line that has to do the work in the first three seconds. */
  headline:
    "I build fast, accessible React and Next.js products — and lead the teams that ship them.",

  /** Supporting line. Concrete, not adjectives. */
  subheadline:
    "5+ years across AI, insurance and regulatory SaaS — from a solo build to leading frontend for a Swiss AI startup.",

  location: "Tehran, Iran",
  timezone: "GMT+3:30",
  timezoneNote: "Full overlap with European working hours",

  /** Flip `open` to false and the availability pill disappears everywhere. */
  availability: {
    open: false,
    label: "Open to Senior & Lead Frontend roles",
    detail: "Remote or relocation",
  },

  email: "aliinavidi1379@gmail.com",
  resume: "/Ali Navidi Resume.pdf",

  links: {
    github: "https://github.com/westernal",
    linkedin: "https://www.linkedin.com/in/ali-navidi/",
    stackoverflow: "https://stackoverflow.com/users/15353979/ali-navidi",
    devto: "https://dev.to/westernal",
  },

  siteUrl: "https://www.alinavidi.dev",
} as const;

/**
 * Numbers a hiring manager can scan without reading a paragraph.
 * Every one is checkable against the roles in data/jobs.tsx — an unverifiable
 * figure is worth less than one a reader can confirm two scrolls later.
 *
 * Three, deliberately. A fourth tile only ever got filled with padding, and a
 * weak stat drags down the three next to it. Add one only if it earns its place.
 */
export const stats = [
  {
    value: `${profile.yearsExperience}+`,
    label: "Years shipping production frontends",
  },
  {
    value: "5",
    label: "Roles across Iran, Switzerland and Canada",
  },
  {
    value: "4 mo",
    label: "From developer to frontend team lead",
  },
];

/**
 * A neutral mailto — a hiring manager writing the first email should not have
 * to send themselves a subject line that says "I want to hire you".
 */
export const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
  "Role opportunity for Ali Navidi",
)}`;
