<template>
  <v-container fluid id="dashboard">
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container pl-3 pr-3>
          <v-card flat>

            <v-flex xs12 sm12 md12 lg12 text-center>
                <h1 class="heading">WELCOME!</h1>
            </v-flex>
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
                    color="gray"
                    size="108"
                    style="background: #fff"
                    light
                  >
                    <!-- <img> -->
                  <span class="black--text"><v-icon size="108">account_circle</v-icon></span>
                  </v-avatar>
                  <v-flex class="profileInfo">
                    <h3>Agent Name</h3>
                    <ul>
                      <li>Agent email</li>
                      <li>Agent Contact</li>
                      <li>Agent Location</li>
                    </ul>
                  </v-flex>  
                </v-card-title>
                <v-divider></v-divider>
                <v-card-title>
                  <v-flex  xs12>
                    <v-card-title>
                      <h3>Video</h3>
                    </v-card-title>
                  </v-flex>
                  <v-flex xs12 sm12 md6 lg6 class="videoHolder">
                    <video-player
                      class="video-player-box"
                      ref="videoPlayer"
                      :options="playerOptions"
                      :playsinline="true"
                    >
                    </video-player>
                    <v-flex class="desc" xs12>
                      <h3 classs="text-underline">{{ vidTitle }}</h3>
                      <p>{{ vidDesc }}</p>
                    </v-flex>
                  </v-flex >
                  <v-flex xs12 sm12 md6 lg6 class="videoHolder">
                    <video-player
                      class="video-player-box"
                      ref="videoPlayer"
                      :options="playerOptions"
                      :playsinline="true"
                    >
                    </video-player>
                    <v-flex class="desc" xs12>
                      <h3 classs="text-underline">{{ vidTitle }}</h3>
                      <p>{{ vidDesc }}</p>
                    </v-flex>
                  </v-flex >
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
                  <v-flex
                    xs12 sm12 md6 lg4 
                    v-for="item in newsItems"
                  >
                    <v-card color="gray lighten-5" class="">
                      <v-layout row>
                        <v-flex xs7>
                          <v-card-title primary-title>
                            <div>
                              <div class="headline">{{ item.headline }}</div>
                              <div class="subhead">{{ item.subheader }}</div>
                            </div>
                          </v-card-title>
                        </v-flex>
                        <v-flex xs5 class="newsPic">
                          <img src="" alt="">
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex xs12 >
                          <p class="shortDesc">{{ item.excerpt }}</p>
                        </v-flex>
                      </v-layout>
                      <v-divider light></v-divider>
                      <v-card-actions class="pa-3">
                        <v-btn flat dark class="primary" @click="fetchNews(item.id)">Read more</v-btn>
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
    <v-dialog v-model="readPopup" max-width="500px">
      <v-card flat>
        <v-card-title>
          <h3>{{ newsHeadline }}</h3>
          <p><strong>{{ newsSubheader }}</strong></p>
        </v-card-title>
        <v-card-text v-html="newsContent">
        </v-card-text>
      </v-card>
    </v-dialog>
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
.headline{
  width: 162px;
  text-overflow:ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.subhead{
  width: 162px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.newsPic img{
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ddd;
}
.shortDesc{
  padding: 0 16px;
  height: 95px;
  overflow: hidden;
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
        readPopup: false,
        newsHeadline: '',
        newsSubheader: '',
        newsContent: '',
        // agentName: '',
        // agentEmail: '',
        // agentContact: '',
        // agentAddress: '',
        // agentAvatar: '',
        translationText: [],
        dialog: true,
        model: 'tab-profile',
        newsItems: [],
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
        vidTitle: '',
        vidDesc: '',
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
        // fetch user data and agent
        axios.get(`${window.apiLink}users/${d.session.id}`).then(function (response) {
          // console.log(response)
          // d.agentName = response.data.result[0].agent.name
          // d.agentEmail = response.data.result[0].agent.email
          // d.agentContact = response.data.result[0].agent.contact_number
          // d.agentAddress = response.data.result[0].agent.location
          // d.agentAvatar = response.data.result[0].agent.user_image
          d.loading = false
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
        // fetch video
        axios.get(`${window.apiLink}videos/`).then(function (response) {
          d.vidTitle = response.data.result[0].title
          d.vidDesc = response.data.result[0].description
          d.playerOptions.sources.src = response.data.result[0].video
          d.loading = false
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
        // fetch news
        axios.get(`${window.apiLink}news/list`).then(function (response) {
          var itm = []
          for (var i = 0; i < response.data.result.length; i++) {
            itm.push({
              id: response.data.result[i].id,
              headline: response.data.result[i].headline,
              subheader: response.data.result[i].subheader,
              excerpt: response.data.result[i].excerpt,
              content: response.data.result[i].content
            })
            d.newsItems = itm
          }
          d.loading = false
        }).catch(function (error) {
          console.log(error)
          d.$emit('receiveAlertMessage', {
            body: error.response.statusText,
            type: 'error',
            id: uuid.v4()
          })
          d.loading = false
        })
      },
      fetchNews (val) {
        var d = this
        axios.get(`${window.apiLink}news/${val}`).then(function (response) {
          d.newsHeadline = response.data.result[0].headline
          d.newsSubheader = response.data.result[0].subheader
          d.newsContent = response.data.result[0].content
          d.loading = false
          d.readPopup = true
        }).catch(function (error) {
          console.log(error)
          d.$emit('receiveAlertMessage', {
            body: error.response.statusText,
            type: 'error',
            id: uuid.v4()
          })
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
