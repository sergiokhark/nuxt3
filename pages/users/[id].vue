<template>
  <v-card>
    <v-card-text>
      <br />
      <h2 class="mb-7">{{ title }}</h2>
      <v-container>
        <ModalUsersFields :editedItem="user" />
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn to="/users" color="blue darken-1"> Cancel </v-btn>
      <v-btn v-if="!createBtn" to="/users" color="blue darken-1" @click="addUser"> Create </v-btn>
      <v-btn v-if="createBtn" to="/users" color="blue darken-1" @click="save"> Update </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";
import ModalUsersFields from "~~/components/modalDialog/ModalUsersFields.vue";
import useAddUser from '~~/hooks/users/useAddUser'
import useEditUser from '~~/hooks/users/useEditUser'

export default {
  components: {
    ModalUsersFields
  },
  setup() {
    const { addUser } = useAddUser()
    const { save } = useEditUser()

    return {
      addUser, save
    }
  },
  data() {
    return {
      user: {
          name: '',
          username: '',
          website: '',
          address: {
            city: '',
            street: '',
            suite: ''
          }
        },
      title: "",
      createBtn: true
    };
  },
  async mounted() {
    if (this.$route.params.id !== 'create') {
      this.title = "Edit user"
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users/" + this.$route.params.id
      );
      
      this.user = res.data
    } else {
      this.title = "Add user"
      this.createBtn = false
      this.user = {
        name: '',
        username: '',
        site: '',
        address: {
          city: '',
          street: '',
          suite: ''
        }
      }
    }
  }, 
};
</script>
