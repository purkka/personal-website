<template>
  <v-container>
    <v-col>
      <v-col class="text-h4"> Experience</v-col>
      <template v-for="item in items">

        <v-divider :key="item"/>

        <v-row
            v-if="item.uniStudies"
            :key="item.uniStudies"
            class="px-12">
          <v-col cols="3">
            <v-card class="pa-0 ma-0" elevation="0">
              <v-card-title
                  class="text-uppercase text-h6 grey--text"
                  v-text="item.uniStudies.heading"
              />
            </v-card>
          </v-col>
          <v-col>
            <v-card class="pa-0 ma-0" elevation="0">
              <v-card-title class="pb-1">
                {{ item.uniStudies.content.title }}
                <v-spacer/>
                <v-col
                    class="subtitle-1 grey--text"
                    v-text="item.uniStudies.content.date"
                >
                </v-col>
              </v-card-title>
              <template v-for="row in item.uniStudies.content.body">
                <v-card-text class="py-0" :key="row" v-text="row"/>
              </template>
            </v-card>
          </v-col>
        </v-row>

        <v-row
            v-else-if="item.relevantCourses"
            :key="item.relevantCourses"
            class="px-12">
          <v-col cols="3">
            <v-card class="pa-0 ma-0" elevation="0">
              <v-card-title
                  class="text-uppercase text-h6 grey--text"
                  v-text="item.relevantCourses.heading"
              />
            </v-card>
          </v-col>
          <v-col>
            <template v-for="content in item.relevantCourses.content">
              <v-card class="pa-0 ma-0" elevation="0" :key="content">
                <v-card-title class="pb-1">
                  {{ content.title }}
                </v-card-title>
                <template v-for="course in content.courses">
                  <v-card-text class="py-0" :key="course">
                    <a class="pa-0 ma-0" :href="course.link">
                      {{ course.name }}
                    </a>
                  </v-card-text>
                </template>
              </v-card>
            </template>
          </v-col>
        </v-row>

        <v-row
            v-if="item.pastEmployment"
            :key="item.pastEmployment"
            class="px-12">
          <v-col cols="3">
            <v-card class="pa-0 ma-0" elevation="0">
              <v-card-title
                  class="text-uppercase text-h6 grey--text"
                  v-text="item.pastEmployment.heading"
              />
            </v-card>
          </v-col>
          <v-col>
            <template v-for="content in item.pastEmployment.content">
              <v-card class="pa-0 ma-0" elevation="0" :key="content">
                <v-card-title class="pb-1">
                  {{ content.title }}
                  <v-spacer/>
                  <v-col
                      class="subtitle-1 grey--text"
                      v-text="content.date"
                  >
                  </v-col>
                </v-card-title>
                  <v-card-text class="py-0" v-text="content.description"/>
              </v-card>
            </template>
          </v-col>
        </v-row>
      </template>
    </v-col>
  </v-container>
</template>

<script>
export default {
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
                {name: 'Data Structures and Algorithms', link: '',},
                {name: 'Programming Parallel Computers', link: '',},
                {name: 'Computer Graphics', link: '',},
                {name: 'Software Project', link: '',},
                {name: 'Programming Studio 1+2', link: '',},
              ],
            },
            {
              title: 'Digital Systems and Design',
              courses: [
                {name: 'Signals and Systems', link: '',},
                {name: 'Embedded Real-Time Systems', link: '',},
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
            }
          ],
        },
      },
    ],
  }),
}
</script>
