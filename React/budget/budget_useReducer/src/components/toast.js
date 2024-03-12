import { useEffect } from "react";
import "./toast.css";

function Toast({ setToast, text, position }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <div className="toast-wrapper">
      <div className="slide-top">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Toast;
