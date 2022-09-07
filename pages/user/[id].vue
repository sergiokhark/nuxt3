<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">{{ title }}</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <ModalUsersFields :editedItem="user" />
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn to="/users" color="blue darken-1"> Cancel </v-btn>
      <v-btn to="/users" color="blue darken-1"> Save </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import ModalUsersFields from "~~/components/modalDialog/ModalUsersFields.vue";

export default {
  components: {
    ModalUsersFields,
  },
  data() {
    return {
      user: {},
      title: "",
    };
  },
  async mounted() {
    if (this.$route.params.id !== null) {
      this.title = "Edit user";
      const res = await axios.get(
        "https://run.mocky.io/v3/a9a0cd8f-1f8b-432f-a50e-0e5018d90802"
      );
      this.user = res.data;
    } else {
      this.title = "Add user";
    }
  },
  
};
</script>
