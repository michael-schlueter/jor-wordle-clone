import React, { ReactNode } from "react";

interface BannerProps {
  children: ReactNode;
  status: "happy" | "sad";
  action: () => void;
  actionText: string;
}

function Banner({ children, status, action, actionText }: BannerProps) {
  return (
    <div className={`${status} banner`}>
      {children}
      {action && (
        <button className="action-btn" onClick={action}>
          {actionText}
        </button>
      )}
    </div>
  );
}

export default Banner;
