import axios from "axios";
import { ref, onMounted } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();

export const useFetchUsers = ()  => {
  const users = ref([]);
  const fetching = async ():Promise<void> => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users/"
      );
      users.value = res.data;
    } catch (e) {
      alert("Error fetching users");
    }
  };
  onMounted(fetching);
  return {
    users,
  };
}

export const useAddUser = (newUser) => {
  const addUser = async ():Promise<void> => {
    try {
      await axios.post(
        "https://run.mocky.io/v3/b9252bea-324b-44a3-9e49-d6bf561f9914", newUser
      );
      console.log(newUser)
      //alert(newUser.name)
      toast.success('User successfully created');
    } catch (e) {
      toast.error('User create error');
    }
  }
  return {
    addUser
  }
}

export const useEditUser = () => {
  const save = async ():Promise<void> => {
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

export const useDelUser = () => {
  let delUserDialog = ref(false);
  let delItem = null;
  const confirmDelUser = (item) => {
    delUserDialog.value = true;
    delItem = item;
  };
  const delUser = async () => {
    try {
      await axios.delete(
        "https://run.mocky.io/v3/69a098f7-f7db-4a58-9116-1a9e77f4004f"
      );
      toast.success('User deleted successfully');
    } catch (e) {
      toast.error('User delete error');
    } finally {
      delUserDialog.value = false;
    }
  };

  

  return {
    delUserDialog,
    confirmDelUser,
    delUser,
  };
};



