import React from "react";

const TitleBox = ({ title, children }) => {
  return (
    <div className="title-box mt-1 px-2">
      <h2 className="text-main  position-relative">{title}</h2>
      {children}
    </div>
  );
};

export default TitleBox;
