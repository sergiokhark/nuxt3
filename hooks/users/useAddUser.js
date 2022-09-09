import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();
const useAddUser = () => {
  const addUser = async () => {
    try {
      await axios.post(
        "https://run.mocky.io/v3/b9252bea-324b-44a3-9e49-d6bf561f9914"
      );
      toast.success('User successfully created');
    } catch (e) {
      toast.error('User create error');
    }
  }
  return {
    addUser
  }
}

export default useAddUser
