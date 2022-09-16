<template>
  <v-card>
    <v-card-text>
      <br />
      <h2 class="mb-7">Products data</h2>
      <v-btn elevation="0" color="primary" size="small" @click="open('create')"
        >Add product</v-btn
      >
      <br />
      <v-row>
        <v-col>
          <input
            class="text-field__input"
            type="text"
            placeholder="Name"
            v-model="filter.name"
            @input="getFilteredProducts"
          />
        </v-col>
        <v-col>
          <input
            class="text-field__input"
            type="text"
            placeholder="Type"
            v-model="filter.type"
            @input="getFilteredProducts"
          />
        </v-col>
        <v-col>
          <input
            class="text-field__input"
            type="text"
            placeholder="Brand"
            v-model="filter.brand"
            @input="getFilteredProducts"
          />
        </v-col>
      </v-row>
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
              <v-icon small class="mr-2" color="#9b999b" @click="open(item.id)">
                mdi-pencil</v-icon
              >
              <v-icon small color="#9b999b" @click="confirmDelProduct(item)">
                mdi-delete
              </v-icon>
            </td>
          </tr>
        </tbody>
      </v-table>
      <ModalDialog
        :dialog="delProductDialog"
        formTitle="Delete product"
        btnName="Delete"
        @save="delProduct"
        @close="delProductDialog = false"
      >
        <h2>Are you sure?</h2>
      </ModalDialog>
    </v-card-text>
  </v-card>
</template>

<script>
import useFetchProducts from "~~/hooks/products/useFetchProducts";

import useDelProduct from "~~/hooks/products/useDelProduct";
import ModalDialog from "~~/components/modalDialog/ModalDialog.vue";
import { useRouter } from "vue-router";

export default {
  components: {
    ModalDialog,
  },
  
  data() {
    return {
      filter: {
        name: null,
        type: null,
        brand: null,
      }
    };
  },
  methods: {
    getFilteredProducts() {
      this.products = this.getFilteredItems(this.products, this.filter)
    }
  },
  setup() {
    const { products } = useFetchProducts();
    const { delProductDialog, confirmDelProduct, delProduct } = useDelProduct();
    const router = useRouter();
    const open = (id) => {
      router.push("/products/" + id);
    };

    return {
      products,
      delProductDialog,
      confirmDelProduct,
      delProduct,
      open,
    };
  },
};
</script>
