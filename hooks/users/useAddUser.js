import axios from "axios";
import { ref } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();
const useAddUser = () => {
  let addUserDialog = ref(false);
  const defaultItem = () => ({
    name: "",
    username: "",
    website: "",
    city: "",
    street: "",
    suite: "",
  });
  const addedItem = ref(defaultItem())
  const addUser = async () => {
    try {
      await axios.post(
        "https://run.mocky.io/v3/b9252bea-324b-44a3-9e49-d6bf561f9914"
      );
      toast.success('User successfully created');
    } catch (e) {
      toast.error('User create error');
    } finally {
      closeAddDialog();
    }
  };
  const closeAddDialog = () => {
    addUserDialog.value = false;
    addedItem.value = defaultItem()
  };
  return {
    addUserDialog, 
    addedItem,
    addUser,
    closeAddDialog,
  }
};

export default useAddUser
