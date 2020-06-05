<template>
  <vue-accordion :items="items" :accordionClass="acClass" :styles="styles"></vue-accordion>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          text: '',
          url: '#/Home',
          image: 'https://unsplash.it/650/350/?image=534'
        },
        {
          title: 'About',
          text: '',
          url: '#/About',
          image: 'https://unsplash.it/650/350/?image=821'
        },
        {
          title: 'Projects',
          text: '',
          url: '#/Projects',
          image: 'https://unsplash.it/650/350/?image=445'
        },
        {
          title: 'Interactive',
          text: '',
          url: '#/Interactive',
          image: 'https://unsplash.it/650/350/?image=96'
        },
        {
          title: 'Contact',
          text: '',
          url: '#/Contact',
          image: 'https://unsplash.it/650/350/?image=668'
        },
      ]
    }
  }
}
</script>