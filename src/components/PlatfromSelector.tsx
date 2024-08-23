import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatfroms from "./hooks/usePlatforms";
import { Platform } from "./hooks/useGames";

interface Props {
  onSelectedPlatfrom: (platfrom: Platform) => void;
  selectedPlatfrom: Platform | null;
}

const PlatfromSelector = ({ onSelectedPlatfrom, selectedPlatfrom }: Props) => {
  const { data, error } = usePlatfroms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatfrom?.name || "Platfroms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectedPlatfrom(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatfromSelector;
