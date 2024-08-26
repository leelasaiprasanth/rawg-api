import { useQuery } from "@tanstack/react-query";
import Trailer from "../entities/Trailer";
import APIClinet from "../services/api-client";

const useTrailers = (gameId: number) => {
  const apiClient = new APIClinet<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
