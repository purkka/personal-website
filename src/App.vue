<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-spacer/>
      <v-btn @click="$vuetify.goTo(0)" text>
        {{ $t("firstName") }}
      </v-btn>

      <v-spacer/>

      <v-btn @click="$vuetify.goTo('#aboutMe')" text>
        {{ $t("aboutMe") }}
      </v-btn>

      <v-btn @click="$vuetify.goTo('#experience')" text>
        {{ $t("experience") }}
      </v-btn>

      <v-btn @click="$vuetify.goTo('#projects')" text>
        {{ $t("projects") }}
      </v-btn>

      <v-spacer/>

      <v-btn
        class="ma-2"
        fab
        small
        depressed
        color="transparent"
        v-on:click="switchTheme"
      >
        <v-icon>
          mdi-theme-light-dark
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="background">
      <Main/>
    </v-main>

    <v-footer color="black" padless class="ma-0">
      <v-container
        class="transparent white--text text-center align-center"
      >
        <v-row>
          <v-col>
            <v-card-text class="pb-1">
              {{ $t("contactMe") }}
            </v-card-text>
            <v-card-text class="pt-1">
              {{ $t("email") }}
            </v-card-text>
          </v-col>
          <v-col>
            <v-card-text>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 white--text"
                :href="icon.href"
                target="_blank"
                icon
              >
                <v-icon size="24px">
                  {{ icon.pic }}
                </v-icon>
              </v-btn>
            </v-card-text>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          © {{ new Date().getFullYear() }} — <strong>
          {{ $t("firstName") }} {{ $t("lastName") }}</strong>
        </v-card-text>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Main from './components/Main.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Main,
  },

  data: () => ({
    icons: [
      { pic: 'mdi-github', href: 'https://github.com/purkka' },
      { pic: 'mdi-linkedin', href: 'https://www.linkedin.com/in/erika-marttinen-53483a1b2/' },
    ],
  }),

  methods: {
    switchTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem('theme', this.$vuetify.theme.dark ? 'dark' : 'light');
    },
  },
});
</script>
