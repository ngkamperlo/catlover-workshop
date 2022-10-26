import { AppBar, Toolbar, Grid, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useNavigate, useLocation } from "react-router";
import Logo from "./logo/Logo.component";
import { StyledButton } from "./Menu.styled";

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid
          justifyContent="space-between"
          alignItems="center"
          container
          sx={{ maxWidth: 1200, margin: "0 auto" }}
        >
          <Grid item>
            <Button
              startIcon={<Logo style={{ width: 40, height: 40 }} />}
              disableRipple
              sx={{
                "&:hover": { backgroundColor: "transparent" },
              }}
              color="inherit"
              onClick={() => navigate("/")}
            >
              Cat Lover
            </Button>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={2}>
              <StyledButton
                active={location.pathname === "/"}
                onClick={() => navigate("/")}
              >
                Cats
              </StyledButton>
              <StyledButton
                color="inherit"
                active={location.pathname === "/breeds"}
                onClick={() => navigate("/breeds")}
              >
                Breeds
              </StyledButton>
            </Stack>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
