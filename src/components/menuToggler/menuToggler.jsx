import React from "react";

function MenuToggler ({ toggle }) {
  let topLine = toggle ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5";
  let midLine = toggle ? 0 : 1;
  let bottomLine = toggle ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346";


  return(
    <svg width="20" height="20" viewBox="0 0 23 23" strokeWidth="3" stroke="#EDF738" strokeLinecap="round">
      <path d = {topLine} />
      <path
        d="M 2 9.423 L 20 9.423" opacity = {midLine}
      />
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

export default MenuToggler;
