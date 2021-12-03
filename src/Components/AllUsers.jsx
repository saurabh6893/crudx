import { getUsers } from "../Service/api";

const AllUsers = async () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
  };
  return <p>Hello from all</p>;
};

export default AllUsers;
