<template>
  <div class="ma-6">
    <v-card class="d-flex justify-space-between mb-16" flat tile>
      <h2 style="color: grey">List Thread</h2>
    </v-card>
    <div>
      <v-card flat>
        <v-row class="pl-4 pb-3">
          <v-col cols="3">
            <h5>Creator</h5>
          </v-col>
          <v-col cols="3">
            <h5>Title</h5>
          </v-col>
          <v-col cols="2">
            <h5>Category</h5>
          </v-col>
          <v-col cols="2">
            <h5>Date</h5>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>
        <v-divider></v-divider>
        <div v-for="thread in threadList" :key="thread.ID" link>
          <v-row align="center">
            <v-col cols="3" class="pl-7 pt-4">
              <span>{{ thread.creatorUsername }}</span>
            </v-col>
            <v-col cols="3" class="pl-4">
              <v-btn
                text
                color="black"
                class="no-uppercase pa-0 justify-start"
                :to="{
                  name: 'admin-threadPage-detail',
                  params: { detail: thread.ID },
                }"
              >
                {{ thread.title }}
              </v-btn>
            </v-col>
            <v-col cols="2" class="pl-4 pt-4">
              <span>{{ thread.categoryName }}</span>
            </v-col>
            <v-col cols="2" class="pl-4 pt-4">
              <span>{{ thread.publishedOn }}</span>
            </v-col>
            <v-col cols="2" class="pl-4 pt-4">
                <v-btn-toggle v-model="selected" tile group>
                  <v-btn
                    text
                    color="error"
                    :value="thread.ID"
                    @click.stop="dialog = true"
                  >
                    <v-icon color="error">mdi-delete-outline</v-icon>
                  </v-btn>
                </v-btn-toggle>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </div>
      </v-card>
      <div class="mt-10">
        <template>
          <v-row justify="start">
            <v-dialog v-model="dialog" max-width="465">
              <v-card class="pa-3">
                <v-card-title class="text-h6">
                  <span>
                    Are you sure want to
                    <span style="color: #ff5252"> delete </span> this thread ?
                  </span>
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
      paramsID: "",
      selected: "",
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
