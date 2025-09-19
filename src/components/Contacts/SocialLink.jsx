import React from "react";

export default function SocialLink({ href, Icon, color, delay }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-circle ${color} text-base-content hover:scale-110 transition-transform duration-300 `}
      style={{ animationDelay: `${delay}s` }}
    >
      <Icon />
    </a>
  );
}
