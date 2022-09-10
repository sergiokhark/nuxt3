<template>
    <v-card>
      <v-card-text>
        <br />
        <h2 class="mb-7">{{ title }}</h2>
        <v-container>
          <ModalProductsFields :editedItem="product" />
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn to="/products" color="blue darken-1"> Cancel </v-btn>
        <v-btn
          v-if="!createBtn"
          to="/products"
          color="blue darken-1"
          @click="addProduct"
        >
          Create
        </v-btn>
        <v-btn v-if="createBtn" to="/products" color="blue darken-1" @click="save">
          Update
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>
  <script>
    import axios from "axios";
    import { ref } from "vue";
    import ModalProductsFields from "~~/components/modalDialog/ModalProductsFields.vue";
    import useAddProduct from "~~/hooks/products/useAddProduct";
    import useEditProduct from "~~/hooks/products/useEditProduct";
    
    export default {
      components: {
        ModalProductsFields,
      },
      data() {
        return {
          product: {
            name: "",
            type: "",
            brand: "",
            real_price: {
              amount: '',
              currency: ''
            }
          },
        };
      },
      async mounted() {
        if (this.$route.params.id !== "create") {
          this.title = "Edit product";
          const res = await axios.get(
            "https://run.mocky.io/v3/791487e8-2c1f-434f-86ac-4f001e2c7df8"
          );
          this.product = res.data;
        } else {
          this.title = "Add product";
          this.createBtn = false;
        }
      },
      setup() {
        const { addProduct } = useAddProduct();
        const { save } = useEditProduct();
        const title = ref("");
        const createBtn = ref(true);
        
        return {
          addProduct,
          save,
          title,
          createBtn
        };
      },
      
    };
    </script>