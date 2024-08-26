import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gaemQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gaemQuery: {},
  setSearchText: (searchText) => set(() => ({ gaemQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({ gaemQuery: { ...store.gaemQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gaemQuery: { ...store.gaemQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gaemQuery: { ...store.gaemQuery, sortOrder } })),
}));

export default useGameQueryStore;
