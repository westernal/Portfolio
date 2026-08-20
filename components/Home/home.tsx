import SocialIcons from "../SocialIcons";
import { mailtoHref, profile, stats } from "../../data/profile";

const HomePage = () => {
  return (
    <section className="hero" id="home-page">
      <div className="hero-inner">
        {profile.availability.open && (
          <p className="availability">
            <span className="availability-dot" aria-hidden="true" />
            {profile.availability.label}
            <span className="availability-detail">
              {profile.availability.detail}
            </span>
          </p>
        )}

        <h1 className="hero-name">{profile.name}</h1>

        <p className="hero-role">{profile.role}</p>

        <p className="hero-headline">{profile.headline}</p>
        <p className="hero-sub">{profile.subheadline}</p>

        <div className="hero-actions">
          {/* Label matches where it lands. If a projects section ever comes
              back, "See my work" pointing at that is the stronger CTA. */}
          <a href="#experience" className="btn btn-primary">
            See my experience
          </a>
          <a href={mailtoHref} className="btn btn-ghost">
            Email me
          </a>
          {/* A plain anchor, not next/link: the PDF is a static file rather than a
              route, and Link prefetched all 210KB of it on load — which on a
              throttled connection pushed the hero's own LCP paint out by seconds. */}
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="btn btn-quiet"
            id="resume"
          >
            Résumé (PDF)
          </a>
        </div>

        <dl className="stat-strip">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <dt className="stat-value">{stat.value}</dt>
              <dd className="stat-label">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <div className="hero-meta">
          <span>
            {profile.location} · {profile.timezone}
          </span>
          <span className="hero-meta-sep" aria-hidden="true">
            ·
          </span>
          <span>{profile.timezoneNote}</span>
        </div>

        <SocialIcons className="hero-socials" />
      </div>
    </section>
  );
};

export default HomePage;
