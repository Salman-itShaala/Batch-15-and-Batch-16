import React, { useState } from "react";

const Option = () => {
  const [isVisible, setIsVisible] = useState(false);

  console.log("Hii");

  return (
    <div className="component">
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle visibility
      </button>
      {isVisible && <p>I'm paragraph</p>}
    </div>
  );
};

export default Option;
