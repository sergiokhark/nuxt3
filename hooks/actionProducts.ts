import axios from "axios"
import { ref, onMounted } from "vue"
import { useToast } from "vue-toastification"
import { Product } from '~~/type/itemsType'

const toast = useToast()

export const useFetchProducts = () => {
  const products = ref<Product[]>([])
  const fetching = async (): Promise<void> => {
    try {
      const res = await axios.get(
        "https://run.mocky.io/v3/28bbba7c-8c46-496a-9415-6b0773058e41"
      )
      products.value = res.data.data
    } catch (e) {
      alert("Error fetching products")
    }
  }
  
  onMounted(fetching)
  return {
    products,
  }
}

export const useAddProduct = () => {
  const addProduct = async (product: Product): Promise<void> => {
    try {
      await axios.post(
        "https://run.mocky.io/v3/6dc6cba2-b891-4a48-8ba0-242c86a47ca4", product
      )
      toast.success("Product successfully created")
    } catch (e) {
      toast.error("Product create error")
    }
  }
  
  return {
    addProduct,
  }
}

export const useEditProduct = () => {
  const save = async (): Promise<void> => {
    try {
      axios.put("https://run.mocky.io/v3/6697276c-9b58-4c00-8199-5d970294b567")
      toast.success("Product successfully updated")
    } catch (e) {
      toast.error("Product update error")
    }
  }

  return {
    save,
  }
}

export const useDelProduct = () => {
  let delProductDialog = ref<boolean>(false)
  let delItem = null
  const confirmDelProduct = (item: Product) => {
    delProductDialog.value = true
    delItem = item
  }
  const delProduct = async (): Promise<void> => {
    try {
      await axios.delete(
        "https://run.mocky.io/v3/47672866-0a4a-4327-b90b-6cb8f3e2c528"
      )
      toast.success("Product delete successfully")
    } catch (e) {
      toast.error("Product delete error")
    } finally {
      delProductDialog.value = false
    }
  }

  return {
    delProductDialog,
    confirmDelProduct,
    delProduct,
  }
}
