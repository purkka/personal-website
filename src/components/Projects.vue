<template>
  <v-container class="v-container-custom">
    <v-col>
      <v-col class="text-h4"> Projects</v-col>
      <template v-for="item in items">
        <v-divider :key="item"/>

        <v-row :key="item">
          <v-col>
            <v-col class="text-h6 pb-0" v-text="item.title"/>
            <v-col class="text-body-1 pt-3" v-text="item.summary"/>
            <v-expansion-panels class="pt-3">
              <v-expansion-panel>
                <v-expansion-panel-header class="text-body-1">
                  View detailed description
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-col class="text-body-2" v-text="item.description"/>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-col class="pt-6 text-center">
              <v-btn
                  :href="item.link"
                  target="_blank"
                  color="primary"
              >
                View on GitHub
              </v-btn>
            </v-col>
          </v-col>
          <v-col cols="5">
            <v-col>
              <v-carousel
                  height="300"
                  hide-delimiter-background
                  hide-delimiters
              >
                <v-carousel-item
                    v-for="(img, i) in item.images"
                    :key="i"
                    :src="require(`../assets/${img}`)"
                    contain
                />
              </v-carousel>
            </v-col>
          </v-col>
        </v-row>
      </template>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    items: [
      {
        title: '3D viewer',
        summary: 'A Wavefront OBJ file viewer written in Scala',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link: 'https://github.com/purkka/3D-Viewer',
        images: [
          '3D_opening.png',
        ],
      },
      {
        title: 'DSO display app',
        summary: 'A virtual display application for the Voltcraft DSO 4022 oscilloscope written in Rust',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link: 'https://github.com/purkka/dso-display',
        images: [
          'logo.svg',
          'logo.svg',
        ],
      },
    ],
  }),
});
</script>
