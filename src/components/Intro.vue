<template>
  <v-container class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-col align-self="center" class="text-center">
        <v-col> Hi, I'm </v-col>
        <v-col class="text-h2"> Lorem Ipsum </v-col>
      </v-col>
      <v-col class="pa-0 ma-0">
        <!-- The Vuetify logo is used as a placeholder image -->
        <v-img
            :src="require('../assets/logo.svg')"
            contain
            height="400"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
