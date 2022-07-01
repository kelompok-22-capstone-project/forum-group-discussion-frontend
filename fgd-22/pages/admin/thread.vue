<template>
  <div class="ma-6">
    <v-card class="d-flex justify-space-between mb-16" flat tile>
      <h2 style="color: lightgrey">List Thread</h2>
    </v-card>
    <div>
      <v-card flat>
        <v-row class="pl-4 pb-3">
          <v-col>
            <h5>Creator</h5>
          </v-col>
          <v-col>
            <h5>Title</h5>
          </v-col>
          <v-col>
            <h5>Category</h5>
          </v-col>
          <v-col>
            <h5>Date</h5>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <div v-for="thread in threadList" :key="thread.ID" link>
          <v-row>
            <v-col class="pl-6">
              <v-checkbox
                v-model="selected"
                :label="thread.creatorUsername"
                :value="thread.ID"
              ></v-checkbox>
            </v-col>
            <v-col class="pl-4 pt-8">
              <v-btn
                text
                plain
                class="no-uppercase pa-0 justify-start"
                :to="{name:'admin-threadPage-detail',params: { detail: thread.ID } }"
              >
                {{ thread.title }}
              </v-btn>
            </v-col>
            <v-col class="pl-4 pt-8">
              <p>{{ thread.categoryName }}</p>
            </v-col>
            <v-col class="pl-4 pt-8">
              <p>{{ thread.publishedOn }}</p>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </div>
      </v-card>
      <div class="mt-10">
        <template>
          <v-row justify="start">
            <v-btn color="error" dark @click.stop="dialog = true">
              Delete Thread
            </v-btn>

            <v-dialog v-model="dialog" max-width="465">
              <v-card class="pa-3">
                <v-card-title class="text-h6">
                  <p>
                    Are you sure want to
                    <span style="color: #ff5252"> delete </span> this thread ?
                  </p>
                </v-card-title>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn text @click="dialog = false"> Cancel </v-btn>

                  <v-btn
                    color="error"
                    class="rounded-lg"
                    @click="dialog = false"
                    @click.prevent="remove"
                  >
                    Yes!, delete thread
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
  name: "adminThreadPage",
  layout: "admin",
  data() {
    return {
      dialog: false,
      selected: null,
      paramsID:'',
    };
  },

  methods: {
    async remove() {
      const response = await this.$axios
        .$delete(`/threads/${this.selected}`, {
          headers: {
            "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          alert("Delete Thread Success");
          location.reload();
        })
        .catch((err) => {
          console.log(err);
          alert("Delete Thread Failed");
        });
      console.log(response);
    },

  },

  computed: {
    threadList() {
      return this.$store.state.general.getthread.threads;
    },
  },

  mounted() {
    this.$store.dispatch("general/getthread/getThreadData");
  },
};
</script>

<style scope>
.no-uppercase {
  text-transform: unset !important;
}
</style>
