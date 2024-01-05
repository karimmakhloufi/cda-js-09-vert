import { UserContext } from "@/components/Layout";
import { LOGIN } from "@/graphql/queries/queries";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const LoginPage = () => {
  const router = useRouter();
  const authInfo = useContext(UserContext);
  const [handleLogin] = useLazyQuery(LOGIN, {
    async onCompleted(data) {
      localStorage.setItem("jwt", data.login);
      authInfo.refetchLogin();
      router.push("/");
    },
  });
  return (
    <div>
      <p>Login Page</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target;
          const formData = new FormData(form as HTMLFormElement);
          const formJson = Object.fromEntries(formData.entries());

          handleLogin({
            variables: {
              userData: formJson,
            },
          });
        }}
        className="text-field-with-button"
      >
        <input
          name="email"
          className="text-field main-search-field"
          type="text"
          defaultValue={"alice@gmail.com"}
        />
        <input
          name="password"
          className="text-field main-search-field"
          type="password"
          defaultValue={"password"}
        />
        <button className="button button-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
