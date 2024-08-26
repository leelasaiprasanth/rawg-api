import { useQuery } from "@tanstack/react-query";
import Screenshot from "../entities/Screenshots";
import APIClinet from "../services/api-client";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClinet<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
