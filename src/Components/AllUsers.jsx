import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from "@material-ui/core";
import { getUsers } from "../Service/api";
import { useEffect, useState } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Occupation</TableCell>
            <TableCell>Bounty</TableCell>
            <TableCell>Ship</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow>
              <TableCell> {user.name} </TableCell>
              <TableCell> {user.occupation} </TableCell>
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
