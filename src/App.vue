<template>
  <v-app>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <v-main>
      <v-container>
        <!-- <password-with-meter></password-with-meter> -->
        <password-with-meter-vee-validate></password-with-meter-vee-validate>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import PasswordWithMeter from './components/PasswordWithMeter.vue'
import PasswordWithMeterVeeValidate from './components/PasswordWithMeterVeeValidate.vue'

export default {
  name: 'App',
  components: {
    PasswordWithMeterVeeValidate
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
