import { Grid, Box } from "@mui/material";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getBreeds } from "../../../api/breeds";
import { DEFAULT_QUERY_OPTIONS } from "../../../types/constants";
import { Breed } from "../../../types/server";
import {
  StyledContainer,
  StyledImageGrid,
  StyledImageGridItem,
} from "../home/Home.styled";

interface BreedsProps {}

const Breeds: React.FC<BreedsProps> = () => {
  const { isError, data: breedsFromCache } = useQuery(["breeds"], getBreeds, {
    ...DEFAULT_QUERY_OPTIONS,
    onSuccess: (data: Breed[]) => {
      setBreeds(data);
    },
  });
  const [breeds, setBreeds] = useState<Breed[]>(breedsFromCache ?? []);

  return isError ? (
    <Grid>Something went terribly wrong</Grid>
  ) : (
    <StyledContainer>
      <StyledImageGrid columnWidth={200}>
        {breeds.map((breed: Breed) => {
          return (
            <Box key={breed.id}>
              <h5 style={{ textAlign: "center" }}>{breed.name}</h5>
              <StyledImageGridItem width={200} height={200}>
                <img src={breed?.image?.url} alt={breed?.name} />
              </StyledImageGridItem>
            </Box>
          );
        })}
      </StyledImageGrid>
    </StyledContainer>
  );
};

export default Breeds;
