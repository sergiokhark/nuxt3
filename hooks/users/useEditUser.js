import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();
const useEditUser = () => {
  const save = async () => {
    try {
      axios.put("https://run.mocky.io/v3/4d9eea3e-bee2-4531-8665-091365446530");
      toast.success('User successfully updated');
    } catch (e) {
      toast.error('User update error');
    }
  }

  return {
    save
  };
};

export default useEditUser;
