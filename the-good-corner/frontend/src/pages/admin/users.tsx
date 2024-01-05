import { GET_ALL_USERS } from "../../graphql/queries/queries";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_USER } from "../../graphql/mutations/mutations";
import { UserContext } from "../../components/Layout";
import { useContext } from "react";
import { useRouter } from "next/router";
const UserAdminPage = () => {
  const router = useRouter();
  const authInfo = useContext(UserContext);
  if (authInfo.role !== "admin") {
    router.push("/login");
  }
  const { loading, error, data } = useQuery<{
    getAllUsers: {
      id: string;
      email: string;
    }[];
  }>(GET_ALL_USERS);

  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_ALL_USERS }],
  });

  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>Error</p>;
  }
  if (data) {
    console.log(data);
    return (
      <>
        <p>Admin User Page</p>
        {data.getAllUsers.map((user) => (
          <div key={user.id}>
            <span>{user.email} </span>
            <button
              onClick={() => {
                deleteUser({ variables: { userId: user.id.toString() } });
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </>
    );
  }
};

export default UserAdminPage;
