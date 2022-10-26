import styled from "@emotion/styled";
import { Button, ButtonBaseProps } from "@mui/material";

export interface StyledButtonProps extends ButtonBaseProps {
  active: boolean;
}

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})<StyledButtonProps>(({ active }) => ({
  textTransform: "capitalize",
  fontSize: "16px",
  color: active ? "#fff" : "#aaa",
  borderRadius: 0,
  borderBottom: active ? `2px  solid  #fff` : "2px solid transparent",
  "&:hover": {
    background: "transparent",
    borderBottom: `2px  solid #fff`,
    color: "#fff",
  },
}));
