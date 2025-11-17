import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

const contactLinks = {
  email: "mailto:akgbytes@gmail.com",
  linkedin: "https://www.linkedin.com/in/akgbytes",
  github: "https://github.com/akgbytes",
  twitter: "https://x.com/akgbytes",
};

export const DATA = {
  navbar: [
    {
      name: "Github",
      link: contactLinks.github,
      icon: IconBrandGithub,
    },
    {
      name: "X",
      link: contactLinks.twitter,
      icon: IconBrandX,
    },
    {
      name: "LinkedIn",
      link: contactLinks.linkedin,
      icon: IconBrandLinkedin,
    },
    {
      name: "Email",
      link: contactLinks.email,
      icon: IconMail,
    },
  ],
};
