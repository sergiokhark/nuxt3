<template>
  <v-card>
    <v-card-text>
      <br />
      <h2 class="mb-7">{{ title }}</h2>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <div class="text-field">
              <input
                class="text-field__input"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                v-model="newItem.name"
              />
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-field">
              <input
                class="text-field__input"
                type="text"
                name="type"
                id="type"
                placeholder="Type"
                v-model="newItem.type"
              />
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-field">
              <input
                class="text-field__input"
                type="text"
                name="brand"
                id="brand"
                placeholder="Brand"
                v-model="newItem.brand"
              />
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-field">
              <input
                class="text-field__input"
                type="text"
                name="price"
                id="price"
                placeholder="Price"
                v-model="newItem.real_price.amount"
              />
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-field">
              <input
                class="text-field__input"
                type="text"
                name="currency"
                id="currency"
                placeholder="Currency"
                v-model="newItem.real_price.currency"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn to="/products" color="blue darken-1"> Cancel </v-btn>
      <v-btn
        v-if="!createBtn"
        to="/products"
        color="blue darken-1"
        @click="$emit('create', newItem)"
      >
        Create
      </v-btn>
      <v-btn
        v-if="createBtn"
        to="/products"
        color="blue darken-1"
        @click="$emit('save')"
      >
        Update
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { computed } from "vue"

export default {
  props: {
    editedItem: {
      type: Object,
      default: {},
    },
    title: {
      type: String,
      default: "",
    },
    createBtn: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const newItem = computed(() => props.editedItem)

    return {
      newItem
    }
  }
}
</script>
