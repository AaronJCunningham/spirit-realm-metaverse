import create from "zustand";

export const useChatFocus = create((set) => ({
  chatFocus: false,
  setChatFocus: (chatFocus) => set({ chatFocus }),
}));

export const useCustomColor = create((set) => ({
  customColor: "",
  setCustomColor: (customColor) => set({ customColor }),
}));

export const useCustomName = create((set) => ({
  userName: "",
  setUserName: (userName) => set({ userName }),
}));
