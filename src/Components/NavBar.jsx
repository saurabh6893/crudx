import { AppBar, Toolbar, makeStyles, Typography } from "@material-ui/core";

const styles = makeStyles({
  header: { background: "Crimson" },
});

const NavBar = () => {
  const classes = styles();
  return (
    <AppBar className={classes.header} position="static ">
      <Toolbar>
        <Typography component="h1">CrudX</Typography>
        <Typography component="h1">CrudX</Typography>
        <Typography component="h1">CrudX</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
