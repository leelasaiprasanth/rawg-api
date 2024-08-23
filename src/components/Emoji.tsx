import logo1 from "../assets/logo.svg";
import logo2 from "../assets/logo.svg";
import logo3 from "../assets/logo.svg";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: logo1, alt: "Meh", boxSize: "25px" },
    4: { src: logo2, alt: "recommended", boxSize: "25px" },
    5: { src: logo3, alt: "Exceptional", boxSize: "25px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
