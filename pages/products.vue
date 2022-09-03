<template>
    <v-card>
    <v-card-text>
      <br />
      <h2 class="mb-7">Products data</h2>
      <v-btn elevation="0" color="primary" size="small">Add product</v-btn>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Type</th>
            <th class="text-left">Brand</th>
            <th class="text-left">Price</th>
            <th class="text-left">Currency</th>
            <th class="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.brand }}</td>
            <td>{{ item.real_price.amount }}</td>
            <td>{{ item.real_price.currency }}</td>
            <td>
              <v-icon small class="mr-2" color="#9b999b"> mdi-pencil</v-icon>
              <v-icon small color="#9b999b"> mdi-delete </v-icon>
            </td>
          </tr>
        </tbody>
      </v-table>
      
    </v-card-text>
  </v-card>
</template>

<script>

import useFetchProducts from '~~/hooks/products/useFetchProducts';

export default {
  components: {

  },

  setup() {
    const { products } = useFetchProducts()

    return {
      products
    }
  }
}

</script>