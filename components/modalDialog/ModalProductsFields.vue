<template>
  <v-row>
    <v-col cols="12" sm="6" md="4">
      <div class="text-field">
        <input
          class="text-field__input"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          v-model="editedItem.name"
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
          v-model="editedItem.type"
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
          v-model="editedItem.brand"
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
          v-model="editedItem.real_price.amount"
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
          v-model="editedItem.real_price.currency"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    editedItem: {
      type: Object,
      default: {},
    },
  },
};
</script>
