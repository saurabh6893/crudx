import {
  Table,
  TableRow,
  TableCell,
  Button,
  TableHead,
  TableBody,
  makeStyles,
} from "@material-ui/core";
import { getUsers } from "../Service/api";
import { useEffect, useState } from "react";

const theStylez = makeStyles({
  table: {
    width: "80%",
    margin: "5% 0 0 10%",
  },
  thehead: {
    "& > *": {
      background: " #327b9b ",
      fontSize: "25px",
      fontFamily: "Roboto",
      border: "2px solid black",
    },
  },
  therow: {
    "& > *": {
      fontSize: "20px",
      fontFamily: "Roboto",
      background: "#d4ebe6",
      border: "1px solid black",
    },
  },
});

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  const classes = theStylez();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
  };

  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thehead}>
            <TableCell>Name</TableCell>
            <TableCell>Crew</TableCell>
            <TableCell>Bounty</TableCell>
            <TableCell>Ship</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow className={classes.therow}>
              <TableCell> {user.name} </TableCell>
              <TableCell> {user.crew} </TableCell>
              <TableCell> {user.Bounty} </TableCell>
              <TableCell> {user.ship} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
export default AllUsers;
