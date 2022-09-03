import axios from "axios";
import { ref, onMounted } from "vue";

const useFetchProducts = () => {
  const products = ref([]);
  const fetching = async () => {
    try {
      const res = await axios.get(
        "https://run.mocky.io/v3/28bbba7c-8c46-496a-9415-6b0773058e41"
      );
      products.value = res.data.data;
    } catch (e) {
      alert("Error fetching products");
    }
  };
  onMounted(fetching);

  return {
    products,
  };
};

export default useFetchProducts;
