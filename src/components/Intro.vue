<template>
  <v-container class="v-container-custom">
    <v-row>
      <v-col align-self="center" class="text-center">
        <v-col> {{ $t("in-hi") }} </v-col>
        <v-col class="text-h2"> {{ $t("firstName") }} {{ $t("lastName") }} </v-col>
        <v-col> {{ $t("in-desc") }} </v-col>
        <v-col class="mt-10">
          <v-breadcrumbs class="justify-center" :items="items"/>
        </v-col>
      </v-col>
      <v-col class="pa-0 ma-0">
        <v-img
            :src="require('../assets/profile.png')"
            contain
            height="500"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      items: [
        { text: 'GitHub', href: 'https://github.com/purkka' },
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/erika-marttinen-53483a1b2/' },
      ],
    };
  },
});
</script>
