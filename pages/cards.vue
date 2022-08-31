<template>
  <v-row>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="With Props">
        <CardsProps />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="With Slots">
        <CardsSlots />
      </BaseCard>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  
  import BaseCard from "@/components/pages/BaseCard.vue";
  import CardsProps from "@/components/pages/cards/CardsProps.vue";
  import CardsSlots from "@/components/pages/cards/CardsSlots.vue";
  
  </script>
