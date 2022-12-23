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
    v-for="(thread,index) in threads"  :key="index"
    >
      <v-card>
        <v-card-title>
            <router-link :to="'/thread/'+thread.slug" class="text-decoration-none black--text">
              <h2>{{thread.title}}</h2>
            </router-link>
        </v-card-title>

        <v-card-text>
          <v-row >
            <v-col>
              <p class="darken-3">{{ thread.user.name }}</p>
            </v-col>
            <v-col class="text-right">
              <p class="darken-3">{{thread.created_at}}</p>
            </v-col>
          </v-row>

        </v-card-text>
      </v-card>
    </v-col>

  </v-row>

</v-container>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import {threadsListRequest} from "../../requests/Threads";

  export default {
    name: 'Home',

    components: {
      HelloWorld,
    },

    data(){
      return{
        threads:[]
      }
    },

    mounted() {
      threadsListRequest.then(res => {
        this.threads = res.data.data
      }).catch(err =>{
        console.log(err)
        if (err.response.statusCode !== 200){
          alert('Failed To Load Data!')
        }
      })
    }
  }
</script>
