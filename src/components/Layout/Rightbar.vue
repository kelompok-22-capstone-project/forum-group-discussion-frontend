<template>
    <v-navigation-drawer v-model="drawer" clipped app right permanent>
      <v-list class="ml-4 mr-4 mt-6">
          <h3>Ranking User</h3>
        <v-list-item v-for="name in links" :key="name.name" link>
          <v-list-item-content>
            <v-list-item-title>{{name.id}}.{{ name.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  name:'RightBar',
  data: () => ({
    drawer: true,
    clipped: true,
    fixed: true,
    links: [{name:'jance', id:'1'}, {name:'janve',id:'2'}, {name:'janeg',id:'3'}, {name:'janet',id:'4'}, {name:'janre',id:'5'}, {name:'janse',id:'6'}, {name:'janed',id:'7'}],
  }),
};
</script>

<style></style>
