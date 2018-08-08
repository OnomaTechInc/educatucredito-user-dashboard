<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container pl-3 pr-3>
          <v-card flat>
            <v-flex xs12 sm12 md12 lg12 p-5 text-center>
              <p>Welcome note:</p>
              <p>Lorem ipsum dolor set amet</p>
              <p>Thank you!</p>
            </v-flex>
            <v-card-title>
              <v-flex xs12 sm12 md12 lg6>
                <video-player
                  class="video-player-box"
                  ref="videoPlayer"
                  :options="playerOptions"
                  :playsinline="true"
                >
                </video-player>
              </v-flex >
              <v-flex xs12 sm12 md12 lg6>
                <iframe src="https://www.financialeducationservices.com/AgentEnroll.aspx?rid=kfernandez"></iframe>
              </v-flex>
            </v-card-title>
          </v-card>
          <v-divider></v-divider>
          <v-card flat>
            <v-card-title>
              <h3>News</h3>
            </v-card-title>
            <v-card-text>
              <v-container
                fluid
                grid-list-lg
              >
                <v-layout row wrap>
                  <v-flex xs12 sm4>
                    <v-card color="blue-grey darken-2" class="white--text">
                      <v-card-title primary-title>
                        <div class="headline">Unlimited music now</div>
                        <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
                      </v-card-title>
                      <v-card-actions>
                        <v-btn flat dark>Read more</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-flex>

                  <v-flex xs12 sm4>
                    <v-card color="cyan darken-2" class="white--text">
                      <v-layout>
                        <v-flex xs5>
                          <v-card-media
                            src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                            height="125px"
                            contain
                          ></v-card-media>
                        </v-flex>
                        <v-flex xs7>
                          <v-card-title primary-title>
                            <div>
                              <div class="headline">Supermodel</div>
                              <div>Foster the People</div>
                              <div>(2014)</div>
                            </div>
                          </v-card-title>
                        </v-flex>
                      </v-layout>
                      <v-divider light></v-divider>
                      <v-card-actions class="pa-3">
                        <v-btn flat dark>Read more</v-btn>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-flex>

                  <v-flex xs12 sm4>
                    <v-card color="purple" class="white--text">
                      <v-layout row>
                        <v-flex xs7>
                          <v-card-title primary-title>
                            <div>
                              <div class="headline">Halycon Days</div>
                              <div>Ellie Goulding</div>
                              <div>(2013)</div>
                            </div>
                          </v-card-title>
                        </v-flex>
                        <v-flex xs5>
                          <v-card-media
                            src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                            height="125px"
                            contain
                          ></v-card-media>
                        </v-flex>
                      </v-layout>
                      <v-divider light></v-divider>
                      <v-card-actions class="pa-3">
                        <v-btn flat dark>Read more</v-btn>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>
        </v-container>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background: #fff;
  margin: 0px -23px 20px -23px;
  padding: 0px 20px 0 20px;
  width: 100%;
}
h2.header {
  background: #fff;
  margin: -23px -23px 20px -23px;
  padding: 20px;
}
.content--wrap .container {
  background: #f5f5f5;
}
.content-container {
  padding: 20px;
  background: #fff;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<script>
  // import axios from 'axios'
  // import {uuid} from 'vue-uuid'
  import 'video.js/dist/video-js.css'
  import { videoPlayer } from 'vue-video-player'
  export default {
    data () {
      return {
        playerOptions: {
          // videojs options
          muted: false,
          fluid: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: 'video/mp4',
            src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
          }]
        }
      }
    },
    created () {
    },
    watch: {
    },
    methods: {
    },
    components: {
      videoPlayer
    }
  }
</script>
