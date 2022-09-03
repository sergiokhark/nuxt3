import axios from "axios";
import { ref } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();
const useEditUser = () => {
  let editUserDialog = ref(false);
  const defaultItem = () => ({
    name: "",
    username: "",
    website: "",
    city: "",
    street: "",
    suite: "",
  });
  const editedItem = ref(defaultItem());
  const editUser = (item) => {
    editedItem.value = item
    //console.log(editedItem.value)
    editUserDialog.value = true
  }
  const save = async () => {
    try {
      axios.put("https://run.mocky.io/v3/4d9eea3e-bee2-4531-8665-091365446530");
      toast.success('User successfully updated');
    } catch (e) {
      toast.error('User update error');
    } finally {
      closeEditDialog();
    }
  };
  const closeEditDialog = () => {
    editUserDialog.value = false;
    editedItem.value = defaultItem()
    //console.log(editedItem.value)
  };

  return {
    editUserDialog,
    editedItem,
    editUser,
    save,
    closeEditDialog
  };
};

export default useEditUser;
