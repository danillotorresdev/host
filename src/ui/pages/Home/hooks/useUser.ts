import { useEffect, useState } from "react";
import { User, fetchUser } from "@/services/fetchUser/fetchUser.service";

export const useUser = (username?: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<User | null | undefined>(null);

  useEffect(() => {
    if (!username) return;

    const fetchUserData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const dataResponse = await fetchUser(username);
        setData(dataResponse);
      } catch (error) {
        setError("Usuário não encontrado");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  return { data, isLoading, error };
};
