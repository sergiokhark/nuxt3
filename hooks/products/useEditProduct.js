import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();
const useEditProduct = () => {
  const save = async () => {
    try {
      axios.put("https://run.mocky.io/v3/6697276c-9b58-4c00-8199-5d970294b567");
      toast.success("Product successfully updated");
    } catch (e) {
      toast.error("Product update error");
    }
  };

  return {
    save,
  };
};

export default useEditProduct;
