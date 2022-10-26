import { Box, Grid } from "@mui/material";
import styled from "@emotion/styled";

export const sxButton = {
  margin: "16px auto 32px auto",
  padding: "4px 8px",
  color: "#fff",
  backgroundColor: "#1976d2",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#00FFFF",
  },
};

export const StyledContainer = styled(Box)({
  maxWidth: 1200,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
});

export const StyledImageGrid = styled(Grid, {
  shouldForwardProp: (prop) => prop !== "columnWidth" && prop !== "data-testid",
})(({ columnWidth }: { columnWidth: number }) => ({
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  gridTemplateColumns: `repeat(auto-fill, ${columnWidth}px)`,
  gap: 16,
  padding: "24px 16px",
}));

export const StyledImageGridItem = styled(Grid)(
  ({ width, height }: { width: number; height: number }) => ({
    width: width,
    height: height,
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
      transition: "transform 0.3s ease-out",
    },
    "& img:hover": {
      transform: "scale(1.05)",
    },
    border: "2px solid transparent",
    borderRadius: 4,
    "&:hover": {
      border: "2px solid #00ffff",
    },
  })
);
