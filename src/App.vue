<template>
  <v-app light>
    <v-content v-if="$route.meta.plainLayout">
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="/">
            <span><img class="logo" src="@/assets/top-logo.png" /></span>
            <span class="heading">Educa Tu Credito</span>
          </a>
          <div class="contactdetails">
            <a href="tel:813-444-5539"><v-icon>phone</v-icon> <span>813-444-5539</span></a>
            <a href="mailto:info@educatucredito.com"><v-icon>mail</v-icon> <span>info@educatucredito.com</span></a>
          </div>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fa fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="https://www.educatucredito.com/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="https://www.educatucredito.com/about-us">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="https://blog.educatucredito.com">Blogs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="https://www.educatucredito.com/why-choose-us">Why Choose Us</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="https://account.educatucredito.com/login">Login / Sign Up</a>
              </li>
            </ul>
          </div>
          <!-- <div class="changelang">
            <v-icon style="vertical-align: middle">language</v-icon>
            <a href="#" @click="setDefaultLanguage('en')">En</a> | <a href="#" @click="setDefaultLanguage('es')">Es</a>
          </div> -->
          <!-- <v-icon>language</v-icon>  -->
          <!-- <v-btn-toggle v-model="toggle" mandatory flat>
              <v-btn flat @click="setDefaultLanguage('en')">
                EN
              </v-btn>
              <v-btn flat @click="setDefaultLanguage('es')">
                ES
              </v-btn>
          </v-btn-toggle> -->
        </div>
      </nav>
      <div class="alert_container">
        <v-alert 
          class="notification" 
          v-if="alertNotifications"
          value="showAlertNotification" 
          v-for="alertNotification in alertNotifications" 
          :key="alertNotification.id" 
          transition="fade-transition" 
          :type="alertNotification.type"
        >
          {{ alertNotification.body }}
          <a class="alert__dismissible" @click="closeAlert(alertNotification.id)"><i aria-hidden="true" class="icon icon--right material-icons">cancel</i></a>
        </v-alert>
      </div>
      <router-view @setRoleName="processNameRole" @receiveAlertMessage="alertMessage = $event"/>
      <ConfirmDialog/>
    </v-content>
    <div v-if="!$route.meta.plainLayout">
      <v-navigation-drawer
        fixed
        :mini-variant="miniVariant"
        :clipped="clipped"
        v-model="drawer"
        app
      >
        <v-toolbar light flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile avatar to="/profile">
              <v-list-tile-avatar size="50" color="red">
                <img v-if="userImage" :src="userImage" >
                <span class="white--text headline" v-else> {{ initial }} </span>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ name }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list>
          <v-list-tile
            value="true"
            v-for="(item, i) in items"
            :key="i"
            exact
            :to="item.link"
          >
            <v-list-tile-action>
              <v-icon light v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app :clipped-left="clipped">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <v-btn icon slot="activator">
            <v-badge color="orange" overlap>
              <!-- <span class="white--text" slot="badge">3</span> -->
                <v-icon light>notifications</v-icon>
            </v-badge>
          </v-btn>
          <v-list>
            <v-list-tile v-for="item in notifItems" :key="item.title">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn flat @click="logout">
            <v-icon light small>exit_to_app</v-icon>
            Log out
          </v-btn>
      </v-toolbar>
      <v-content>
        <div class="alert_container">
          <v-alert 
            class="notification" 
            v-if="alertNotifications"
            value="showAlertNotification" 
            v-for="alertNotification in alertNotifications" 
            :key="alertNotification.id" 
            transition="fade-transition" 
            :type="alertNotification.type"
          >
            {{ alertNotification.body }}
            <a class="alert__dismissible" @click="closeAlert(alertNotification.id)"><i aria-hidden="true" class="icon icon--right material-icons">cancel</i></a>
          </v-alert>
        </div>
        <ConfirmDialog/>
        <router-view @setRoleName="processNameRole" @receiveAlertMessage="alertMessage = $event"></router-view>
      </v-content>
      <v-navigation-drawer
        right
        temporary
        v-model="rightDrawer"
        clipped
        fixed
      >
        <v-list>
          <v-list-tile @click="right = !right">
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-footer light :fixed="fixed" app>
          <span class="pl-2">&copy; 2018</span>
      </v-footer>
    </div>
    <v-speed-dial
      id="mobilebtn"
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right2"
      :left="left"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
    >
      <v-btn
        slot="activator"
        v-model="fab"
        color="blue darken-2"
        dark
        fab
      >
        <v-icon>contact_support</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="green"
      >
        <a href="tel:813-444-5539">
          <v-icon>call</v-icon>
        </a>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
      >
        <a href="mailto:info@educatucredito.com">
          <v-icon>email</v-icon>
        </a>
      </v-btn>
    </v-speed-dial>
    <div id="btnSignout"></div>
  </v-app>
</template>

