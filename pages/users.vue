<template>
    <v-card>
    <v-card-text>
      <br />
      <h2 class="mb-7">Users data</h2>
      <v-btn elevation="0" color="primary" size="small" @click="addUserDialog = true">Add user</v-btn>
      <br />
      <v-row>
        <v-col>
          <v-text-field
            v-model="filter.name"
            label="Name"
            @input="getFilteredUsers"
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="filter.username"
            label="Username"
            @input="getFilteredUsers"
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="filter.city"
            label="City"
            @input="getFilteredUsers"
          />
        </v-col>
      </v-row>
      
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
            <td>{{ item.city }}</td>
            <td>{{ item.street }}</td>
            <td>{{ item.suite }}</td>
            <td>
              <v-icon small class="mr-2" color="#9b999b" @click="open(item.id)"> mdi-pencil</v-icon>
              <v-icon small color="#9b999b" @click="confirmDelUser(item)"> mdi-delete </v-icon>
            </td>
          </tr>
        </tbody>
      </v-table>
      <ModalDialog
        :dialog="addUserDialog"
        formTitle="Add user"
        @save="addUser"
        @close="closeAddDialog"
      >
        <ModalUsersFields :editedItem="addedItem" />
      </ModalDialog>
      <ModalDialog
        :dialog="editUserDialog"
        formTitle="Edit user"
        @save="save"
        @close="closeEditDialog"
      >
        <ModalUsersFields :editedItem="editedItem" />
      </ModalDialog>
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
import useAddUser from '~~/hooks/users/useAddUser'
import useDelUser from '~~/hooks/users/useDelUser'
import useEditUser from '~~/hooks/users/useEditUser'
import ModalDialog from '~~/components/modalDialog/ModalDialog.vue'
import ModalUsersFields from '~~/components/modalDialog/ModalUsersFields.vue'
import { useRouter } from 'vue-router'
//import getFilteredItems from '~~/mixins/getFilteredItems'

export default {
  components: {
    ModalDialog,
    ModalUsersFields
  },
  //mixins: [getFilteredItems],
  
  setup() {
    const { users } = useFetchUsers()
    const { addUserDialog, addedItem, addUser, closeAddDialog } = useAddUser()
    const { delUserDialog, confirmDelUser, delUser } = useDelUser()
    const { editUserDialog, editedItem, editUser, save, closeEditDialog } = useEditUser()
    const router = useRouter()
    const filter = {
      name: null,
      username: null,
      city: null
    }
    const getFilteredUsers = () => {
      let users = useFetchUsers()
      for (const [key, value] of Object.entries(filter)) {
        if (value) {
          users = users.filter((itm) => itm[key] === value)
        }
      }
    }
    const open = (id) => {
      router.push('/user/' + id)
    }
  
    return {
      users, filter, addUserDialog, addedItem, addUser, closeAddDialog,
      delUserDialog, confirmDelUser, delUser,
      editUserDialog, editedItem, editUser, save, closeEditDialog,
      getFilteredUsers, open
    }
  }
}
</script>

<style scoped>

</style>