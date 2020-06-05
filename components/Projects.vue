<template>
  <div>
    <h1>Projects</h1>
    <TrackerStacker />   
    <StarFit />
    <Warehouse />
  </div>
</template>

<script>
import TrackerStacker from './TrackerStacker'
import StarFit from './StarFit'
import Warehouse from './Warehouse'

export default {
  name: 'Projects',
  components: {
    'TrackerStacker' : TrackerStacker,
    'StarFit' : StarFit,
    'Warehouse' : Warehouse,
  }
}
</script>
<style>
</style>