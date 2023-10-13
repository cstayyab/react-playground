
import React from "react";
import "./FloatingButton.css";

function FloatingButton(props) {
  const { children, onClick, title } = props;
  return (
    <button className="floating-button" onClick={onClick} title={title} aria-label={title}>
      {children}
    </button>
  );
}

export default FloatingButton;