import { useEffect, useState } from "react";

export const useFetch = <T,>(fetchFn: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = () => {
    setLoading(true);
    fetchFn()
      .then(setData)
      .catch(() => setError("Error en la petición"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    refetch();
  }, []);

  return { data, loading, error, refetch };
};
