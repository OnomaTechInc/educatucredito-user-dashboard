<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-card class="header" flat>
          <v-card-title>
            <h2>Videos</h2>
          </v-card-title>
        </v-card>
        <v-container pl-3 pr-3>
          <v-card flat>
            <v-card-title>
              <v-flex xs12 sm12 md4 lg4>
                <v-list two-line>
                  <v-subheader>
                    Playlist
                  </v-subheader>

                  <template v-for="item in items">
                    <v-list-tile
                      :key="item.title"
                      @click="loadVideo(item)"
                    >
                      <v-list-tile-content>
                        <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </template>
                </v-list>
              </v-flex>
              <v-flex xs12 sm12 md8 lg8>
                <video-player
                  class="video-player-box"
                  ref="videoPlayer"
                  :options="playerOptions"
                  :playsinline="true"
                >
                </video-player>
              </v-flex>
            </v-card-title>
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
  import axios from 'axios'
  // import {uuid} from 'vue-uuid'
  import jQuery from 'jquery'
  import 'video.js/dist/video-js.css'
  import { videoPlayer } from 'vue-video-player'
  window.$ = window.jQuery = jQuery
  export default {
    data () {
      return {
        items: [],
        playerOptions: {
          // videojs options
          muted: false,
          fluid: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: 'video/mp4',
            src: 'http://7xkwa7.media1.z0.glb.clouddn.com/sample_video_L'
          }]
        }
      }
    },
    created () {
      var dis = this
      axios.get(`${window.apiLink}videos/list`).then(function (response) {
        for (var x = 0; x < response.data.length; x++) {
          dis.items.push({
            title: response.data.result[x].title,
            subtitle: response.data.result[x].description,
            player: {
              muted: false,
              fluid: true,
              language: 'en',
              playbackRates: [0.7, 1.0, 1.5, 2.0],
              sources: [{
                type: 'video/mp4',
                src: response.data.result[x].video
              }]
            }
          })
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    watch: {
    },
    methods: {
      loadVideo (val) {
        // console.log(val)
        this.playerOptions = val.player
      }
    },
    components: {
      videoPlayer
    }
  }
</script>
