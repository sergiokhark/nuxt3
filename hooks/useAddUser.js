import axios from "axios";
import { ref } from "vue";

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
  const editedItem = ref(defaultItem())
  const addUser = async () => {
    try {
      await axios.post(
        "https://run.mocky.io/v3/b9252bea-324b-44a3-9e49-d6bf561f9914"
      );
      console.log("+");
    } catch (e) {
      console.log("-");
    } finally {
      closeAddDialog();
    }
  };
  const closeAddDialog = () => {
    addUserDialog.value = false;
    editedItem.value = defaultItem()
  };
  return {
    addUserDialog, 
    editedItem,
    addUser,
    closeAddDialog,
  }
};

export default useAddUser
