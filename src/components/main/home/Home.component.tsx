import { Grid, Button } from "@mui/material";
import { getCats } from "../../../api/cats";
import { useQuery } from "@tanstack/react-query";
import { DEFAULT_QUERY_OPTIONS } from "../../../types/constants";
import { useState } from "react";
import { Cat } from "../../../types/server";
import {
  StyledContainer,
  StyledImageGrid,
  StyledImageGridItem,
  sxButton,
} from "./Home.styled";
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [page, setPage] = useState<number>(1);
  const [cats, setCats] = useState<Cat[]>([]);

  const { isFetching, isError } = useQuery(
    ["cats", page],
    () => getCats(page),
    {
      ...DEFAULT_QUERY_OPTIONS,
      onSuccess: (data: Cat[]) => {
        setCats([...cats, ...data]);
      },
    }
  );

  const handleLoadMoreButtonClick = () => {
    setPage((prev) => prev + 1);
  };

  return isError ? (
    <Grid>Something went terribly wrong</Grid>
  ) : (
    <StyledContainer>
      <StyledImageGrid columnWidth={200}>
        {cats
          ? cats.map((cat) => (
              <StyledImageGridItem item key={cat.id} width={200} height={200}>
                <img src={cat.url} alt={cat.id} data-testid="cat" />
              </StyledImageGridItem>
            ))
          : null}
      </StyledImageGrid>
      <Button
        sx={sxButton}
        onClick={handleLoadMoreButtonClick}
        disabled={isFetching}
      >
        {isFetching ? "Fetching..." : "Load more"}
      </Button>
    </StyledContainer>
  );
};

export default Home;
