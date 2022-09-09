<template>
    <v-card>
    <v-card-text>
      <br />
      <h2 class="mb-7">Users data</h2>
      <v-btn elevation="0" color="primary" size="small" @click="open('create')">Add user</v-btn>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Username</th>
            <th class="text-left">Site</th>
            <th class="text-left">City</th>
            <th class="text-left">Street</th>
            <th class="text-left">Suite</th>
            <th class="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in users" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.username }}</td>
            <td>{{ item.website }}</td>
            <td>{{ item.address.city }}</td>
            <td>{{ item.address.street }}</td>
            <td>{{ item.address.suite }}</td>
            <td>
              <v-icon small class="mr-2" color="#9b999b" @click="open(item.id)"> mdi-pencil</v-icon>
              <v-icon small color="#9b999b" @click="confirmDelUser(item)"> mdi-delete </v-icon>
            </td>
          </tr>
        </tbody>
      </v-table>
      <ModalDialog
        :dialog="delUserDialog"
        formTitle="Delete user"
        btnName="Delete"
        @save="delUser"
        @close="delUserDialog = false"
      >
        <h2>Are you sure?</h2>
      </ModalDialog>
    </v-card-text>
  </v-card>
</template>

<script>

import useFetchUsers from '~~/hooks/users/useFetchUsers'
import useDelUser from '~~/hooks/users/useDelUser'
import ModalDialog from '~~/components/modalDialog/ModalDialog.vue'
import { useRouter } from 'vue-router'

export default {
  components: {
    ModalDialog,
  },
  setup() {
    const { users } = useFetchUsers()
    const { delUserDialog, confirmDelUser, delUser } = useDelUser()
    const router = useRouter()
    const open = (id) => {
      router.push('/users/' + id)
    }
  
    return {
      users,
      delUserDialog, confirmDelUser, delUser,
      open
    }
  }
}
</script>

<style scoped>

</style>