import { useEffect, useState } from "react";

function useApi({ apiCall, argument, responseSetter }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiCall(argument).then((response) => {
      responseSetter(response);
      setIsLoading(false);
    });
  }, [apiCall, argument, responseSetter]);

  return isLoading;
}

export default useApi;
