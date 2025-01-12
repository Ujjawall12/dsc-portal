import workshop from "assets/workshop.svg";
import laptop from "assets/laptop.svg";
import community from "assets/community.svg";

const cardList = [
  {
    image: workshop,
    title: "Workshops & Talks",
    description:
      "Highlight opportunities to learn cutting-edge technologies like Flutter, Firebase, and Machine Learning.",
    className: "md:col-span-1 col-span-2 md:flex-1 md:flex-shrink-0",
    link: "#",
  },
  {
    image: laptop,
    title: "Team Projects",
    description:
      "Showcase GDSC project highlights and the benefits of team collaboration.",
    className: "md:col-span-1 col-span-2 md:flex-1 md:flex-shrink-0",
    link: "#",
  },
  {
    image: community,
    title: "Community Support",
    description:
      "Highlight the community's support for developers and innovators.",
    className: "md:col-span-1 col-span-4 md:flex-1 md:flex-shrink-0",
    link: "#",
  },
];

export default cardList;
