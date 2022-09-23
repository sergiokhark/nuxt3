<template>
  <v-card>
    <v-card-text>
      <br />
      <h2 class="mb-7">Orders data</h2>
      <div>
        <v-btn
          class="item"
          elevation="0"
          color="primary"
          size="small"
          @click="resetFilter"
          >reset filter</v-btn
        >
      </div>
      <br />
      <v-row>
        <v-col>
          <input
            class="text-field__input"
            type="text"
            placeholder="Status"
            v-model="filter.status_before"
            @change="getFilteredOrders"
          />
        </v-col>
        <v-col>
          <input
            class="text-field__input"
            type="text"
            placeholder="Number"
            v-model="filter.number"
            @change="getFilteredOrders"
          />
        </v-col>
        <v-col>
          <input
            class="text-field__input"
            type="text"
            placeholder="Creation date"
            v-model="filter.created_at"
            @change="getFilteredOrders"
          />
        </v-col>
      </v-row>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Status</th>
            <th class="text-left">Order number</th>
            <th class="text-left">Creation date</th>
            <th class="text-left">Lastname</th>
            <th class="text-left">Firstname</th>
            <th class="text-left">Price</th>
            <th class="text-left">Currency</th>
            <th class="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredOrders" :key="item.id">
            <td>{{ item.status_before }}</td>
            <td>{{ item.number }}</td>
            <td>{{ item.created_at }}</td>
            <td>{{ item.customer.lastname }}</td>
            <td>{{ item.customer.firstname }}</td>
            <td>{{ item.summary.total_due.amount }}</td>
            <td>{{ item.summary.total_due.currency }}</td>
            <td>
              <v-icon small class="mr-2" color="#9b999b" @click="open(item.id)">
                mdi-eye</v-icon
              >
              <v-icon small color="#9b999b" @click="changeStatus(item)">
                mdi-swap-horizontal
              </v-icon>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { useFetchOrders } from "~~/hooks/useActionOrders"
import { Filter, useFilteredItems, useResetFilter } from "~/hooks/useFilter"
import { useRouter } from "vue-router"
import { Order } from "~/type/itemsType"

export default {
  setup() {
    const { orders } = useFetchOrders()
    const router = useRouter()
    const changeStatus = (item: Order): void => {
      let temp = item.status_before
      item.status_before = item.status
      item.status = temp
    }
    const open = (id: string): void => {
      router.push(`/orders/${id}`)
    }
    const filter = ref<Filter>({
      created_at: null,
      number: null,
      status_before: null,
    })
    const filteredOrders = ref([])
    const getFilteredOrders = (): void => {
      filteredOrders.value = useFilteredItems(orders.value, filter.value)
    }
    const resetFilter = (): void => {
      useResetFilter(filter.value)
      filteredOrders.value = orders.value
    }

    watch(
      [orders],
      () => {
        getFilteredOrders()
      },
      { deep: true }
    )

    return {
      filteredOrders,
      orders,
      changeStatus,
      open,
      filter,
      resetFilter,
      getFilteredOrders
    }
  },
}
</script>
