<template>
  <div class="ma-8">
    <v-card class="d-flex justify-space-between mb-16" flat tile>
      <h2 style="color: lightgrey">Detail User</h2>
    </v-card>
    <div v-for="report in reports" :key="report.ID">
      <div v-if="report.ID === $route.params.report">
        <v-row align="center">
          <v-col cols="3">
            <h4>User :</h4>
          </v-col>
          <v-col cols="3">
            <h4>{{ report.username }}</h4>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="3">
            <h4>Report reason :</h4>
          </v-col>
          <v-col>
            <p>{{ report.reason }}</p>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="3">
            <h4>Report by :</h4>
          </v-col>
          <v-col>
            <h4>{{ report.moderatorUsername }}</h4>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="3">
            <h4>From Thread (Title Thread) :</h4>
          </v-col>
          <v-col>
            <p>{{ report.threadTitle }}</p>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="3">
            <h4>Comment :</h4>
          </v-col>
          <v-col>
            <p>{{ report.publishedOn }}</p>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="3">
            <h4>Date Comment :</h4>
          </v-col>
          <v-col>
            <p>{{ report.publishedOn }}</p>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="ma-10">
      <template>
        <v-row justify="end">
          <v-btn
            color="error"
            class="rounded-lg"
            dark
            @click.stop="dialog = true"
          >
            Delete Thread
          </v-btn>

          <v-dialog v-model="dialog" max-width="465">
            <v-card class="pa-3">
              <v-card-title class="text-h6">
                <p>
                  Are you sure want to
                  <span style="color: #ff5252"> ban </span> this user ?
                </p>
              </v-card-title>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text @click="dialog = false"> Cancel </v-btn>

                <v-btn
                  color="error"
                  class="rounded-lg"
                  @click="dialog = false"
                  @click.prevent="ban"
                >
                  Yes!, ban user
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailReportPage",
  layout: "admin",
  data() {
    return {
      dialog: false,
      // reports: [],
    };
  },

  computed: {
    reports() {
      return this.$store.state.general.getreport.reports;
    },
  },

  mounted() {
    this.$store.dispatch("general/getreport/getReportData");
  },

  methods: {
    async ban() {
      const response = await this.$axios
        .$put(`/users/${this.selected}/banned`, {
          headers: {
            "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          alert("Ban User Success");
          location.reload();
        })
        .catch((err) => {
          console.log(err);
          alert("Ban User Failed");
        });
      console.log(response);
    },
  },
};
</script>

<style></style>
