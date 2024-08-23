import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "./hooks/useGenres";
import getCroppedImageUrl from "./services/image-url";

interface Props {
  onSlectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSlectedGenre }: Props) => {
  const { data, isloading, error } = useGenres();

  if (error) return null;
  if (isloading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem paddingY="5px" key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSlectedGenre(genre)}
              variant="link"
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
