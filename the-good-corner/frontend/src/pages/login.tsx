import { UserContext } from "@/components/Layout";
import { LOGIN } from "@/graphql/mutations/mutations";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const LoginPage = () => {
  const router = useRouter();
  const authInfo = useContext(UserContext);
  const [handleLogin] = useMutation(LOGIN, {
    async onCompleted(data) {
      localStorage.setItem("jwt", data.login.jwt);
      authInfo.refetch();
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

          // Or you can work with it as a plain object:
          const formJson = Object.fromEntries(formData.entries());
          // console.log(formJson);

          handleLogin({
            variables: {
              userData: formJson,
            },
          });

          // router.back();
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
