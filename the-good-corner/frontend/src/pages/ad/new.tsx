import { useState, useEffect } from "react";
import axios from "axios";

type category = {
  id: number;
  name: string;
};

const NewAd = () => {
  const [categories, setCategories] = useState<category[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await axios.get<category[]>(
          "http://localhost:4000/category"
        );
        setCategories(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);
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
        axios.post("http://localhost:4000/ad", formJson);
      }}
    >
      <label>
        Titre de l&apos;annonce: <br />
        <input className="text-field" name="title" />
      </label>
      <br />
      <label>
        Prix: <br />
        <input className="text-field" name="price" />
      </label>
      <br />
      <label>
        Description: <br />
        <input className="text-field" name="description" />
      </label>
      <br />
      <label>
        Nom du vendeur: <br />
        <input className="text-field" name="owner" />
      </label>
      <br />
      <label>
        Url de l&apos;image: <br />
        <input className="text-field" name="imageUrl" />
      </label>
      <br />
      <label>
        Ville: <br />
        <input className="text-field" name="location" />
      </label>
      <br />
      <select name="category">
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <button className="button">Submit</button>
    </form>
  );
};

export default NewAd;
