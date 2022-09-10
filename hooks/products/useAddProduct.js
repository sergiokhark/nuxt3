import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();
const useAddProduct = () => {
  const addProduct = async () => {
    try {
      await axios.post(
        "https://run.mocky.io/v3/6dc6cba2-b891-4a48-8ba0-242c86a47ca4"
      );
      toast.success("Product successfully created");
    } catch (e) {
      toast.error("Product create error");
    }
  };
  return {
    addProduct,
  };
};

export default useAddProduct;
