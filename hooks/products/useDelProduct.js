import axios from "axios";
import { ref } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();
const useDelUser = () => {
  let delProductDialog = ref(false);
  let delItem = null;
  const confirmDelProduct = (item) => {
    delProductDialog.value = true;
    delItem = item;
  };
  const delProduct = async () => {
    try {
      await axios.delete(
        "https://run.mocky.io/v3/47672866-0a4a-4327-b90b-6cb8f3e2c528"
      );
      toast.success("Product delete successfully");
    } catch (e) {
      toast.error("Product delete error");
    } finally {
      delProductDialog.value = false;
    }
  };

  return {
    delProductDialog,
    confirmDelProduct,
    delProduct,
  };
};

export default useDelUser;
