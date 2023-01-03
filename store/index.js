import create from "zustand";

export const useProgressStore = create((set) => ({
  progressStore: 0,
  setProgressStore: (progressStore) => set({ progressStore }),
}));

export const useMenu = create((set) => ({
  menuOpen: false,
}));

export const useRouterFix = create(() => {
  return {
    router: null,
    dom: null,
  };
});
