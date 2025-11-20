"use server";

export const submitProduct = async (prevState, formData) => {
  const error = {};
  const productName = formData.get("productName");
  if (!productName) {
    error.productName = "Product name is required.";
  } else if (productName.length < 5) {
    if (/\d/.test(productName)) {
      error.productName =
        "Product name must be at least 5 characters long and cannot contain numbers.";
    } else {
      error.productName = "Product name must be at least 5 characters long.";
    }
  } else if (/\d/.test(productName)) {
    if (productName.length < 5) {
      error.productName =
        "Product name must be at least 5 characters long and cannot contain numbers.";
    } else {
      error.productName = "Product name cannot contain numbers.";
    }
  }
  if (Object.keys(error).length > 0) {
  return { error, productName };
  }
  return { success: true, productName };
};
