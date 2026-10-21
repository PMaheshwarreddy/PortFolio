import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import { SOCIALS } from './config.js';

export const SOCIAL_LINKS = [
  ['GitHub', SOCIALS.github, Github],
  ['LinkedIn', SOCIALS.linkedin, Linkedin],
  ['X', SOCIALS.twitter, Twitter],
  ['Instagram', SOCIALS.instagram, Instagram],
];

export default function Socials({ className = 'socials', only }) {
  const links = only ? SOCIAL_LINKS.filter(([l]) => only.includes(l)) : SOCIAL_LINKS;
  return (
    <div className={className}>
      {links.map(([label, href, Icon]) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="icon-btn">
          <Icon size={17} />
        </a>
      ))}
    </div>
  );
}
