import { useEffect, useState } from "react";
import { fronttempApi } from "@/app/_features/fronttemp/api";
import { Matches } from "@/app/_features/fronttemp/api/fronttempApiType";

export const useMatchesData = () => {
  const [data, setData] = useState<Matches>({ matches: [] });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fronttempApi.getFronttemp();
      if (response) setData(response.data);
    } catch (error) {
      console.error("Ошибка:", error);
      setError("Не удалось загрузить информацию");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, loading, fetchData, setError };
};
