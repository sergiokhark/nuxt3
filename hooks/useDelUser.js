import axios from "axios";
import { ref } from "vue";

const useDelUser = () => {
    let delUserDialog = ref(false)
    let delItem = null
    const confirmDelUser = (item) => {
        delUserDialog.value = true
        delItem = item
    }
    const delUser = async () => {
        try {
            await axios.delete('https://run.mocky.io/v3/69a098f7-f7db-4a58-9116-1a9e77f4004f')
            console.log('Delete complete')
        }
        catch(e) {
            console.log('Delete fail')
        }
        finally {
            delUserDialog.value = false
        }
    }

    return {
        delUserDialog,
        confirmDelUser,
        delUser
    }
}

export default useDelUser