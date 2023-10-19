<template>
  <div>
	<h1>This is my  new app totally</h1>
  <input type="image" accept="jpg,png" />
	</div>
</template>

<script setup>
import {ref} from 'vue'

alert('this is a aap')
const getlocaldata = ref(localStorage.getItem('getlocaldata'));
alert(getlocaldata)

</script>


<style lang="scss">

</style>