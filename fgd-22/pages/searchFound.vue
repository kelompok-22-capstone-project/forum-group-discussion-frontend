<template>
  <div class="ma-8">
    <div v-if="threadsLength > 0">
      <h2 style="color: grey">
        This is all relevan thread with "
        {{ this.$store.state.general.search.searchThread }} "
      </h2>
      <div v-for="thread in threads" :key="thread.ID">
        <v-card
          class="mx-auto mr-8 ml-8 mt-6 pa-4 rounded-lg"
          elevation="5"
          block
        >
          <v-btn
            text
            plain
            :to="{ name: 'user-threads', params: { index: thread.ID } }"
            class="text-h4 text-bold font-weight-medium black--text no-uppercase"
            style="max-width: 1400px, color:#000"
          >
            {{ thread.title }}
          </v-btn>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey">
                <v-icon>mdi-account</v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-btn
                  plain
                  text
                  class="justify-start pa-1 no-uppercase"
                  :to="{
                    name: 'user-profile',
                    params: { index: thread.creatorUsername },
                  }"
                >
                  {{ thread.creatorUsername }}
                </v-btn>
              </v-list-item-content>
              <v-btn
                small
                rounded
                outlined
                color="indigo"
                :to="{
                  name: 'category',
                  params: { category: thread.categoryName },
                }"
              >
                {{ thread.categoryName }}
              </v-btn>
            </v-list-item>
          </v-card-actions>

          <v-card class="overflow-hidden" flat>
            <v-btn
              plain
              text
              class="text-h8 font-weight-bold no-uppercase"
              :to="{
                name: 'user-threads',
                params: { index: thread.ID },
              }"
            >
              {{ thread.description }}
            </v-btn>
          </v-card>
          <v-card-actions>
            <v-row>
              <v-col cols="1" class="mr-2">
                <v-btn
                  color="dark"
                  plain
                  :to="{
                    name: 'user-threads',
                    params: { index: thread.ID },
                  }"
                >
                  <v-icon>mdi-thumb-up-outline</v-icon>
                  <span class="subheading mr-2">{{ thread.totalLike }}</span>
                </v-btn>
              </v-col>
              <v-col cols="1">
                <v-btn
                  color="dark"
                  plain
                  :to="{
                    name: 'user-threads',
                    params: { index: thread.ID },
                  }"
                >
                  <v-icon>mdi-bookmark-outline</v-icon>
                  <span class="subheading mr-2"
                    >{{ thread.totalFollower }} Follow this tread</span
                  >
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </div>
    </div>
    <div v-else>
      <v-card flat class="mx-auto my-16" max-width="370">
        <v-card flat class="d-flex justify-center mb-3">
          <img src="/img/notFound.svg" />
        </v-card>
        <v-card flat class="d-flex justify-center pa-3">
          <h2 style="color: grey">
            No result for "{{ this.$store.state.general.search.searchThread }}"
          </h2>
        </v-card>
        <v-card flat class="d-flex justify-center">
          <p style="color: grey" class="text-center">
            We couldn not find what you searched for. Try searching again.
          </p>
        </v-card>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      threads: [],
      threadsLength: "",
    };
  },

  async created() {
    await this.$axios
      .$get(
        `/guest/threads?search=${this.$store.state.general.search.searchThread}`,
        {
          headers: {
            "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data.list);
        this.threadsLength = res.data.list.length;
        this.threads = res.data.list;
      })
      .catch((err) => {
        console.log(err);
        alert("Create Thread Failed");
      });
  },
};
</script>

<style scoped>
.no-uppercase {
  text-transform: unset !important;
}
</style>
