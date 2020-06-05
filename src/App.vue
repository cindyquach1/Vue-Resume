<template>
  <div id="app">
    <AccordionVue id="AV"></AccordionVue>
    <router-view/>
    <!-- <LAData></LAData> -->
  </div>
</template>

<script>
import AccordionVue from './components/Accordion'
// import LAData from './components/LAData'

export default {
  name: 'app',
  components: {
    'AccordionVue': AccordionVue,
    // 'LAData' : LAData
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

#AV {
  display: inline-block;
}
</style>
