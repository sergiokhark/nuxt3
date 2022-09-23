<template>
  <v-card>
    <v-card-text>
      <br />
      <h2 class="mb-7">Users data</h2>
      <div class="container-buttons">
        <v-btn
          class="item"
          elevation="0"
          color="primary"
          size="small"
          @click="open('create')"
          >Add user</v-btn
        >
        <v-btn
          class="item"
          elevation="0"
          color="primary"
          size="small"
          @click="resetFilter"
          >reset</v-btn
        >
      </div>
      <br />
      <v-row>
        <v-col>
          <input
            class="text-field__input"
            type="text"
            placeholder="Name"
            v-model="filter.name"
            @change="getFilteredUsers"
          />
        </v-col>
        <v-col>
          <input
            class="text-field__input"
            type="text"
            placeholder="Username"
            v-model="filter.username"
            @change="getFilteredUsers"
          />
        </v-col>
        <v-col>
          <input
            class="text-field__input"
            type="text"
            placeholder="Site"
            v-model="filter.website"
            @change="getFilteredUsers"
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
          <tr v-for="item in filteredUsers" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.username }}</td>
            <td>{{ item.website }}</td>
            <td>{{ item.address.city }}</td>
            <td>{{ item.address.street }}</td>
            <td>{{ item.address.suite }}</td>
            <td>
              <v-icon small class="mr-2" color="#9b999b" @click="open(item.id)">
                mdi-pencil</v-icon
              >
              <v-icon small color="#9b999b" @click="confirmDelUser(item)">
                mdi-delete
              </v-icon>
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

<script lang="ts">
import { useFetchUsers, useDelUser } from "~~/hooks/useActionUsers"
import { Filter, useFilteredItems, useResetFilter } from "~/hooks/useFilter"
import ModalDialog from "~/components/pages/ModalDialog.vue"
import { useRouter } from "vue-router"

export default {
  components: {
    ModalDialog,
  },
  setup() {
    const { users } = useFetchUsers()
    const { delUserDialog, confirmDelUser, delUser } = useDelUser()
    const router = useRouter()
    const open = (id: string): void => {
      router.push(`/users/${id}`)
    }
    const filter = ref<Filter>({
      name: null,
      username: null,
      website: null,
    })
    const filteredUsers = ref([])
    const getFilteredUsers = (): void => {
      filteredUsers.value = useFilteredItems(users.value, filter.value)
    }
    const resetFilter = (): void => {
      useResetFilter(filter.value)
      filteredUsers.value = users.value
    }

    watch(
      [users],
      () => {
        getFilteredUsers()
      },
      { deep: true }
    )

    return {
      filteredUsers,
      delUserDialog,
      confirmDelUser,
      delUser,
      filter,
      resetFilter,
      getFilteredUsers,
      open,
    }
  },
}
</script>

<style>
.container-buttons {
  display: flex;
  justify-content: flex-start;
}
.item {
  margin: 0 5px;
  
}
</style>
