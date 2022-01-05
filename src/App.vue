<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <v-spacer/>
      <v-btn @click="$vuetify.goTo('#intro')" text>
        Lorem
      </v-btn>

      <v-spacer/>

      <v-btn @click="$vuetify.goTo('#aboutMe')" text>
        About Me
      </v-btn>

      <v-btn @click="$vuetify.goTo('#experience')" text>
        Experience
      </v-btn>

      <v-spacer/>
    </v-app-bar>

    <v-main class="background">
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
