<template>
  <v-card>
    <v-card-text>
      <br />
      <h2 class="mb-7">Order # {{ order.number }}</h2>
      <v-container>
        <OrderDetails :order="order" />
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn to="/orders" color="blue darken-1"> Back </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";
import { ref, onMounted, reactive} from 'vue'
import OrderDetails from "~~/components/modalDialog/OrderDetails.vue";

export default {
  components: {
    OrderDetails,
  },
  // data() {
  //   return {
  //     order: {},
  //   };
  // },
  setup() {
    const order = ref({})
    onMounted(async() => {
      const res = await axios.get('https://run.mocky.io/v3/2d897b1f-8cc2-4de1-a780-1a421e3224f8')
      order.value = res.data.data
    })
    return {
      order
    }
  },
  // async mounted() {
  //   const res = await axios.get(
  //     "https://run.mocky.io/v3/2d897b1f-8cc2-4de1-a780-1a421e3224f8"
  //   );
  //   this.order = res.data.data;
  // },
};
</script>
