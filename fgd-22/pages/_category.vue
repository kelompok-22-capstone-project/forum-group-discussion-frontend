<template>
  <v-app>
    <div class="ma-8">
      <h1>{{ $route.params.category }}</h1>
      <div v-for="list in categoryList" :key="list.ID">
        <div v-if="$route.params.category === list.name">
          <p>{{ list.description }}</p>
        </div>
      </div>
    </div>

    <div v-for="thread in threads" :key="thread.categoryName">
      <div v-if="thread.categoryName === $route.params.category">
      
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
                <v-btn plain text class="justify-start pa-1 no-uppercase">
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
  </v-app>
</template>

<script>
export default {
  layout: "deafult",
  name: "category",
  data() {
    return {
      threads: [],
    };
  },

  async created() {
    await this.$axios
      .$get(`/guest/threads`, {
        headers: {
          "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data.list);
        this.threads = res.data.list;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    categoryList() {
      return this.$store.state.general.getcategory.category;
    },
  },

  mounted() {
    this.$store.dispatch("general/getcategory/getCategoriesData");
    return console.log("call success");
  },
};
</script>

<style scope>
.no-uppercase {
  text-transform: unset !important;
}
</style>
