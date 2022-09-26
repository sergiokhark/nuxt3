<template>
 <v-card>
    <v-card-text>
      <br />
      <h2 class="mb-7">Statistics</h2>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Title</th>
            <th class="text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Users</td>
            <td>{{ users.length }}</td>
          </tr>
          <tr>
            <td>Products</td>
            <td>{{ products.length }}</td>
          </tr>
          <tr>
            <td>Orders</td>
            <td>{{ orders.length }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script>
import { useFetchUsers } from '~/hooks/useActionUsers'
import { useFetchProducts } from '~/hooks/useActionProducts'
import { useFetchOrders } from '~/hooks/useActionOrders'

export default {
  setup() {
    const { users } = useFetchUsers()
    const { products } = useFetchProducts()
    const { orders } = useFetchOrders()

    return {
      users,
      products,
      orders
    }
  }
}
</script>