import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout({ onLogout }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Show confirmation, then log out and redirect
    if (window.confirm("Are you sure you want to log out?")) {
      if (onLogout) onLogout();
      navigate("/", { replace: true });
    } else {
      navigate(-1); // Go back if cancelled
    }
  }, [navigate, onLogout]);

  return null;
}