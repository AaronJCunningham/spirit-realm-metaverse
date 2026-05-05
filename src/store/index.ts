import create from "zustand";
import type { NextRouter } from "next/router";

interface ProgressState {
  progressStore: number;
  setProgressStore: (progressStore: number) => void;
}

interface MenuState {
  menu: boolean;
}

interface RouterFixState {
  router: NextRouter | null;
  dom: HTMLElement | null;
}

export const useProgressStore = create<ProgressState>((set) => ({
  progressStore: 0,
  setProgressStore: (progressStore: number) => set({ progressStore }),
}));

export const useMenu = create<MenuState>((set) => ({
  menu: false,
}));

export const useRouterFix = create<RouterFixState>(() => {
  return {
    router: null,
    dom: null,
  };
});
