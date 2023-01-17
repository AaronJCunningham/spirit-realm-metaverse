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

export const useHover = create((set) => ({
  hover: false,
  setHover: (hover) => set({ hover }),
}));

export const useSetExhibit = create((set) => ({
  exhibit: {
    bool: false,
    portrait: false,
    title: "",
    description: "",
    artist: "",
    imageURL: "",
    URL: "",
    width: 1920,
    height: 1080,
  },
  setExhibit: (exhibit) => set({ exhibit }),
}));
