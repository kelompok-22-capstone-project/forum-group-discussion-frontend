<template>
  <div class="ma-6">
    <v-card class="d-flex justify-space-between mb-16" flat tile>
      <h2 style="color: lightgrey">List Thread</h2>
    </v-card>
    <div>
      <v-card flat>
        <v-row class="pl-4 pb-3">
          <v-col>
            <h5>Username</h5>
          </v-col>
          <v-col>
            <h5>Report Reason</h5>
          </v-col>
          <v-col>
            <h5>Report by (Moderator)</h5>
          </v-col>
          <v-col>
            <h5>From (Title Thread)</h5>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <div v-for="report in reports" :key="report.ID" link>
          <v-row>
            <v-col class="pl-6">
              <v-checkbox
                v-model="selected"
                :label="report.username"
                :value="report.ID"
              ></v-checkbox>
            </v-col>
            <v-col class="pl-4 pt-8">
              <v-btn
                text
                plain
                class="no-uppercase pa-0 justify-start"
                :to="{
                  name: 'admin-reportPage-detail',
                  params: { report: report.ID },
                }"
              >
                {{ report.reason }}
              </v-btn>
            </v-col>
            <v-col class="pl-4 pt-8">
              <p>{{ report.moderatorUsername }}</p>
            </v-col>
            <v-col class="pl-4 pt-8">
              <p>{{ report.threadTitle }}</p>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </div>
      </v-card>
      <div class="mt-10">
        <template>
          <v-row justify="start">
            <v-btn
              color="error"
              class="no-uppercase"
              @click.stop="dialog = true"
            >
              Ban User
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
  </div>
</template>

<script>
export default {
  name: "adminReportPage",
  layout: "admin",
  data() {
    return {
      dialog: false,
      selected: null,
      reports: [],
    };
  },

  async created() {
    await this.$axios
      .$get("/reports", {
        headers: {
          "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        this.reports = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
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

<style scope>
.no-uppercase {
  text-transform: unset !important;
}
</style>
