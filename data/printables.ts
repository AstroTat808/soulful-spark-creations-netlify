export type Printable = {
  slug: string;
  title: string;
  description: string;
  preview?: string;
  download?: string;
};

export const printables: Printable[] = [
  {
    slug: "gratitude-journal",
    title: "Gratitude Journal (Printable)",
    description: "Daily prompts to cultivate gratitude and mindfulness.",
    preview: "/images/printables/gratitude-journal.png",
    download: "/files/gratitude-journal.pdf"
  },
  {
    slug: "habit-tracker",
    title: "Habit Tracker",
    description: "Track your habits weekly with a clean, minimal layout.",
    preview: "/images/printables/habit-tracker.png",
    download: "/files/habit-tracker.pdf"
  }
];
