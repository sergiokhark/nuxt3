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

<script lang="ts">
import axios from "axios"
import { ref } from "vue"
import OrderDetails from "~/components/pages/OrderDetails.vue"
import { OrderInfo } from "~/type/itemsType"

export default {
  components: {
    OrderDetails,
  },
  setup() {
    const order = ref<OrderInfo>({
      name: "",
      brand: "",
      price: {
        amount: null,
        currency: "",
      },
      total: {
        amount: null,
      },
      quantity: null,
      summary: {
        total_items_amount: {
          amount: null
        }
      }
    })

    const init = async (): Promise<void> => {
      const res = await axios.get(
        "https://run.mocky.io/v3/2d897b1f-8cc2-4de1-a780-1a421e3224f8"
      )
      order.value = res.data.data
    }

    init()
    return {
      order,
    }
  },
}
</script>
