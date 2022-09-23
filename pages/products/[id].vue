<template>
  <ProductsFields
    :editedItem="product"
    :title="title"
    :createBtn="createBtn"
    @create="addProduct"
    @save="save"
  />
</template>

<script lang="ts">
import axios from "axios"
import { ref } from "vue"
import ProductsFields from "~/components/pages/ProductsFields.vue"
import { useAddProduct, useEditProduct } from '~~/hooks/useActionProducts'
import { useRoute } from "vue-router"
import { Product } from "~/type/itemsType"

export default {
  components: {
    ProductsFields,
  },
  props: {
    newItem: {
      type: Object,
      default: {},
    },
  },
  setup(props) {
    const { addProduct } = useAddProduct()
    const { save } = useEditProduct()
    const title = ref<string>("")
    const createBtn = ref<boolean>(true)
    const route = useRoute()
    const product = ref<Product>({
      name: "",
      type: "",
      brand: "",
      real_price: {
        amount: null,
        currency: "",
      }
    })
    const init = async (): Promise<void> => {
      title.value = "Add product"
      createBtn.value = false

      if (route.params.id !== "create") {
        title.value = "Edit product"
        const res = await axios.get(
          "https://run.mocky.io/v3/791487e8-2c1f-434f-86ac-4f001e2c7df8"
        )
        product.value = res.data
        createBtn.value = true
      }
    }

    init()
    return {
      addProduct,
      save,
      title,
      createBtn,
      product
    }
  },
}
</script>
