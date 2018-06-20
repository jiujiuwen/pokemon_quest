<template>
  <el-container id="MainLayout">
    <el-aside width="200px">
      <el-menu
        :defaultActive="activeMenu"
        class="db-menu-bar"
        router
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        background-color="rgba(252, 195, 53, 0.1)"
        text-color="#e40359"
        active-text-color="rgba(252, 195, 53, 0.9)">

        <template v-for="(route, index) in $router.options.routes[$router.options.routes.length - 2].children">
          <template v-if="route.children && route.name">
            <el-submenu :index="route.name">
              <template slot="title"><i :class="route.iconClass"></i>{{route.name}}</template>
              <el-menu-item :key="cRoute.name" :index="cRoute.name" v-for="(cRoute, cIndex) in route.children" :route="cRoute">{{cRoute.name}}</el-menu-item>
            </el-submenu>
          </template>
          <template v-if="!route.children && route.name">
            <el-menu-item :index="route.name" :route="route"><i :class="route.iconClass"></i>{{route.name}}</el-menu-item>
          </template>
        </template>

      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-button size="medium" class="close-up-button" type="text" v-if="isCollapse" @click="changeCollapse(false)">&nbsp;&nbsp;展开 >>&nbsp;&nbsp; </el-button>
        <el-button size="medium" class="close-up-button" type="text" v-if="!isCollapse" @click="changeCollapse(true)"> &nbsp;&nbsp; << 收起&nbsp;&nbsp; </el-button>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
  import { Button, Main, Aside, Header, Container, Menu, MenuItem, Submenu } from 'element-ui';
  import ElButton from "../node_modules/element-ui/packages/button/src/button.vue";
  import ElMenu from "../node_modules/element-ui/packages/menu/src/menu.vue";
//  import { mapActions, mapState } from 'vuex'

  export default {
    data() {
      return {
        activeMenu: '',
        isCollapse: false,
      };
    },
    created() {
        this.activeMenu = this.$route.name;
//      this.getUserInfo();
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      changeCollapse(value){
        this.isCollapse = value;
      },
      changeContentPadding(value){
        document.getElementById("db-content-wrapper-id").style.padding = value;
      },
    },
    watch: {
      isCollapse(value){
        if(value === true){
          this.changeContentPadding("60px 0px 0px 70px");
        } else {
          this.changeContentPadding("60px 0px 0px 200px");
        }
      },
      $route(value){
        this.activeMenu = value.name;
      }
    },
    components:{
      ElMenu,
      ElButton,
      [Button.name]: Button,
      [Main.name]: Main,
      [Aside.name]: Aside,
      [Header.name]: Header,
      [Container.name]: Container,
      [Menu.name]: Menu,
      [MenuItem.name]: MenuItem,
      [Submenu.name]: Submenu,
    },

  };
</script>

<style lang="scss" scoped>
  .el-header {
    background-color: rgba(253, 224, 105, 0.5);
    color: #333;
    text-align: center;
    /*line-height: 60px;*/
  }
  .el-aside {
    background-color: rgba(253, 224, 105, 0.2);
    color: #333;
    text-align: center;
    /*line-height: 200px;*/
  }

  .el-main {
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    /*line-height: 260px;*/
  }

  .el-container:nth-child(7) .el-aside {
    /*line-height: 320px;*/
  }
  #MainLayout
  .close-up-button{
    color: rgb(252, 195, 53);
    position: relative;
    top: 30px;
    float: left;
    font-weight: bold;
    text-align: center;
  }
</style>
