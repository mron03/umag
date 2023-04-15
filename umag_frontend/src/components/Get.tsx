import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { GetEnum } from "../type";
import { useState } from "react";

export const Get = ({ type }: { type: boolean }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GetEnum>();

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [data, setData] = useState<GetEnum>({});

  const onSubmit: SubmitHandler<GetEnum> = (data) => {
    setData(data);
    setSubmitted((prevState) => !prevState);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {submitted ? (
        <div className="border border-orange-500 p-10 space-y-10">
          {data.barcode} {data.fromTime} {data.toTime}
        </div>
      ) : (
        <div className="border border-orange-500 p-10 space-y-10">
          <h1 className="text-center text-2xl">
            Get {type ? "supply" : "sale"}
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 flex flex-col"
          >
            <div>
              <label>Barcode: </label>
              <input
                {...register("barcode", { required: true })}
                className="border border-orange-500"
              />
            </div>
            {errors.barcode && (
              <span className="block">Barcode is required</span>
            )}
            <div>
              <label>From time: </label>
              <input
                type="datetime-local"
                step={1}
                {...register("fromTime", { required: true })}
                className="border border-orange-500"
              />
            </div>
            {errors.fromTime && <span className="block">Time is required</span>}
            <div>
              <label>To time: </label>
              <input
                type="datetime-local"
                step={1}
                {...register("toTime", { required: true })}
                className="border border-orange-500"
              />
            </div>
            {errors.toTime && <span className="block">Time is required</span>}
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
