import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ToolTip = ({ text }) => {
  return (
    <span className="absolute font-merriweather tracking-wider bottom-10 left-1/2 -translate-x-1/2 opacity-0  peer-hover:opacity-100 text-sm transition-opacity bg-blue-900 text-white rounded px-2 py-1 shadow-lg whitespace-nowrap">
      {text}
    </span>
  );
};

const SocialIcons = ({ name, url, icon }) => {
  return (
    <div className="relative overflow-visible">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="peer"
        aria-label={name}
      >
        <FontAwesomeIcon
          icon={icon}
          className="hover:text-blue-400 transition size-6 md:size-8"
        />
      </a>
      <ToolTip text={name} />
    </div>
  );
};

export default SocialIcons;
