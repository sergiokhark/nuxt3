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
                name="username"
                id="username"
                placeholder="Username"
                v-model="newItem.username"
              />
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-field">
              <input
                class="text-field__input"
                type="text"
                name="website"
                id="website"
                placeholder="Website"
                v-model="newItem.website"
              />
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-field">
              <input
                class="text-field__input"
                type="text"
                name="city"
                id="city"
                placeholder="City"
                v-model="newItem.address.city"
              />
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-field">
              <input
                class="text-field__input"
                type="text"
                name="street"
                id="street"
                placeholder="Street"
                v-model="newItem.address.street"
              />
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-field">
              <input
                class="text-field__input"
                type="text"
                name="suite"
                id="suite"
                placeholder="Suite"
                v-model="newItem.address.suite"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn to="/users" color="blue darken-1"> Cancel </v-btn>
      <v-btn
        v-if="!createBtn"
        to="/users"
        color="blue darken-1"
        @click="$emit('create', newItem)"
      >
        Create
      </v-btn>
      <v-btn
        v-if="createBtn"
        to="/users"
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
      newItem,
    }
  },
}
</script>

<style>
.text-field {
  margin-bottom: 1rem;
}

.text-field__label {
  display: block;
  margin-bottom: 0.25rem;
}

.text-field__input {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.text-field__input::placeholder {
  color: #212529;
  opacity: 0.4;
}

.text-field__input:focus {
  color: #212529;
  background-color: #fff;
  border-color: #bdbdbd;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
}

.text-field__input:disabled,
.text-field__input[readonly] {
  background-color: #f5f5f5;
  opacity: 1;
}
</style>
