type Task = {
  id: string;
  title: string;
  needsJail: boolean;
};

export const tasks: Task[] = [
  {
    id: "1",
    title: "Glosträning",
    needsJail: false,
  },
  {
    id: "2",
    title: "Provskrivning",
    needsJail: true,
  },
];
