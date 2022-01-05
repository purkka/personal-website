<template>
  <v-container>
    <v-row>
      <v-col>
        <v-sheet class="mt-3">
          <Intro/>
        </v-sheet>

        <v-sheet>
          <AboutMe/>
        </v-sheet>

        <v-sheet>
          <Experience/>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AboutMe from "@/components/AboutMe";
import Intro from "@/components/Intro";
import Experience from "@/components/Experience";

export default {
  name: 'HelloWorld',
  components: {Experience, Intro, AboutMe},
}
</script>
