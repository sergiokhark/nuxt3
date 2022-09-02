<template>
    <v-card>
    <v-card-text>
      <br />
      <h2 class="mb-7">Users data</h2>
      <v-spacer></v-spacer>
      <v-btn elevation="0" color="primary" size="small" @click="addUserDialog = true">Add user</v-btn>
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
              <v-icon small class="mr-2" color="#9b999b"> mdi-pencil</v-icon>
              <v-icon small color="#9b999b"> mdi-delete </v-icon>
            </td>
          </tr>
        </tbody>
      </v-table>
      <ModalDialog
        :dialog="addUserDialog"
        @save="addUser()"
        @close="closeAddDialog"
      >
        <ModalUsersFields :editedItem="editedItem" />
      </ModalDialog> 
    </v-card-text>
  </v-card>
</template>

<script>

import useFetchUsers from '~~/hooks/useFetchUsers';
import useAddUser from '~~/hooks/useAddUser'
import ModalDialog from '~~/components/modalDialog/ModalDialog.vue';
import ModalUsersFields from '~~/components/modalDialog/ModalUsersFields.vue'

export default {
  components: {
    ModalDialog,
    ModalUsersFields
  },
  
  setup() {
    const { users } = useFetchUsers()
    const { addUserDialog, editedItem, addUser, closeAddDialog } = useAddUser()
  
    return {
      users,
      addUserDialog,
      editedItem,
      addUser,
      closeAddDialog
    }
  }
}
</script>