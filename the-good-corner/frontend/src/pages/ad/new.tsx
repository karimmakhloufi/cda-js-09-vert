const NewAd = () => {
  return (
    <form
      onSubmit={(e) => {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form as HTMLFormElement);

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
      }}
    >
      <label>
        Titre de l&apos;annonce: <br />
        <input className="text-field" name="titre" />
      </label>
      <button className="button">Submit</button>
    </form>
  );
};

export default NewAd;
