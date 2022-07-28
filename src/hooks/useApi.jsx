import { useEffect, useState } from "react";

function useApi({ apiCall, argument }) {
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiCall(argument).then((res) => {
      setResponse(res);
      setIsLoading(false);
    });
  }, [apiCall, argument]);

  return [isLoading, response];
}

export default useApi;
