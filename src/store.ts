import { create } from "zustand";

type TState = {
  component1: number;
  component2: number;
  component3: number;
  increment: (id: string) => void;
};

export const useStore = create<TState>((set) => ({
  component1: 0,
  component2: 0,
  component3: 0,
  increment: (id: string) => {
    set((state) => {
      if (id === "component1") return { component1: state.component1 + 1 };
      if (id === "component2") return { component2: state.component2 + 1 };
      if (id === "component3") return { component3: state.component3 + 1 };

      // Fallback to the current state
      return state;
    });
  },
}));
