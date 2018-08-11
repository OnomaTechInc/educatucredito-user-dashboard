<template>
  <v-container fluid id="dashboard">
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container pl-3 pr-3>
          <v-card flat>
            <v-flex xs12 sm12 md12 lg12 text-center>
                <h1 class="heading">WELCOME!</h1>
            </v-flex>
            <v-tabs 
              fixed-tabs 
              v-model="model"
            >
              <v-tab href="#tab-agent">Agent</v-tab>
              <v-tab href="#tab-register">Register</v-tab>
              <v-tab href="#tab-option">Option</v-tab>
            </v-tabs>
            <v-tabs-items
              v-model="model"
            >
              <v-tab-item
                id="tab-agent"
              >
                <v-card-title>
                  <v-avatar
                    class="float_atop"
                    slot="activator"
                    color="red"
                    size="108"
                    style="background: #fff"
                    light
                  >
                    <img
                      title="click here to change photo"
                      v-if="editedItem.avatar"
                      :src="editedItem.avatar"
                      alt=""
                    >
                  <span title="click here to upload photo" class="black--text" v-else><v-icon size="108">account_circle</v-icon></span>
                  </v-avatar>
                  <v-flex class="profileInfo">
                    <h3 v-if="editedItem.name" v-html="editedItem.name"></h3>
                    <h3 v-else>Name</h3>
                    <ul>
                      <li  v-if="editedItem.email" v-html="editedItem.email"></li>
                      <li  v-else>Email@email.com</li>
                      <li>019-932-132</li>
                      <li>2490 Lazy Tampa Florida USA</li>
                    </ul>
                  </v-flex>  
                </v-card-title>
                <v-divider></v-divider>
                <v-card-title>
                  <v-flex xs12 sm12 md6 lg4 class="videoHolder">
                    <v-card-title>
                    <h3>Video</h3>
                    </v-card-title>
                    <video-player
                      class="video-player-box"
                      ref="videoPlayer"
                      :options="playerOptions"
                      :playsinline="true"
                    >
                    </video-player>
                  </v-flex >
                  <v-flex class="desc" xs12 sm12 md6 lg8>
                    <h3 classs="text-underline">Lorem Ipsum</h3>
                    <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, dolorum nihil tenetur modi fugit soluta sunt facilis non doloribus iure obcaecati itaque aliquid magnam cupiditate enim fuga cum pariatur quam!"</p>
                  </v-flex>
                </v-card-title>
              </v-tab-item>

              <v-tab-item
                id="tab-register"
              >
                <iframe style="width: 100%; border: 0; min-height: 800px" src="https://www.financialeducationservices.com/AgentEnroll.aspx?rid=kfernandez"></iframe>
              </v-tab-item>
              <v-tab-item
                id="tab-option"
                style="min-height: 400px;"
              >
                <h2>Coming soon</h2>
              </v-tab-item>  
            </v-tabs-items>
          </v-card>
          <v-divider></v-divider>
          <v-card flat  class="news">
            <v-card-title>
              <h3>News</h3>
            </v-card-title>
            <v-card-text>
              <v-container
                fluid
                grid-list-lg
              >
                <v-layout row wrap>
                  <!-- <v-flex xs12 sm4>
                    <v-card color="blue-grey darken-2" class="white--text">
                      <v-card-title primary-title>
                        <div class="headline">Unlimited music now</div>
                        <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
                      </v-card-title>
                      <v-card-actions>
                        <v-btn flat dark>Read more</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-flex> -->
                  <v-flex xs12 sm12 md6 lg4>
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

                  <v-flex xs12 sm12 md6 lg4>
                    <v-card color="cyan darken-2" class="white--text">
                      <v-layout>
                        <v-flex xs7>
                          <v-card-title primary-title>
                            <div>
                              <div class="headline">Supermodel</div>
                              <div>Foster the People</div>
                              <div>(2014)</div>
                            </div>
                          </v-card-title>
                        </v-flex>
                        <v-flex xs5>
                          <v-card-media
                            src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                            height="125px"
                            contain
                          >
                        </v-card-media>
                        </v-flex>
                      </v-layout>
                      <v-divider light></v-divider>
                      <v-card-actions class="pa-3">
                        <v-btn flat dark>Read more</v-btn>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-flex>

                  <v-flex xs12 sm12 md6 lg4>
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

                  <v-flex xs12 sm12 md6 lg4>
                    <v-card color="cyan darken-2" class="white--text">
                      <v-layout>
                        <v-flex xs7>
                          <v-card-title primary-title>
                            <div>
                              <div class="headline">Supermodel</div>
                              <div>Foster the People</div>
                              <div>(2014)</div>
                            </div>
                          </v-card-title>
                        </v-flex>
                        <v-flex xs5>
                          <v-card-media
                            src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                            height="125px"
                            contain
                          >
                        </v-card-media>
                        </v-flex>
                      </v-layout>
                      <v-divider light></v-divider>
                      <v-card-actions class="pa-3">
                        <v-btn flat dark>Read more</v-btn>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-flex>

                  <v-flex xs12 sm12 md6 lg4>
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

                  <v-flex xs12 sm12 md6 lg4>
                    <v-card color="cyan darken-2" class="white--text">
                      <v-layout>
                        <v-flex xs7>
                          <v-card-title primary-title>
                            <div>
                              <div class="headline">Supermodel</div>
                              <div>Foster the People</div>
                              <div>(2014)</div>
                            </div>
                          </v-card-title>
                        </v-flex>
                        <v-flex xs5>
                          <v-card-media
                            src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                            height="125px"
                            contain
                          >
                        </v-card-media>
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
          <v-card flat class="site">
            <v-container fluid>
              <v-layout row wrap>
              <v-flex xs12 sm12 md4 text-center>
                <img
                  title="click here to change photo"
                  src="../../static/img/sitelogo.png"
                  alt=""
                  width="283"
                  height="225"
                >   
              </v-flex>
              <v-flex xs12 sm12 md8 class="infos">
                <h3>Educa tu Credito</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsam ducimus tempore ad aspernatur ratione, ipsum quam qui velit aperiam doloribus corporis possimus quo harum assumenda, maxime itaque dolorum cum.</p>
              </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-container>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-content{
  padding-top: 0 !important;
}
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
.formArea{
  padding:0 15px;
}
</style>
<script>
  import axios from 'axios'
  import {uuid} from 'vue-uuid'
  import 'video.js/dist/video-js.css'
  import { videoPlayer } from 'vue-video-player'
  export default {
    data () {
      return {
        translationText: [],
        dialog: true,
        model: 'tab-profile',
        items: [],
        editedItem: {
          name: '',
          email: '',
          company: '',
          position: ''
        },
        photoIsLoaded: false,
        loadPhoto: function (val) {
          var reader = new FileReader()
          var d = this
          reader.onload = function (event) {
            d.$parent.$parent.editedItem.avatar = event.target.result
          }
          reader.readAsDataURL(val)
          d.$parent.$parent.photoIsLoaded = true
        },
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
      this.initialize()
      this.translation(this.$parent.$parent.$parent.language)
      var d = this
      window._wq = window._wq || []
      // target our video by the first 3 characters of the hashed ID
      window._wq.push({
        id: 'h4z90hkwgl',
        onReady: function (video) {
          // on play, seek the video to 10 seconds, then unbind so it
          // only happens once.
          video.bind('end', function (t) {
            console.log('the video ended')
            d.dialog = true
            video.popover.hide()
          })
        }
      })
    },
    watch: {
      '$parent.$parent.$parent.language' (v) {
        this.translation(this.$parent.$parent.$parent.language)
      }
    },
    computed: {
    },
    methods: {
      initialize () {
        var d = this
        this.session = JSON.parse(localStorage.getItem('session'))
        axios.defaults.headers.common['Authorization'] = `bearer ${this.session.api_key}`
        axios.get(`${window.apiLink}users/${d.session.id}`).then(function (response) {
          // localStorage.setItem('session', JSON.stringify(response.data))
          // d.$emit('setRoleName', response.data)
          var items = []
          // for (var x = 0; x < response.data.result.length; x++) {
          items = {
            id: response.data.result[0].id,
            name: response.data.result[0].name,
            avatar: response.data.result[0].user_image,
            email: response.data.result[0].email,
            role: response.data.result[0].role,
            position: response.data.result[0].position,
            company: response.data.result[0].company
          }
          // }
          d.loading = false
          d.editedItem = items
        }).catch(function (error) {
          console.log(error)
          if (error.response !== undefined && error.response.status === 422) {
            d.error = true
            d.errorMessage = error.response.data.username
          } else {
            d.$emit('receiveAlertMessage', {
              body: error.response.statusText,
              type: 'error',
              id: uuid.v4()
            })
          }
          d.loading = false
        })
      },
      translation (val) {
        if (val === 'en') {
          this.translationText = {
          }
        } else if (val === 'es') {
          this.translationText = {
          }
        }
      }
    },
    components: {
      videoPlayer
    }
  }
</script>
