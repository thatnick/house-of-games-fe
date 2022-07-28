import { useEffect, useState } from "react";

function useApi({ apiCall, args = [] }) {
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiCall(...args).then((response) => {
      setResponse(response);
      setIsLoading(false);
    });
  }, [apiCall, ...args]);

  return [isLoading, response];
}

export default useApi;
