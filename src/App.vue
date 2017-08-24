<template>
  <div>
    <el-row type="flex" justify="center">
      <!-- header -->
      <el-col :span='22'>
        <el-menu theme="light" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="3">处理中心</el-menu-item>
          <!-- <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu> -->
          <el-menu-item index="2">
            <router-link class="rlink" to="list">列表页</router-link>
          </el-menu-item>
          <el-menu-item index="1">
            <router-link class="rlink" to="/">首页</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>

    <el-row>
      <!-- content -->
      <transition mode="out-in" name="custom-classes-transition" enter-active-class="fadeInDown" leave-active-class="fadeOutUp">
        <router-view class="animated"></router-view>
      </transition>
    </el-row>

    <el-row>
      <!-- footer -->
    </el-row>

  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
.el-menu--horizontal .el-menu-item {
  float: right
}

.el-menu--horizontal .el-submenu {
  float: right
}

.rlink {
  text-decoration: none
}
</style>
