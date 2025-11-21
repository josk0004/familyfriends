"use client";
import { useActionState } from "react";
import { submitProduct } from "@/app/action/action";
import { useFormStatus } from "react-dom";

const ResponseMessage = ({ state }) => {
  return (
    <div>
      {state.success === true && (
        <p className="p-6 text-green-500">
          Product "{state.productName}" added successfully!
        </p>
      )}

      {state.success === false && (
        <p className="p-6 text-red-500">
          Sorry, there was an error adding the product.
        </p>
      )}
    </div>
  );
};

const SubmitButton = ({ label }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={`bg-perimore hover:bg-perimore/80 cursor-pointer rounded p-2 text-white transition-all duration-200 ease-in-out active:scale-95 ${pending ? "cursor-not-allowed opacity-50" : ""}`}
      disabled={pending}
    >
      {pending ? "Adding..." : label}
    </button>
  );
};

const ProductForm = () => {
  const [state, postProduct] = useActionState(submitProduct, { error: {} });
  console.log(state);
  return (
    <div>
      <ResponseMessage state={state} />
      <form action={postProduct} className="flex flex-col gap-4 px-6">
        {state.error?.productName && (
          <p className="text-red-500">{state.error.productName}</p>
        )}
        {state.error?.price && (
          <p className="text-red-500">{state.error.price}</p>
        )}
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          defaultValue={!state.success ? state.productName : ""}
          className="rounded border p-2"
        />
        <input
          name="price"
          placeholder="Price"
          defaultValue={!state.success ? state.price : ""}
          min={0}
          className="rounded border p-2"
        />
        <SubmitButton label="Add Product" />
      </form>
    </div>
  );
};

export default ProductForm;
