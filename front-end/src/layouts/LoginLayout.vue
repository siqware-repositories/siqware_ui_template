<template>
  <q-layout view="lHh Lpr fff" class="bg-grey-1">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
  export default {
    name: 'GooglePhotosLayout',
    data () {
      return {
        leftDrawerOpen: false,
        thumbStyle: {
          right: '2px',
          borderRadius: '5px',
          backgroundColor: '#027be3',
          width: '5px',
          opacity: 0.75
        },
      }
    }
  }
</script>