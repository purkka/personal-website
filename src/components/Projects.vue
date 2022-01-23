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
                  <template v-for="paragraph in item.description">
                    <v-col :key="paragraph" class="text-body-1" v-text="paragraph"/>
                  </template>
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
                  height="400"
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
          description: [
            this.$i18n.t('pr-3d-desc-0'),
            this.$i18n.t('pr-3d-desc-1'),
            this.$i18n.t('pr-3d-desc-2'),
          ],
          link: 'https://github.com/purkka/3D-Viewer',
          images: [
            '3D-0.png',
            '3D-1.png',
            '3D-2.png',
            '3D-3.png',
          ],
        },
        {
          title: this.$i18n.t('pr-dso'),
          summary: this.$i18n.t('pr-dso-summary'),
          description: [
            this.$i18n.t('pr-dso-desc-0'),
            this.$i18n.t('pr-dso-desc-1'),
            this.$i18n.t('pr-dso-desc-2'),
          ],
          link: 'https://github.com/purkka/dso-display',
          images: [
            'DSO-0.jpg',
            'DSO-1.jpg',
          ],
        },
      ],
    };
  },
});
</script>
