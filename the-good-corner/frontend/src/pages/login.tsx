import { LOGIN } from "@/graphql/queries/queries";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "../pages/_app";

const LoginPage = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const router = useRouter();
  const [handleLogin, { data, loading, error }] = useLazyQuery(LOGIN);
  return (
    <div>
      <p>Login Page</p>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.target;
          const formData = new FormData(form as HTMLFormElement);

          // Or you can work with it as a plain object:
          const formJson = Object.fromEntries(formData.entries());
          // console.log(formJson);

          const result = await handleLogin({
            variables: {
              userData: formJson,
            },
          });
          // console.log("result", result.data.login);
          localStorage.setItem("jwt", result.data.login);
          setIsLoggedIn(true);
          router.back();
        }}
        className="text-field-with-button"
      >
        <input
          name="email"
          className="text-field main-search-field"
          type="text"
        />
        <input
          name="password"
          className="text-field main-search-field"
          type="password"
        />
        <button className="button button-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
