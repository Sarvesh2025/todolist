import { atom, selector } from "recoil";

export const todoAtom = atom({
  key: "todoAtom",
  default:"", 
});
export const todosAtom = atom({
    key: "todosAtom",
    default: []
});
export const filterAtom = atom({
  key: "filterAtom",
  default: "",
});
export const selectedCategoryAtom = atom({
  key: "selectedCategoryAtom",
  default: "All",
});

export const selectedFilterSelector = selector({
  key: "selectedFilterSelector",
  get: ({ get }) => {
    const todos = get(todosAtom);
    const selectedCategory = get(selectedCategoryAtom);
    if (selectedCategory === "All") return todos;
    return todos.filter((todo) => todo.filter === selectedCategory);
  },
});