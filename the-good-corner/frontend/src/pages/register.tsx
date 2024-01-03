import { REGISTER } from "@/graphql/mutations/mutations";
import { useMutation } from "@apollo/client";

const RegisterPage = () => {
  const [handleRegister, { data, loading, error }] = useMutation(REGISTER);
  return (
    <div>
      <p>Register Page</p>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.target;
          const formData = new FormData(form as HTMLFormElement);

          // Or you can work with it as a plain object:
          const formJson = Object.fromEntries(formData.entries());
          console.log(formJson);

          const result = await handleRegister({
            variables: {
              newUserData: formJson,
            },
          });
          console.log("result", result);
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
        <button className="button button-primary">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
