import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { GetIdEnum } from "../type";
import { useState } from "react";

export const GetId = ({ type }: { type: boolean }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GetIdEnum>();

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [data, setData] = useState<GetIdEnum>({});

  const onSubmit: SubmitHandler<GetIdEnum> = (data) => {
    setData(data);
    setSubmitted((prevState) => !prevState);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {submitted ? (
        <div className="border border-orange-500 p-10 space-y-10">
          {data.id}
        </div>
      ) : (
        <div className="border border-orange-500 p-10 space-y-10">
          <h1 className="text-center text-2xl">
            Get {type ? "supply" : "sale"} by id
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 flex flex-col"
          >
            <div>
              <label>Id: </label>
              <input
                {...register("id", { required: true })}
                className="border border-orange-500"
              />
            </div>
            {errors.id && <span className="block">Id is required</span>}
            <button className="border border-orange-500 p-1">Submit</button>
          </form>

          <div>
            <Link
              to={"/"}
              className="underline underline-offset-8 hover:text-blue-500"
            >
              Back Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
