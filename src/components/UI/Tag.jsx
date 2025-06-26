import React from "react";
import "../UI/Tag.css"

const Tag = ({ text }) => {
  return (
    <button className="tag">
      {text}
    </button>
  );
};

export default Tag;