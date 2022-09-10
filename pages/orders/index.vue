<template>
    <v-card>
    <v-card-text>
      <br />
      <h2 class="mb-7">Orders data</h2>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Status</th>
            <th class="text-left">Order number</th>
            <th class="text-left">Creation date</th>
            <th class="text-left">Lastname</th>
            <th class="text-left">Firstname</th>
            <th class="text-left">Price</th>
            <th class="text-left">Currency</th>
            <th class="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orders" :key="item.id">
            <td>{{ item.status_before }}</td>
            <td>{{ item.number }}</td>
            <td>{{ item.created_at }}</td>
            <td>{{ item.customer.lastname }}</td>
            <td>{{ item.customer.firstname }}</td>
            <td>{{ item.summary.total_due.amount }}</td>
            <td>{{ item.summary.total_due.currency }}</td>
            <td>
              <v-icon small class="mr-2" color="#9b999b" @click="open(item.id)"> mdi-eye</v-icon>
              <v-icon small color="#9b999b" @click="changeStatus(item)"> mdi-swap-horizontal </v-icon>
            </td>
          </tr>
        </tbody>
      </v-table>
      
    </v-card-text>
  </v-card>
</template>

<script>

import useFetchOrders from '~~/hooks/orders/useFetchOrders'
import { useRouter } from "vue-router";

export default {
  components: {

  },
  setup() {
    const { orders } = useFetchOrders()
    const router = useRouter();
    const changeStatus = (item) => {
      let temp = item.status_before
      item.status_before = item.status
      item.status = temp
    }
    const open = (id) => {
      router.push("/orders/" + id);
    }

    return {
      orders,
      changeStatus,
      open
    }
  }
}
</script>