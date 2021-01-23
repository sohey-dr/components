<template>
  <div>
    <h3>カウンター</h3>
    counter: {{ $store.state.counter.num }}
    <button v-on:click="$store.dispatch('counter/addNumberAction')">+1</button>
    <button v-on:click="$store.dispatch('counter/resetNumberAction')">reset</button>
  </div>
</template>
