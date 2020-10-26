import { db } from "../services/firebase";

const productDB = db.ref("/products");

const productMethods = {
  getAllProducts: () => {
    return productDB;
  },
  getProduct: (key) => {
    return productDB.child(key);
  },
  createProduct: (product) => {
    return productDB.push(product);
  },
  updateProduct: (key, value) => {
    return productDB.child(key).update(value);
  },
  deleteProduct: (key) => {
    return productDB.child(key).remove();
  },
  deleteAllProducts: () => {
    return productDB.remove();
  },
};

export default productMethods;
