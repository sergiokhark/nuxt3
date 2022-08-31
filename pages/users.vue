<template>
    <v-card>
    <v-card-text>
      <br />
      <h2 class="mb-7">Users data</h2>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Username</th>
            <th class="text-left">Email</th>
            <th class="text-left">Site</th>
            <th class="text-left">City</th>
            <th class="text-left">Street</th>
            <th class="text-left">Suite</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in users" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.username }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.website }}</td>
            <td>{{ item.city }}</td>
            <td>{{ item.street }}</td>
            <td>{{ item.suite }}</td>
          </tr>
        </tbody>
      </v-table> 
    </v-card-text>
  </v-card>
</template>

<script>
import { getUsers } from '~~/hooks/getUsers';

export default {
  setup() {
    const {users} = getUsers()
    return {
      users
    }
  }
}

</script>