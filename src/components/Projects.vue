<template>
  <v-container class="v-container-custom">
    <v-col>
      <v-col class="text-h4"> {{ $t('projects') }} </v-col>
      <template v-for="item in items">
        <v-divider :key="item"/>

        <v-row :key="item">
          <v-col>
            <v-col class="text-h6 pb-0" v-text="item.title"/>
            <v-col class="text-body-1 pt-3" v-text="item.summary"/>
            <v-expansion-panels class="pt-3">
              <v-expansion-panel>
                <v-expansion-panel-header class="text-body-1">
                  {{ $t('pr-viewDesc') }}
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
                {{ $t('pr-viewGH') }}
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
  data() {
    return {
      items: [
        {
          title: this.$i18n.t('pr-3d'),
          summary: this.$i18n.t('pr-3d-summary'),
          description: this.$i18n.t('pr-3d-desc'),
          link: 'https://github.com/purkka/3D-Viewer',
          images: [
            '3D_opening.png',
          ],
        },
        {
          title: this.$i18n.t('pr-dso'),
          summary: this.$i18n.t('pr-dso-summary'),
          description: this.$i18n.t('pr-dso-desc'),
          link: 'https://github.com/purkka/dso-display',
          images: [
            'logo.svg',
            'logo.svg',
          ],
        },
      ],
    };
  },
});
</script>
