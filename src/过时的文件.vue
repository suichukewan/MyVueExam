
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">Yes!</el-button>
    <el-row>
      <el-col :span="6" :offset="9">
        <transition name="custom-classes-transition" enter-active-class="rotateInDownLeft" leave-active-class="hinge">
          <h1 class="animated" v-if="this.$store.state.showDagger">呵呵大</h1>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Want something new?'
    }
  },

  methods: {
    startHacking() {
      // this.$notify({
      //   title: 'Shhh',
      //   message: 'Just be patient...',
      //   duration: 6000
      // })
      this.$store.commit('daggerCtrl');
      this.$http.get('http://testoa.markwins.cn:8801/wf/UserInfo/GetAllUsers?token=8DBAC3C1-7675-4946-9A5E-1C6187944F55')
        .then(function (response) {
          console.log(response);
        })
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