<script>
  import ConfirmDialog from './components/ConfirmDialog'
  import Vue from 'vue'
  import jQuery from 'jquery'
  window.$ = window.jQuery = jQuery
  export default {
    data () {
      return {
        notifItems: [{ title: 'Nothing yet.' }],
        sheet: true,
        dialog: false,
        direction: 'top',
        fab: false,
        fling: false,
        hover: false,
        tabs: null,
        top: false,
        bottom: true,
        left: true,
        right2: false,
        transition: 'slide-y-transition',
        link: [],
        dialogLanguage: false,
        language: 'es',
        fixed: true,
        alertMessage: '',
        showAlertNotification: false,
        alertNotifications: [],
        clipped: false,
        drawer: true,
        cordova: Vue.cordova,
        items: [],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Educa Tu Credito',
        name: 'John Wick',
        userImage: 'https://randomuser.me/api/portraits/men/41.jpg',
        toggle: 1
      }
    },
    created () {
      let session = JSON.parse(window.localStorage.getItem('session'))
      // this.notifItems = [
      //   {
      //     title: 'Welcome!'
      //   }, {
      //     title: 'Hey its meee!'
      //   }, {
      //     title: 'the quick brown fox!'
      //   }
      // ]
      // console.log(session)
      if (session !== undefined && session !== null) {
        this.name = session.name
        this.userImage = session.user_image
      }
      this.getMenu()
      var self = this
      this.cordova.on('deviceready', () => {
        self.onDeviceReady()
      })
      // this.setDefaultLanguage(this.language)
      var defaultLang = window.localStorage.getItem('language')
      if (defaultLang !== null && defaultLang !== undefined) {
        this.language = defaultLang
        this.setDefaultLanguage(this.language)
      } else {
        this.dialog = true
      }
    },
    watch: {
      alertMessage (val) {
        this.alertNotifications.push(val)
        setTimeout(() => (this.closeAlert(val.id)), 10000)
      }
    },
    computed: {
      initial () {
        if (this.name) {
          return this.name.charAt(0)
        } else {
          return ''
        }
      }
    },
    methods: {
      setDefaultLanguage (val) {
        if (val === 'en') {
          this.language = 'en'
          this.link = {
            home: 'Home',
            aboutus: 'About Us',
            whyus: 'Why Choose Us',
            login: 'Login / Sign Up'
          }
        } else {
          this.language = 'es'
          this.link = {
            home: 'Inicio',
            aboutus: 'Sobre Nosotros',
            whyus: 'Por Qué Elegirnos',
            login: 'Iniciar Sesión / Regístrate'
          }
        }
        // this.dialogLanguage = false
        // this.sheet = false
        window.localStorage.setItem('language', val)
      },
      getMenu () {
        this.items = [
          {
            icon: 'dashboard',
            title: 'Dashboard',
            link: '/dashboard'
          },
          {
            icon: 'account_balance',
            title: 'My Account',
            link: '/myaccount'
          },
          {
            icon: 'live_tv',
            title: 'Videos',
            link: '/videos'
          },
          {
            icon: 'assignment_ind',
            title: 'Agents',
            link: '/agents'
          },
          // {
          //   icon: 'attach_file',
          //   title: 'Files',
          //   link: '/files'
          // },
          {
            icon: 'account_circle',
            title: 'Profile',
            link: '/profile'
          }
        ]
      },
      logout () {
        var d = this
        this.$store.dispatch('confirmer/ask', {
          title: 'Confirm Logout',
          body: 'Are you sure you want to logout?'
        }).then(confirmation => {
          if (confirmation) {
            this.session = []
            window.localStorage.setItem('session', '[]')
            window.$('#btnSignout').click()
            setTimeout(function () {
              d.$router.replace({ name: 'Logout' })
            }, 2000)
          }
        })
      },
      processNameRole (val) {
        this.name = val.name
        this.userImage = val.user_image
      },
      closeAlert (val) {
        for (var x = 0; x < this.alertNotifications.length; x++) {
          if (val === this.alertNotifications[x].id) {
            this.alertNotifications.splice(x, 1)
          }
        }
      },
      onDeviceReady: function () {
        // Handle the device ready event.
        this.cordova.on('pause', this.onPause, false)
        this.cordova.on('resume', this.onResume, false)
        if (this.cordova.device.platform === 'Android') {
          document.addEventListener('backbutton', this.onBackKeyDown, false)
        }
      },
      onPause () {
        // Handle the pause lifecycle event.
        console.log('pause')
      },
      onResume () {
        // Handle the resume lifecycle event.
        // SetTimeout required for iOS.
        setTimeout(function () {
          console.log('resume')
        }, 0)
      },
      onBackKeyDown () {
        // Handle the back-button event on Android. By default it will exit the app.
        navigator.app.exitApp()
      }
    },
    components: {
      ConfirmDialog
    }
  }
</script>

<style>
@media only screen and (max-width: 767px) {
  .v-overlay.v-overlay--active {
    z-index: 1;
  }
}
  .container {
    padding: 0;
  }
  em {
    font-size: small
  }
	body {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
	}
  .footer{ /* Apply this to v-bottom-nav if necessary. */
    margin-bottom: constant(safe-area-inset-bottom);
    margin-bottom: env(safe-area-inset-bottom);
  }
  .v-badge__badge {
    top: -12px !important;
    right: -10px !important;
  }
  .alert_container {
    position: fixed;
    right: 0px;
    max-width: 50%;
    z-index: 9999
  }
  .loadingIcon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .logo {
    width: 82px;
    margin-top: -30px;
  }
  #mainNav .logo {
    margin-top: -18px;
  }
  #mainNav .heading {
    line-height: 1.8;
  }
  
contactdetails .v-icon{
  display: inline-block;
  font-weight: 700;
  vertical-align: middle;
  text-decoration: none;
  color: white;
}
contactdetails .span{
  display: inline-block;
  font-weight: 700;
  vertical-align: middle;
  text-decoration: none;
  color: white;
}
a:hover {
  text-decoration: none;
}

</style>
<style scoped>
  .list__tile__title {
    color: #303030
  }
</style>