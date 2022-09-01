import axios from "axios";
import { reactive, ref, nextTick } from "vue";

const useAddUser = () => {
  
  let addUserDialog = ref(false);
  let editedItem = reactive({
    name: "",
    username: "",
    website: "",
    city: "",
    street: "",
    suite: "",
  });
  const defaultItem = {
    name: "",
    username: "",
    website: "",
    city: "",
    street: "",
    suite: "",
  };
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
  const getDefaultItem = () => {
    nextTick(() => {
      editedItem = Object.assign({}, defaultItem )
      //console.log(editedItem)
    });
  };
  const closeAddDialog = () => {
    addUserDialog.value = false;
    getDefaultItem();
  };
  return {
    addUserDialog, 
    editedItem,
    addUser,
    closeAddDialog,
  }
};

export default useAddUser
