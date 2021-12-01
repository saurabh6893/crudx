import { AppBar, Toolbar, makeStyles, Typography } from "@material-ui/core";

const styles = makeStyles({
  header: { background: "crimson" },
});

const NavBar = () => {
  const classes = styles();
  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <Typography component="h1">Crud-X</Typography>
        <Typography component="h1">Crud-X</Typography>
        <Typography component="h1">Crud-X</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
