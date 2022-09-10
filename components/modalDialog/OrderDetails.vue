<template>
  <v-card>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Brand</th>
          <th class="text-left">Price</th>
          <th class="text-left">Quantity</th>
          <th class="text-left">Total</th>
          <th class="text-left">Currency</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in order.items" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.brand }}</td>
          <td>{{ item.price.amount }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.total.amount }}</td>
          <td>{{ item.price.currency }}</td>
        </tr>
      </tbody>
    </v-table>
    
    <!-- Этот код если раскомментировать будет ошибка
      
      <v-card-text>
        Total:{{ order.summary.total_items_amount.amount }} USD
      </v-card-text> -->

    
  </v-card>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      default: {},
    },
  },
};
</script>
