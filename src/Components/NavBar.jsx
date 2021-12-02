import { AppBar, Toolbar, makeStyles, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const styles = makeStyles({
  header: { background: "Crimson" },
  tabs: {
    fontFamily: "Abril Fatface",
    color: "white",
    textDecoration: "none",
    marginRight: "20px",
    fontWeight: "bold",
  },
});

const NavBar = () => {
  const classes = styles();
  return (
    <AppBar className={classes.header} position="static ">
      <Toolbar>
        <NavLink className={classes.tabs} to="./" exact>
          CrudX
        </NavLink>
        <NavLink className={classes.tabs} to="./all" exact>
          AllUsers
        </NavLink>
        <NavLink className={classes.tabs} to="./add" exact>
          AddUser
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
