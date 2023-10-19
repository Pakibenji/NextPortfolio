import React from "react";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoSass,
  BiLogoRedux,
  BiLogoLinkedinSquare,
  BiLogoGithub,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiRubyonrails } from "react-icons/si";

const iconComponents = {
  html: BiLogoHtml5,
  css: BiLogoCss3,
  js: BiLogoJavascript,
  javascript: BiLogoJavascript,
  react: BiLogoReact,
  sass: BiLogoSass,
  scss: BiLogoSass,
  redux: BiLogoRedux,
  next: TbBrandNextjs,
  linkedin: BiLogoLinkedinSquare,
  github: BiLogoGithub,
  rails: SiRubyonrails,
};

const Icon = ({ icon }) => {
  const IconComponent = iconComponents[icon.toLowerCase()];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent color="#1E4D7C" size={48} />;
};

export default Icon;
