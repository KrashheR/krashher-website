import React from "react";

function Hamburger ({ toggle }) {
  let topLine = toggle ? "M 12 27 L 28 13" : "M 12 13 L 28 13";
  let midLine = toggle ? 0 : 1;
  let bottomLine = toggle ? "M 12 13 L 28 27" : "M 12 27 L 28 27";


  return(
    <svg width="40" height="40" viewBox="0 0 40 40" strokeWidth="3" stroke="#EDF738" strokeLinecap="round" >
      <path d = {topLine} />
      <path d="M 12 20 L 28 20" opacity = {midLine} />
      <path d = {bottomLine} />
      <animateTransform
            attributeName="transform"
            begin="click"
            dur="0.3s"
            type="scale"
            from="0.8"
            to="1"
            repeatCount="0"
        />
    </svg>
  );
}

export default Hamburger;
