<template>
  <div id="app">
    <p v-show="show">{{ time }}</p>
    <div class="p-3">
      <button class="btn btn-primary" v-show="show === false" v-on:click="countUp">見たい！</button>
      <button class="btn btn-danger" v-show="show" v-on:click="countUp">見たくない！</button>
    </div>
  </div>
</template>

<script>
let id;

export default {
  data() {
    return {
        time: "",
        show: false
    }
  },
  methods: {
    countUp: function() {
      let vm = this;
      // 設定したい日時(日付だけも平気)
      let ceremony = new Date("2020/7/18 20:00"); 
      let count;
      
      count = function() {
          let countup = Date.now() - ceremony;
          let days = Math.floor(countup / 1000 / 60 / 60 / 24);
          let hours = Math.floor(countup / 1000 / 60 / 60) % 24;
          let min = Math.floor(countup / 1000/ 60) % 60;
          let sec = Math.floor(countup / 1000) % 60;

          vm.time = `${days}日と${hours}時間${min}分${sec}秒`;
          id = setTimeout(count, 10);
      }
      vm.show = !vm.show
      count();
    } 
  }
}
</script>
