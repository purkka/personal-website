<template>
  <v-container>
    <v-row>
      <v-col>
        <v-sheet class="mt-3">
          <Intro id="intro"/>
        </v-sheet>

        <v-sheet>
          <AboutMe id="aboutMe"/>
        </v-sheet>

        <v-sheet>
          <Experience id="experience"/>
        </v-sheet>

        <v-sheet class="mb-3">
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
  name: 'HelloWorld',
  components: {Projects, Experience, Intro, AboutMe},
}
</script>
