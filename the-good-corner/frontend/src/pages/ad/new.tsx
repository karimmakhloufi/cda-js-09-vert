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
  category: string;
};

const NewAd = () => {
  const [file, setFile] = useState<File>();
  const [imageURL, setImageURL] = useState<String>();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
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
    if (imageURL === undefined) {
      toast.error("Chose an image", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      try {
        const result = await createNewAd({
          variables: {
            adData: {
              title: data.title,
              description: data.description,
              imageUrl: "http://localhost:8000" + imageURL,
              location: data.location,
              price: Number.parseInt(data.price),
              owner: data.owner,
              category: Number.parseInt(data.category),
            },
          },
        });
        console.log("result", result);
        setImageURL(undefined);
        setFile(undefined);
        reset();
        toast.success("New ad was added", {
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
        console.error(err);
        toast.error(err.message, {
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
    }
  };

  if (data) {
    return (
      <div>
        <input
          type="file"
          onChange={async (e) => {
            if (e.target.files) {
              setFile(e.target.files[0]);
              const url = "http://localhost:8000/upload";
              const formData = new FormData();
              formData.append(
                "file",
                e.target.files[0],
                e.target.files[0].name
              );
              try {
                const response = await axios.post(url, formData);
                setImageURL(response.data.filename);
              } catch (err) {
                console.log("error", err);
              }
            }
          }}
        />
        {imageURL ? (
          <>
            <br />
            <img
              width={"500"}
              alt="uploadedImg"
              src={"http://localhost:8000" + imageURL}
            />
            <br />
          </>
        ) : null}
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
      </div>
    );
  }
};

export default NewAd;
