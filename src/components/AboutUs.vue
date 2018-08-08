<template>
  <v-container fluid id="aboutUs">
    <header class="mainHeader">
      <div class="container">
          <div class="heading text-center">
              <h3 class="text-uppercase" v-html="translationText.heading"></h3>
              <span class="lead" v-html="translationText.lead"></span>
          </div>
      </div>
    </header>
    <section class="aboutContent">
      <div class="container text-center">
        <div class="desc">
          <p v-html="translationText.aboutp1"></p>
          <p v-html="translationText.aboutp2"></p>
          <p v-html="translationText.aboutp3"></p>
          <p v-html="translationText.aboutp4"></p>   
        </div>
        <div class="pns">
          <h3 class="textOrange" v-html="translationText.aboutp5"></h3>
          <ul>
            <li><span v-html="translationText.list1"></span></li>
            <li><span v-html="translationText.list2"></span></li>
            <li><span v-html="translationText.list3"></span></li>
            <li><span v-html="translationText.list4"></span></li>
            <li><span v-html="translationText.list5"></span></li>
            <li><span v-html="translationText.list6"></span></li>
            <li><span v-html="translationText.list7"></span></li>
            <li><span v-html="translationText.list8"></span></li>
            <li><span v-html="translationText.list9"></span></li>
            <li><span v-html="translationText.list10"></span></li>
            <li><span v-html="translationText.list11"></span></li>
            <li><span v-html="translationText.list12"></span></li>
          </ul>
          <p v-html="translationText.aboutp6"> </p>
        </div>
      </div>
    </section>
  </v-container>
</template>





<script>
  // import {uuid} from 'vue-uuid'
  // import axios from 'axios'
  // import jQuery from 'jquery'
  // window.$ = window.jQuery = jQuery
  export default {
    data () {
      return {
        translationText: [],
        dialog: true
      }
    },
    created () {
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
      translation (val) {
        if (val === 'en') {
          this.translationText = {
            heading: 'about us',
            lead: 'We are beyond one time credit repair.',
            aboutp1: 'Our team is dedicated to helping you develop a healthier relationship with your credit. Our main focus and objective is you, your situation, your history and your willingness to make a change in your financial life for you and your family. We want to encourage you to make a good lifestyle change that can give you the key to your financial dreams.',
            aboutp2: 'Over a decade in business, we have helped thousands of customers. We maintain a flawless record with the BBB. Our programs are satisfaction guaranteed or your money back. We simplify methods to help clients achieve a good credit score, repair and fix the the lower credit scores.',
            aboutp3: 'We are not just here to fix your credit. We will completely evaluate your credit reports, educate, assist and help you decide what’s the best option to ensure the fastest and most efficient results.',
            aboutp4: 'A credit score is not just a number; It is a lifestyle. We will help you achieve a good financial lifestyle. Our company of financial experts believes that we can make a significant change in your life',
            aboutp5: 'Our Product and Services we offer you',
            list1: 'Credit restoration',
            list2: 'Positive credit generator',
            list3: 'Credit lawyer',
            list4: 'Smart credit',
            list5: 'Debt Zero',
            list6: 'Lifelock',
            list7: 'Financial blockade',
            list8: 'Value of life insurance',
            list9: 'Mycare Plan',
            list10: 'Shopping with discount',
            list11: 'YFL Family Mint',
            list12: 'Discount card Rx',
            aboutp6: '<a href=#/register>REGISTER NOW</a> AND SPEAK TO OUR FRIENDLY FINANCIAL CONSULTANTS SO THAT YOU MAY ACHIEVE FINANCIAL FREEDOM!'
          }
        } else if (val === 'es') {
          this.translationText = {
            heading: 'SOBRE NOSOTROS',
            lead: 'Estamos más allá de la reparación de crédito por única vez.',
            aboutp1: 'Nuestro equipo está dedicado a ayudarlo a desarrollar una relación más saludable con su crédito. Nuestro enfoque y objetivo principal es usted, su situación, su historia y su disposición a realizar un cambio en su vida financiera para usted y su familia. Queremos alentarlo a hacer un buen cambio de estilo de vida que pueda darle la clave para sus sueños financieros.',
            aboutp2: 'Más de una década en los negocios, hemos ayudado a miles de clientes. Mantenemos un registro impecable con BBB. Nuestros programas tienen satisfacción garantizada o le devolvemos su dinero. Simplificamos los métodos para ayudar a los clientes a lograr un buen puntaje de crédito, reparar y corregir los puntajes de crédito más bajos.',
            aboutp3: 'No solo estamos aquí para arreglar su crédito. Evaluaremos completamente sus informes de crédito, lo educaremos, lo asistiremos y lo ayudaremos a decidir cuál es la mejor opción para garantizar los resultados más rápidos y eficientes.',
            aboutp4: 'Un puntaje de crédito no es solo un número; es un estilo de vida. Lo ayudaremos a lograr un buen estilo de vida financiero. Nuestra compañía de expertos financieros cree que podemos hacer un cambio significativo en su vida.',
            aboutp5: 'Nuestro producto y servicios que le ofrecemos:',
            list1: 'Restauración de crédito',
            list2: 'Generador de crédito positivo',
            list3: 'Abogado de crédito',
            list4: 'Crédito inteligente',
            list5: 'Debt Zero',
            list6: 'Lifelock',
            list7: 'Bloqueo financiero',
            list8: 'Valor del seguro de vida',
            list9: 'Plan Mycare',
            list10: 'Compras con descuento',
            list11: 'Yfl Family Mint',
            list12: 'Tarjeta de descuento Rx',
            aboutp6: '<a href=#/register>¡REGÍSTRESE AHORA</a> Y HABLE CON NUESTROS AMIGOS CONSULTANTES FINANCIEROS PARA QUE PUEDA ALCANZAR LA LIBERTAD FINANCIERA!'
          }
        }
      }
    },
    components: {
    }
  }
  // jQuery(document).ready(function () {
  //   jQuery('.slider').bxSlider({
  //     adaptiveHeight: true
  //   })
  //   // var video = Wistia.api('h4z90hkwgl')
  //   // video.bind('end', function() {
  //   // })
  // })
</script>




<style scoped>

  #mainNav {
    opacity: 1 !important;
    padding-bottom: 40px !important;
    position: relative !important;
  }
  .section2 {
    height: auto !important;
    padding-bottom: 40px !important;
  }
</style>