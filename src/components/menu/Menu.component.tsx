import { AppBar, Toolbar, Grid, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  const navigate = useNavigate();

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
              <Button color="inherit">
                <NavLink to="/">Cats</NavLink>
              </Button>
              <Button color="inherit">
                <NavLink to="/breeds">Breeds</NavLink>
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
