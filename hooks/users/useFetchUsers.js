import axios from "axios";
import { ref, onMounted } from "vue";

const useFetchUsers = (id) => {
  const users = ref([]);
  const fetching = async () => {
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

export default useFetchUsers
