"use server";

export const submitProduct = async (prevState, formData) => {
  const error = {};
  const productName = formData.get("productName");
  const price = formData.get("price");
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
  if (!price) {
    error.price = "Price is required.";
  } else if (isNaN(price) || Number(price) < 0) {
    error.price = "Price must be a positive number or 0.";
  } else if (/[^\d.]/.test(price)) {
    error.price = "Price must be a valid number.";
  }
  if (Object.keys(error).length > 0) {
    return { error, productName, price };
  }
  return { success: true, productName, price };
};
