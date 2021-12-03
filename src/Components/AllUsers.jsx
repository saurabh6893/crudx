import { getUsers } from "../Service/api";

const AllUsers = () => {
  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response);
  };

  return <>axis from user</>;
};
export default AllUsers;
