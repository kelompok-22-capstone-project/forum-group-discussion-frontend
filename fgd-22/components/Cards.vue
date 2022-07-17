<template>
  <v-card
    to="/thread"
    class="mx-auto rounded-lg"
    max-width="1550"
    elevation="5"
  >
    <v-card-text class="text-h3 d-inline-block text-truncate" style="max-width: 1400px"> {{ title  }} </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Evan You</v-list-item-title>
        </v-list-item-content>

        <v-btn small rounded outlined color="indigo"> Teknologi </v-btn>
      </v-list-item>
    </v-card-actions>

    <v-card-text class="text-h8 font-weight-bold">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </v-card-text>

    <v-card-actions>
      <v-col cols="12" sm="3">
        <v-btn icon color="dark">
          <v-icon>mdi-thumb-up-outline</v-icon>
        </v-btn>
        <span class="subheading mr-2">256</span>

        <v-btn icon color="dark">
          <v-icon>mdi-bookmark-outline</v-icon>
        </v-btn>
        <span class="subheading mr-2">45 Follow this tread</span>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  //meta
  head() {
    return {
      title: "Moot",
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: "Moot",
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: "Moot",
        },
        {
          hid: "og:image",
          name: "og:image",
          content: "/images/logo.png",
        },
        {
          hid: "description",
          name: "description",
          content: "Moot",
        },
      ],
    };
  },

  //hook "asyncData"
  async asyncData({ store }) {
    await store.dispatch("web/threads/getThreadsData");
  },

  //computed
  computed: {
    //threads
    threads() {
      return this.$store.state.web.thread.threads;
    },
  },

  //method
  methods: {
    //method "changePage"
    changePage(page) {
      //commit to mutation "SET_PAGE"
      this.$store.commit("web/threads/SET_PAGE", page);

      //dispatch on action "getThreadsData"
      this.$store.dispatch("web/threads/getThreadsData");
    },
  },
};
</script>
