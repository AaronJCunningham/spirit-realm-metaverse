import create from "zustand";

export const useChatFocus = create((set) => ({
  chatFocus: false,
  setChatFocus: (chatFocus) => set({ chatFocus }),
}));

export const useCustomColor = create((set) => ({
  customColor: "#3191E0",
  setCustomColor: (customColor) => set({ customColor }),
}));

export const useCustomName = create((set) => ({
  userName: "",
  setUserName: (userName) => set({ userName }),
}));

export const useMobileInput = create((set) => ({
  pos: { x: 0, y: 0 },
  setPos: (pos) => set({ pos }),
}));
