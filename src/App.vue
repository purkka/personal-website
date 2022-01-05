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

    <v-footer color="black" padless class="ma-0">
      <v-container
          class="transparent white--text text-center align-center"
      >
        <v-row>
          <v-col>
            <v-card-text class="pb-1">
              Contact me via e-mail
            </v-card-text>
            <v-card-text class="pt-1">
              firstname dot lastname at outlook dot com
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
          ©{{ new Date().getFullYear() }} — <strong>Erika Marttinen</strong>
        </v-card-text>
      </v-container>
    </v-footer>
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
    icons: [
      { pic: 'mdi-github', href: 'https://github.com/purkka' },
      { pic: 'mdi-linkedin', href: 'https://www.linkedin.com/in/erika-marttinen-53483a1b2/' },
    ],
  }),
};
</script>
