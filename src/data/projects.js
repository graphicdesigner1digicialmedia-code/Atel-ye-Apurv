export const ALL_PROJECTS = [
  {
    title: "THE HOUSE THAT BREATHES",
    year: "2025",
    cat: "in-progress",
    img: "https://picsum.photos/800/600?random=1",
    href: "#",
  },
  {
    title: "Tirchakhet Community Library",
    year: "2025",
    cat: "in-progress",
    img: "https://picsum.photos/600/800?random=2",
    href: "#",
    vertical: true,
  },
  {
    title: "RiStudio",
    year: "2025",
    cat: "completed",
    img: "https://picsum.photos/800/600?random=3",
    href: "#",
  },
  {
    title: "Forest Within",
    year: "2024",
    cat: "in-progress",
    img: "https://picsum.photos/600/800?random=4",
    href: "#",
    vertical: true,
  },
  {
    title: "Farmhouse 01",
    year: "2016",
    cat: "completed",
    img: "https://picsum.photos/800/600?random=5",
    href: "#",
  },
  {
    title: "Arches Villa",
    year: "2023",
    cat: "in-progress",
    img: "https://picsum.photos/800/600?random=6",
    href: "#",
  },
  {
    title: "Private Gym",
    year: "2020",
    cat: "completed",
    img: "https://picsum.photos/800/600?random=7",
    href: "#",
  },
  {
    title: "SPM Mansion",
    year: "2023",
    cat: "in-progress",
    img: "https://picsum.photos/600/800?random=8",
    href: "#",
    vertical: true,
  },
  {
    title: "Areion Office",
    year: "2024",
    cat: "completed",
    img: "https://picsum.photos/800/600?random=9",
    href: "#",
  },
  {
    title: "Micron",
    year: "2021",
    cat: "competition",
    img: "https://picsum.photos/600/800?random=10",
    href: "#",
    vertical: true,
  },
  {
    title: "Canyon",
    year: "2023",
    cat: "in-progress",
    img: "https://picsum.photos/800/600?random=11",
    href: "#",
  },
  {
    title: "Amani",
    year: "2015",
    cat: "completed",
    img: "https://picsum.photos/800/600?random=12",
    href: "#",
  },
];

export const FILTERS = [
  "All",
  "Competition",
  "Completed",
  "In-Progress",
  "Photo",
  "Video",
];

export const catLabel = (cat) =>
  cat === "in-progress"
    ? "In-Progress"
    : cat.charAt(0).toUpperCase() + cat.slice(1);