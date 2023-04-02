import React from "react";

export const Button = ({ px, py, bg, type, title, ...others }) => {
  return (
    <>
      <button
        style={{
          background: bg,
          paddingTop: py,
          paddingBottom: py,
          paddingRight: px,
          paddingLeft: px,
        }}
        {...others}
        type={type}
      >
        {title}
      </button>
    </>
  );
};
