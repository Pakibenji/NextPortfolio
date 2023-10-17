import React from "react";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoSass,
  BiLogoRedux,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";

const Icon = ({ icon }) => {
  if (icon === "html") return <BiLogoHtml5 color="#2966AD" size={48}/>;
  if (icon === "css") return <BiLogoCss3 color="#2966AD" size={48}/>;
  if (icon === "js") return <BiLogoJavascript color="#2966AD" size={48}/>;
  if (icon === "react") return <BiLogoReact color="#2966AD" size={48}/>;
  if (icon === "sass") return <BiLogoSass color="#2966AD" size={48} />;
  if (icon === "redux") return <BiLogoRedux color="#2966AD" size={48}/>;
  if (icon === "next") return <TbBrandNextjs color="#2966AD" size={48}/>;
};

export default Icon;
