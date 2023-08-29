import { create } from 'zustand';

export type Task = {
  title: string;
  status: string;
};

interface StoreState {
  tasks: Task[];
  dragTask: any;
  addTask: (title: string, status: string) => void;
  removeTask: (title: string) => void;
  setDragTask: (dragTaskTitle: string | null) => void;
  moveTask: (title: string, status: string) => void;
}

const useStore = create<StoreState>((set) => ({
  tasks: [
    { title: 'Working on next js', status: 'Inprogress' },
    { title: 'Working on bug fixes', status: 'Done' },
    { title: 'Working on DB migration', status: 'Todo' },
  ],

  dragTask: null,

  addTask: (title, status) => set((store) => ({ tasks: [...store.tasks, { title, status }] })),

  removeTask: (title) =>
    set((store) => ({ tasks: store.tasks.filter((task) => task.title !== title) })),

  setDragTask: (dragTaskTitle) => set({ dragTask: dragTaskTitle }),

  moveTask: (title, status) =>
    set((store) => ({
      tasks: store.tasks.map((task) => (task.title === title ? { title, status } : task)),
    })),
}));

export default useStore;
