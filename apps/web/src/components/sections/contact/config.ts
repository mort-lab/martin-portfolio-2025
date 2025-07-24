import type { Contact } from "@/types/contact";
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";

const contact: Contact = {
  email: "mirurozk@gmail.com",
  socials: [
    {
      name: "Github",
      href: "https://github.com/mort-lab",
      Icon: SiGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/martin-areso/",
      Icon: SiLinkedin,
    },
    {
      name: "Upwork",
      href: "https://www.upwork.com/freelancers/~01555cf20ed1433307",
      Icon: SiX,
    },
  ],
};

export { contact };
