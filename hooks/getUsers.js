import axios from "axios"
import { ref, onMounted } from "vue"

export function getUsers() {
    const users = ref([])
    const fetching = async () => {
        try {
            const res = await axios.get('https://run.mocky.io/v3/804e6fd9-f63a-444e-95c1-8a4b03f0ad71')
            users.value = res.data
        }
        catch(e) {
            alert('Error fetching users')
        }
    }
    onMounted(fetching)
    return {
        users
    }
}