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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AboutMe from "@/components/AboutMe";
import Intro from "@/components/Intro";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default {
  name: 'Main',
  components: {Projects, Experience, Intro, AboutMe},
}
</script>
