import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import Platform from "../entities/Platform";
import APIClinet, { FetchResponse } from "../services/api-client";

const apiClient = new APIClinet<Platform>("/platforms/list/parents");

const usePlatfroms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatfroms;
