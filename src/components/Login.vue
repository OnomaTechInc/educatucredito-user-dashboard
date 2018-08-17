<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
            <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-btn type="submit" color="primary" @click="openFbLoginDialog">FB Login</v-btn>
            <v-form @submit.prevent="login">
                <v-card-text>
                    <v-text-field 
                      prepend-icon="person" 
                      name="login" 
                      label="Login" 
                      id="username"
                      type="text"
                      :error="error"
                      :error-messages="errorMessage"
                      v-model="username"
                      autocorrect="off"
                      autocapitalize="none"
                    >
                    </v-text-field>
                    <v-text-field 
                      prepend-icon="lock" 
                      name="password" 
                      label="Password" 
                      id="password" 
                      type="password" 
                      v-model="pass" 
                      :error="error"
                    ></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn type="submit" color="primary">Login</v-btn>
                </v-card-actions>
            </v-form>
            <div class="below_box" align="center">
              <a href="/user/#/register">New user?Create your Account</a>
              <a href="/user/#/forgotpassword" align="right">Forget Password?</a>
            </div>
        </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.below_box a{
  position: absolute;;
}
.below_box a:first-child{
  left: 0;
}
.below_box a:last-child{
  right: 0;
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
.below_box {
  position: relative;
  top: 20px;
}
</style>
<script>
import axios from 'axios'
import {uuid} from 'vue-uuid'
export default {
  data () {
    return {
      username: '',
      pass: '',
      error: false,
      errorMessage: []
    }
  },
  methods: {
      register (data) {
        console.log(data)
      var d = this
      axios.post(`${window.apiLink}register`, {
        email: data.email,
        name: data.name,
        role: 'Customer',
        fb_id: data.id,
        api_key: data.token
      }).then(function (response) {
        if (response.data.status === 'error') {
          d.$emit('receiveAlertMessage', {
            body: response.data.message,
            type: 'error',
            id: uuid.v4()
          })
        } else if (response.data.status === 'validation_error') {
          d.error = true
          // console.log(response.data.message)
          d.errorMessage = response.data.message
        } else {
          // localStorage.setItem('session', JSON.stringify(response.data))
          // d.$emit('setRoleName', response.data)
          // d.$router.replace({ name: 'Das' })
          localStorage.setItem('session', JSON.stringify(profile.token))
          d.$router.replace({ name: 'Dashboard'})
        }
      }).catch(function (error) {
        d.$emit('receiveAlertMessage', {
          body: error,
          type: 'error',
          id: uuid.v4()
        })
      })
    },
    openFbLoginDialog () {
      FB.login(this.checkLoginState, { scope: 'email' })
    },
    checkLoginState: function (response) {
    var account = this
      if (response.status === 'connected') {
        FB.api('/me', { fields: 'name,email,id' }, function(profile) {
          var info = {
            token: response.authResponse.accessToken,
            name: profile.name,
            email:profile.email,
            id: profile.id
          }
          account.register(info)
        });
      } else if (response.status === 'not_authorized') {
        // the user is logged in to Facebook, 
        // but has not authenticated your app
      } else {
        // the user isn't logged in to Facebook.
      }
    },
    login () {
      var d = this
      axios.get(`${window.apiLink}login`, {
        params: {
          email: this.username,
          password: this.pass
        }
      }).then(function (response) {
        if (response.data.status === 'error') {
          d.$emit('receiveAlertMessage', {
            body: response.data.message,
            type: 'error',
            id: uuid.v4()
          })
        } else {
          localStorage.setItem('session', JSON.stringify(response.data))
          d.$emit('setRoleName', response.data)
          if (d.$route.query.redirect !== undefined) {
            d.$router.replace({ path: d.$route.query.redirect })
          } else {
            d.$router.replace({ name: 'Dashboard' })
          }
        }
      }).catch(function (error) {
        if (error.response.status !== undefined && error.response.status === 422) {
          d.error = true
          d.errorMessage = error.response.data.username
        } else {
          d.$emit('receiveAlertMessage', {
            body: error.response.statusText,
            type: 'error',
            id: uuid.v4()
          })
        }
      })
    }
  }
}
</script>