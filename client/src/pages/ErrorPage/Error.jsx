import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Error = () => {
  const history = useHistory();

  return (
    <div className="error_page">
      <h1>Don't misbehave with App</h1>
      <h1>Please Login Again</h1>
    </div>
  );
};

export default Error;
