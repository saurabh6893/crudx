import React from "react";
import im from "../images/404.jpg";

const NotFound = () => {
  return (
    <>
      <img
        src={im}
        style={{
          width: "70%",
          margin: "60px 0 10px  170px",
        }}
      />
    </>
  );
};

export default NotFound;
