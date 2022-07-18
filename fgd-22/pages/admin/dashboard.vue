<template>
  <div class="grey lighten-5">
    <v-row no-gutters>
      <v-col md="6">
        <v-card class="ma-8 pa-6 rounded-lg" color="primary" link>
          <v-list-item three-line class="white--text">
            <v-list-item-content>
              <div class="mb-2">Total User</div>
              <v-list-item-title class="text-h5 mb-1"> {{totalUser}} </v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar size="80">
              <v-icon size="74" color="#ffff">mdi-account</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col md="6">
        <v-card class="ma-8 pa-6 rounded-lg" color="primary" link>
          <v-list-item three-line class="white--text">
            <v-list-item-content>
              <div class="mb-2">Total Threads</div>
              <v-list-item-title class="text-h5 mb-1"> {{totalThread}} </v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar size="80">
              <v-icon size="74" color="#ffff">mdi-file-document-outline</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col md="6">
        <v-card class="ma-8 pa-6 rounded-lg" color="error" link>
          <v-list-item three-line class="white--text">
            <v-list-item-content>
              <div class="mb-2">Total Category</div>
              <v-list-item-title class="text-h5 mb-1"> {{totalCategory}} </v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar size="80">
              <v-icon size="74" color="#ffff">mdi-shape-outline</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col md="6">
        <v-card class="ma-8 pa-6 rounded-lg" color="error" link>
          <v-list-item three-line class="white--text">
            <v-list-item-content>
              <div class="mb-2">Total Report</div>
              <v-list-item-title class="text-h5 mb-1">{{
                totalReport
              }}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar size="80">
              <v-icon size="74" color="#ffff">mdi-message-alert-outline</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "dashboardPage",
  layout: "admin",

  data() {
    return {};
  },
  computed: {
    totalReport() {
      return this.$store.state.general.getreport.totalReport;
    },
    totalThread() {
      return this.$store.state.general.getthread.totalThread;
    },
    totalUser() {
      return this.$store.state.general.getuser.totalUser;
    },
    totalCategory() {
      return this.$store.state.general.getcategory.totalCategory;
    },
  },

  mounted() {
    this.$store.dispatch("general/getreport/getReportData");
    this.$store.dispatch("general/getthread/getThreadData");
    this.$store.dispatch("general/getuser/getUserData");
    this.$store.dispatch("general/getcategory/getCategoriesData");
  },
};
</script>

<style scoped></style>
