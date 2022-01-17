<template>
  <v-container fluid>
    <v-row class="pa-0">
      <v-col class="pa-0">
        <v-sheet class="v-sheet-custom pt-16">
          <Intro id="intro"/>
        </v-sheet>

        <v-sheet class="v-sheet-custom" color="background">
          <AboutMe id="aboutMe"/>
        </v-sheet>

        <v-sheet class="v-sheet-custom">
          <Experience id="experience"/>
        </v-sheet>

        <v-sheet class="v-sheet-custom" color="background">
          <Projects id="projects"/>
        </v-sheet>

        <v-sheet class="v-sheet-custom">
          <Programming id="programming"/>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Programming from '@/components/Programming.vue';
import AboutMe from './AboutMe.vue';
import Intro from './Intro.vue';
import Experience from './Experience.vue';
import Projects from './Projects.vue';

export default Vue.extend({
  name: 'Main',
  components: {
    Programming,
    Projects,
    Experience,
    Intro,
    AboutMe,
  },
});
</script>
