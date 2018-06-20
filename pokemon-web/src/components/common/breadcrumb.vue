<template lang="html">
  <el-breadcrumb separator="/">
    <span class="db-breadcrumb-loc">位置：</span>
    <el-breadcrumb-item :key="item.name" v-for="item in breadcrumbs" :to="item">
      {{ item.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { Breadcrumb, BreadcrumbItem} from 'element-ui';

export default {
  name: 'db-breadcrumb',
  components: {
    'el-breadcrumb': Breadcrumb,
    'el-breadcrumb-item': BreadcrumbItem
  },
  data() {
    return {
      breadcrumbs: []
    };
  },
  watch: {
    '$route'() {
      this.breadcrumbs = (this.$parent && this.$parent.$route && this.$parent.$route.matched) || [];
    }
  },
  mounted() {
    this.breadcrumbs = (this.$parent && this.$parent.$route && this.$parent.$route.matched) || [];
  }
};
</script>

<style lang="css">
.db-breadcrumb-loc {
  float: left;
}
</style>
