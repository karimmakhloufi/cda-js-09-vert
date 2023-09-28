import { useState, useEffect } from "react";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Category } from "@/types/category";
import { toast } from "react-toastify";
import { AdCardProps } from "@/components/AdCard";
import { useRouter } from "next/router";

type Inputs = {
  title: string;
  price: number;
  description: string;
  owner: string;
  imageUrl: string;
  location: string;
  category: number;
};

const EditAd = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [ad, setAd] = useState<AdCardProps>();
  const { register, handleSubmit, reset } = useForm<Inputs>();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await axios.get<Category[]>(
          "http://localhost:4000/category"
        );
        setCategories(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
    const fetchAd = async () => {
      try {
        const result = await axios.get<AdCardProps>(
          `http://localhost:4000/ad/${router.query.id}`
        );
        setAd(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (router.query.id) {
      fetchAd();
    }
  }, [router.query.id, reset]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const result = await axios.put("http://localhost:4000/ad", {
        idToEdit: router.query.id,
        newAd: data,
      });
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

  if (ad === undefined) {
    return "loading";
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Titre de l&apos;annonce: <br />
        <input
          defaultValue={ad?.title}
          className="text-field"
          {...register("title")}
        />
      </label>
      <br />
      <label>
        Prix: <br />
        <input
          defaultValue={ad?.price}
          className="text-field"
          {...register("price")}
        />
      </label>
      <br />
      <label>
        Description: <br />
        <input
          defaultValue={ad?.description}
          className="text-field"
          {...register("description")}
        />
      </label>
      <br />
      <label>
        Nom du vendeur: <br />
        <input
          defaultValue={ad?.owner}
          className="text-field"
          {...register("owner")}
        />
      </label>
      <br />
      <label>
        Url de l&apos;image: <br />
        <input
          className="text-field"
          defaultValue={ad?.imageUrl}
          {...register("imageUrl")}
        />
      </label>
      <br />
      <label>
        Ville: <br />
        <input
          defaultValue={ad?.location}
          className="text-field"
          {...register("location")}
        />
      </label>
      <br />
      <select defaultValue={ad?.category.id} {...register("category")}>
        {categories.map((category) => (
          <option
            // selected={category.id == ad?.category?.id}
            key={category.id}
            value={category.id}
          >
            {category.name}
          </option>
        ))}
      </select>
      <br />
      <br />

      <input className="button" type="submit" />
    </form>
  );
};

export default EditAd;
