<template>
  <ModalUsersFields 
    :editedItem="user" 
    :title="title"
    :createBtn="createBtn"
    @create="addUser"
    
  />
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import ModalUsersFields from "~/components/modalDialog/ModalUsersFields.vue";
import { useAddUser, useEditUser } from "~/hooks/actionUsers";

export default {
  components: {
    ModalUsersFields,
  },
  data() {
    return {
      user: {
        name: "",
        username: "",
        website: "",
        address: {
          city: "",
          street: "",
          suite: "",
        },
      },
    };
  },
  async mounted() {
    if (this.$route.params.id !== "create") {
      this.title = "Edit user";
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users/" + this.$route.params.id
      );
      this.user = res.data;
    } else {
      this.title = "Add user";
      this.createBtn = false;
    }
  },
  setup(props) {
    const { addUser } = useAddUser(props);
    const { save } = useEditUser();
    const title = ref("");
    const createBtn = ref(true);

    return {
      addUser,
      save,
      title,
      createBtn,
    };
  },
};
</script>
