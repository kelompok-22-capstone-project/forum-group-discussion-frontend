<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          width="1550px"
          height="60px"
          class="ma-7 pt-4 pb-4"
          color="#fff"
          elevation="5"
          v-bind="attrs"
          v-on="on"
        >
          <span> Let's Make a thread </span>
          <v-spacer></v-spacer>
          <v-icon> mdi-plus </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-col cols="12" sm="6" md="12">
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        </v-col>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="2" sm="6" md="12">
                <v-text-field
                  label="Title"
                  placeholder="Title"
                  outlined
                ></v-text-field>
              </v-col>

              <v-col cols="2" md="12">
                <v-textarea
                  outlined
                  name="input-7-4"
                  label="Description"
                  
                ></v-textarea>
              </v-col>

              
              
              
              
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>