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

const Icon = ({ icon }) => {
  if (icon === "html") return <BiLogoHtml5 color="#1E4D7C" size={48}/>;
  if (icon === "css") return <BiLogoCss3 color="#1E4D7C" size={48}/>;
  if (icon === "js") return <BiLogoJavascript color="#1E4D7C" size={48}/>;
  if (icon === "react") return <BiLogoReact color="#1E4D7C" size={48}/>;
  if (icon === "sass") return <BiLogoSass color="#1E4D7C" size={48} />;
  if (icon === "redux") return <BiLogoRedux color="#1E4D7C" size={48}/>;
  if (icon === "next") return <TbBrandNextjs color="#1E4D7C" size={48}/>;
  if (icon === "linkedin") return <BiLogoLinkedinSquare color="#1E4D7C" size={48}/>;
  if (icon === "github") return <BiLogoGithub color="#1E4D7C" size={48}/>;
}

export default Icon;
