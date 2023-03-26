import React, { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    window.location.href = "/";
  });

  return (
    <div>
      <p>logging out...</p>
    </div>
  );
}
