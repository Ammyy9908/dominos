import React from "react";
import "./meta.css";
const MetaInfo = ({ lines, heading }) => {
  return (
    <div className="meta-info">
      <div className="meta-header">
        <h3>{heading}</h3>
      </div>

      {lines
        ? lines.map((line, i) => {
            return <p>{line}</p>;
          })
        : null}
    </div>
  );
};

export default MetaInfo;
