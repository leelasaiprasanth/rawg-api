import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClinet, { FetchResponse } from "../services/api-client";

const apiClient = new APIClinet<Platform>("/platforms/list/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatfroms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hours
    initialData: platforms,
  });

export default usePlatfroms;
