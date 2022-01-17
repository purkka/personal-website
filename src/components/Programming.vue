<template>
  <v-container class="v-container-custom">
    <v-col>
      <v-col class="text-h4"> {{ $t('programming') }}</v-col>
      <v-divider/>
      <v-col class="v-col-table">
        <v-data-table
          :items="items"
          hide-default-header
          hide-default-footer
        >
          <template v-slot:item="row">
            <tr>
              <td>{{ row.item.name }}</td>
              <td class="column">
                <v-progress-linear
                  height="7"
                  rounded
                  :value="row.item.value"
                />
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-col>
    </v-col>
  </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      items: [
        { name: this.$i18n.t('pg-scala'), value: 85 },
        { name: this.$i18n.t('pg-c'), value: 75 },
        { name: this.$i18n.t('pg-rust'), value: 55 },
        { name: this.$i18n.t('pg-vue'), value: 45 },
        { name: this.$i18n.t('pg-script'), value: 30 },
      ],
    };
  },
};
</script>

<style>
.column {
  width: 50%;
  min-width: 200px;
}
</style>
