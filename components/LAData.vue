<template>
  <div>
    <h3> {{ info.data.time }} </h3>
    <h3> {{ info.data.time.updated }} </h3>
    <h3> {{ info.data.time.updatedISO }} </h3>
    <h3> {{ info.data.time.updateduk }} </h3>
  </div>
</template>

<script>
const axios = require('axios').default

export default {
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }
}
</script>