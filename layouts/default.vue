<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useDisplay } from "vuetify";
import Sidebar from "~~/components/layoutComponents/sidebar/Sidebar.vue";
useMeta({
  title: "My project with Nuxt 3",
});

const drawer = ref(undefined || true);
const innerW = window.innerWidth;
const { mdAndUp, mdAndDown } = useDisplay();
onMounted(() => {
  if (innerW < 950) {
    drawer.value = !drawer.value;
  }
});
</script>
<template>
  <div>
    <v-app>
      <!-- ---------------------------------------------- -->
      <!---Header -->
      <!-- ---------------------------------------------- -->
      <v-app-bar elevation="0" color="primary">
        <div class="pe-5">
          <NuxtLink to="/" class="d-flex">
            <img src="/images/logos/white-logo-icon.svg" />
            <img src="/images/logos/white-logo-text.svg" class="pl-3" />
          </NuxtLink>
        </div>
        <v-app-bar-nav-icon class="" @click="drawer = !drawer" />
        <v-spacer />
      </v-app-bar>
      <v-main>
        <!-- ---------------------------------------------- -->
        <!---Sidebar -->
        <!-- ---------------------------------------------- -->
        <v-navigation-drawer
          left
          :permanent="mdAndUp"
          elevation="10"
          app
          :temporary="mdAndDown"
          v-model="drawer"
          expand-on-hover
        >
          <Sidebar />
        </v-navigation-drawer>
        <v-container fluid class="page-wrapper">
          <slot />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
