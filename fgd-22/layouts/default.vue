<template>
  <v-app>
    <v-app-bar
      color="white"
      :clipped-left="clipped"
      :clipped-right="clipped"
      app
    >
      <v-btn text disabled>
        <img src="img/logo.svg" height="50" />
      </v-btn>
      <v-spacer></v-spacer>
      <v-responsive max-width="500">
        <v-text-field
          label="Search"
          dense
          flat
          elevation="5"
          hide-details
          solo-inverted
        >
        </v-text-field>
      </v-responsive>
      <v-spacer></v-spacer>

      <v-btn to="/login" depressed color="primary" class="rounded-xl mr-5">
        Login
      </v-btn>

      <v-btn to="/regist" rounded depressed color="error" class="rounded-xl"
        >Register</v-btn
      >
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data: () => ({
    drawer: true,
    clipped: true,
    fixed: true,
  }),
};
</script>
