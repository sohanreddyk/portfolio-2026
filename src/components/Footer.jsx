import { profile } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container container--wide">
        <div className="footer__inner">
          <div className="footer__brand">
            Sohan<b>.</b>
          </div>
          <div className="footer__col">
            <a href={profile.socials.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={`mailto:${profile.socials.email}`}>Email ↗</a>
          </div>

          <div className="footer__meta">
            <span>© {year} Sohan Reddy — Seattle, WA</span>
            <span>Built with React · Framer Motion · Instrument Serif</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
