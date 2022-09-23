<template>
  <ModalUsersFields
    :editedItem="user"
    :title="title"
    :createBtn="createBtn"
    @create="addUser"
    @save="save"
  />
</template>

<script lang="ts">
import axios from "axios"
import { ref } from "vue"
import ModalUsersFields from "~/components/modalDialog/ModalUsersFields.vue"
import { useAddUser, useEditUser } from "~/hooks/actionUsers"
import { useRoute } from "vue-router"
import { User } from "~/type/itemsType"

export default {
  components: {
    ModalUsersFields,
  },
  props: {
    newItem: {
      type: Object,
      default: {},
    },
  },

  setup(props) {
    const { addUser } = useAddUser()
    const { save } = useEditUser()
    const title = ref<string>("")
    const createBtn = ref<boolean>(true)
    const route = useRoute()
    const user = ref<User>({
      name: "",
      username: "",
      website: "",
      address: {
        city: "",
        street: "",
        suite: "",
      },
    })

    const init = async (): Promise<void> => {
      title.value = "Add user"
      createBtn.value = false

      if (route.params.id !== "create") {
        title.value = "Edit user"
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${route.params.id}`
        )
        user.value = res.data
        createBtn.value = true
      }
    }

    init()
    return {
      addUser,
      save,
      title,
      createBtn,
      user,
    }
  },
}
</script>
