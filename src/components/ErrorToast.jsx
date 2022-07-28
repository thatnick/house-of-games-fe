import { useContext, useState, useEffect } from "react";
import { ErrorContext } from "../contexts/ErrorContext";

function ErrorToast() {
  const { error, setError } = useContext(ErrorContext);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (!error) return;
    setDisplay(true);
    const timer = setTimeout(() => {
      setDisplay(false);
      setError(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [error, setError]);

  if (display) {
    return (
      <div
        style={{
          backgroundColor: "red",
          color: "white",
          position: "fixed",
          bottom: 0,
          width: "100%",
        }} // TODO: move to external stylesheet
      >
        <p>Something went wrong :( {error}</p>
      </div>
    );
  }
}

export default ErrorToast;
