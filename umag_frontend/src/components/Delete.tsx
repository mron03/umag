import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { DeleteEnum } from "../type";
import { useState } from "react";

export const Delete = ({ type }: { type: boolean }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeleteEnum>();

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [data, setData] = useState<DeleteEnum>({});

  const onSubmit: SubmitHandler<DeleteEnum> = (data) => {
    setData(data);
    setSubmitted((prevState) => !prevState);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border border-orange-500 p-10 space-y-10">
        {submitted ? (
          <div>
            {data.id}
          </div>
        ) : (<div>
          <h1 className="text-center text-2xl">
            Delete {type ? "supply" : "sale"}
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
        </div>)}

        <div>
          <Link
            to={submitted ? `delete${type ? "supply" : "sale"}` : "/"}
            className="underline underline-offset-8 hover:text-blue-500"
          >
            {submitted ? "Back to Form" : "Back to Home"}
          </Link>
        </div>
      </div>
    </div>
  );
};
