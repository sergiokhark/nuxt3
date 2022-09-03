import axios from "axios";
import { ref, onMounted } from "vue";

const useFetchOrders = () => {
  const orders = ref([]);
  const fetching = async () => {
    try {
      const res = await axios.get(
        "https://run.mocky.io/v3/8a0f5689-08b6-4efb-9597-880b4fc285ad"
      );
      orders.value = res.data.data;
    } catch (e) {
      alert("Error fetching orders");
    }
  };
  onMounted(fetching);

  return {
    orders,
  };
};

export default useFetchOrders
