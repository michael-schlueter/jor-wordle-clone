import React from "react";

function Banner({ children, status, action, actionText }) {
  return (
    <div className={`${status} banner`}>
      {children}
      {action && <button className="action-btn" onClick={action}>{actionText}</button>}
    </div>
  );
}

export default Banner;
