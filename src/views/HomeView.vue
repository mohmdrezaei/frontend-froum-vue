<template>
<v-container
class="mt-4"
>
  <v-row
  justify="center"
  content="center"
  >
    <v-col
    cols="12"
    md="6"
    >
      <v-card>
        <v-card-title>
            <router-link to="/thread/laravel+error" class="text-decoration-none black--text">
              <h2>laravel error</h2>
            </router-link>
        </v-card-title>

        <v-card-text>
          <v-row >
            <v-col>
              <p class="darken-3">mohammad rezaei</p>
            </v-col>
            <v-col class="text-right">
              <p class="darken-3">2022/12/22 22:30</p>
            </v-col>
          </v-row>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum dignissimos harum iste labore nostrum nulla placeat porro quidem voluptates!</p>

        </v-card-text>
      </v-card>
    </v-col>

  </v-row>

</v-container>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
    },
  }
</script>
