<template>
  <v-container class="v-container-custom">
    <v-col>
      <v-col class="text-h4"> Experience</v-col>
      <template v-for="item in items">

        <v-divider :key="item"/>

        <v-row
            v-if="item.uniStudies"
            :key="item.uniStudies"
        >
          <v-col cols="3">
            <v-col
                class="text-overline font-weight-bold grey--text"
                v-text="item.uniStudies.heading"
            />
          </v-col>
          <v-col>
            <v-col>
              <v-row>
                <v-col
                    class="text-h6"
                    v-text="item.uniStudies.content.title"
                />
                <v-spacer/>
                <v-col
                    class="text-overline grey--text"
                    v-text="item.uniStudies.content.date"
                />
              </v-row>
              <template v-for="row in item.uniStudies.content.body">
                <v-row :key="row">
                  <v-col
                      class="py-0"
                      v-text="row"
                  />
                </v-row>
              </template>
            </v-col>
          </v-col>
        </v-row>

        <v-row
            v-else-if="item.relevantCourses"
            :key="item.relevantCourses"
        >
          <v-col cols="3">
            <v-col
                class="text-overline font-weight-bold grey--text"
                v-text="item.relevantCourses.heading"
            />
          </v-col>
          <v-col>
            <template v-for="content in item.relevantCourses.content">
              <v-col
                  :key="content"
                  class="text-h6"
                  v-text="content.title"
              />
              <v-col
                  :key="content"
              >
                <template v-for="course in content.courses">
                  <v-row :key="course">
                    <v-col class="py-0">
                      <a class="pa-0 ma-0" :href="course.link">
                        {{ course.name }}
                      </a>
                    </v-col>
                  </v-row>
                </template>
              </v-col>
            </template>
          </v-col>
        </v-row>

        <v-row
            v-if="item.pastEmployment"
            :key="item.pastEmployment"
        >
          <v-col cols="3">
            <v-col
                class="text-overline font-weight-bold grey--text"
                v-text="item.pastEmployment.heading"
            />
          </v-col>
          <v-col>
            <template v-for="content in item.pastEmployment.content">

              <v-col :key="content">
                <v-row>
                  <div>
                    <v-col
                        class="text-h6"
                        v-text="content.title"
                    />
                    <v-col
                        v-text="content.description"/>
                  </div>
                  <v-spacer/>
                  <v-col
                      class="text-overline grey--text"
                      v-text="content.date"
                  />
                </v-row>
              </v-col>
            </template>
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
        uniStudies: {
          heading: 'University Studies',
          content: {
            title: 'Aalto University',
            date: 'September 2020 –',
            body: [
              'Major: Computer Science',
              'Minor: Quantum Technology',
              'Minor: Digital Systems and Design',
            ],
          },
        },
      },
      {
        relevantCourses: {
          heading: 'Relevant Courses',
          content: [
            {
              title: 'Computer Science',
              courses: [
                {
                  name: 'Data Structures and Algorithms',
                  link: 'https://sisu.aalto.fi/student/courseunit/aalto-OPINKOHD-1125590013-20210801/brochure',
                },
                {
                  name: 'Programming Parallel Computers',
                  link: 'https://sisu.aalto.fi/student/courseunit/aalto-OPINKOHD-1125618448-20210801/brochure',
                },
                {
                  name: 'Computer Graphics',
                  link: 'https://sisu.aalto.fi/student/courseunit/aalto-OPINKOHD-1125592183-20210801/brochure',
                },
                {
                  name: 'Software Project',
                  link: 'https://sisu.aalto.fi/student/courseunit/aalto-OPINKOHD-1125591890-20210801/brochure',
                },
                {
                  name: 'Programming Studio 1+2',
                  link: 'https://sisu.aalto.fi/student/courseunit/aalto-OPINKOHD-1142318301-20210801/brochure',
                },
                {
                  name: 'Databases',
                  link: 'https://sisu.aalto.fi/student/courseunit/aalto-OPINKOHD-1125590913-20210801/brochure',
                },
              ],
            },
            {
              title: 'Digital Systems and Design',
              courses: [
                {
                  name: 'Signals and Systems',
                  link: 'https://sisu.aalto.fi/student/courseunit/aalto-OPINKOHD-1113161434-20210801/brochure',
                },
                {
                  name: 'Embedded Real-Time Systems',
                  link: 'https://sisu.aalto.fi/student/courseunit/aalto-OPINKOHD-1121459492-20210801/brochure',
                },
              ],
            },
          ],
        },
      },
      {
        pastEmployment: {
          heading: 'Past Employment',
          content: [
            {
              title: 'Eficode',
              date: 'August 10, 2020 – August 21, 2021',
              description: 'UX-designer summer trainee',
            },
          ],
        },
      },
    ],
  }),
});
</script>
