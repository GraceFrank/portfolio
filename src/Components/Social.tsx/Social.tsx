import { Button, Divider, Link, Stack } from "@chakra-ui/react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { SiHashnode } from "react-icons/si";

const socialMediaHandles = [
  {
    name: "Github",
    icon: AiFillGithub,
    link: "https://github.com/gracefrank",
  },
  {
    name: "Linkedin",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/gracefrank/",
  },
  {
    name: "Hashnode",
    icon: SiHashnode,
    link: "https://graceydev.hashnode.dev/",
  },
  {
    name: "Twitter",
    icon: AiFillTwitterCircle,
    link: "https://twitter.com/frankgracy",
  },
  {
    name: "Instagram",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/frankgracey/",
  },
];

export const SocialMediaHandles = () => {
  <Stack gap={5} direction={["row", "column"]}>
    {socialMediaHandles.map(({ link, name, icon: Icon }) => (
      <Button
        leftIcon={<Icon />}
        key={name}
        as="a"
        href={link}
        target="_blank"
      ></Button>
    ))}
    <Divider height={28} orientation="vertical" display={["none", "block"]} />
  </Stack>;
};
