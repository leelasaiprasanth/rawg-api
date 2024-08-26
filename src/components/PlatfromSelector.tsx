import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatfroms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatfromSelector = () => {
  const { data, error } = usePlatfroms();
  const setSelectedPlatformID = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatfromId = useGameQueryStore((s) => s.gaemQuery.platformId);
  const selecetedPlatform = usePlatform(selectedPlatfromId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selecetedPlatform?.name || "Platfroms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformID(platform.id)}
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
