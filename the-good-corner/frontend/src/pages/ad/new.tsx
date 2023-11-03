import { useState, useEffect } from "react";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Category } from "@/types/category";
import { toast } from "react-toastify";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_CATEGORIES } from "../../graphql/queries/queries";
import { CREATE_NEW_AD } from "../../graphql/mutations/mutations";

type Inputs = {
  title: string;
  price: string;
  description: string;
  owner: string;
  imageUrl: string;
  location: string;
  category: number;
};

const NewAd = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const { loading, error, data } = useQuery<{
    allCategories: {
      id: number;
      name: string;
    }[];
  }>(GET_ALL_CATEGORIES);

  const [
    createNewAd,
    { data: createAdData, loading: createAdLoading, error: createAdError },
  ] = useMutation(CREATE_NEW_AD);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      // const result = await axios.post("http://localhost:4000/ad", data);
      console.log("data from form", data);
      const result = await createNewAd({
        variables: {
          adData: {
            title: data.title,
            description: data.description,
            imageUrl: data.imageUrl,
            location: data.location,
            price: Number.parseInt(data.price),
            owner: data.owner,
            category: Number.parseInt(data.category),
          },
        },
      });
      console.log("result", result);
      toast.success(result.data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (err: any) {
      toast.error(err.response.data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Titre de l&apos;annonce: <br />
        <input className="text-field" {...register("title")} />
      </label>
      <br />
      <label>
        Prix: <br />
        <input className="text-field" {...register("price")} />
      </label>
      <br />
      <label>
        Description: <br />
        <input className="text-field" {...register("description")} />
      </label>
      <br />
      <label>
        Nom du vendeur: <br />
        <input className="text-field" {...register("owner")} />
      </label>
      <br />
      <label>
        Url de l&apos;image: <br />
        <input className="text-field" {...register("imageUrl")} />
      </label>
      <br />
      <label>
        Ville: <br />
        <input className="text-field" {...register("location")} />
      </label>
      <br />
      <select {...register("category")}>
        {data?.allCategories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <br />
      <br />

      <input className="button" type="submit" />
    </form>
    /*<form
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
    </form>*/
  );
};

export default NewAd;
