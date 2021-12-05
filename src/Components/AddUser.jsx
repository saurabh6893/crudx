import {
  FormGroup,
  InputLabel,
  FormControl,
  Input,
  Button,
  Typography,
} from "@mui/material";
import useHistory from "react-router-dom";

import { addUser } from "../Service/api";

import { makeStyles } from "@mui/styles";

import { react, useState } from "react";

const adStylez = makeStyles({
  contain: {
    width: "50%",
    margin: "5% 0 0 25%",
  },
});

const initialValues = {
  name: "",
  crew: "",
  Bounty: "",
  ship: "",
};
const AddUser = () => {
  const [user, setUser] = useState(initialValues);
  const { name, crew, Bounty, ship } = user;
  const classes = adStylez();
  const history = useHistory();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
  };

  return (
    <>
      <FormGroup className={classes.contain}>
        <Typography variant="h4">Add Users</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
        </FormControl>
        <FormControl>
          <InputLabel>Crew</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="crew" value={crew} />
        </FormControl>
        <FormControl>
          <InputLabel>Bounty</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="Bounty"
            value={Bounty}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Ship</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="ship" value={ship} />
        </FormControl>
        <Button variant="contained" onClick={() => addUserDetails()}>
          Add
        </Button>
      </FormGroup>
    </>
  );
};

export default AddUser;
