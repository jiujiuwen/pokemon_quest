<template lang="html">
  <div class="pagination-wrapper" v-show="!loading">
    <el-pagination
      layout="total, prev, pager, next, jumper"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-size="10"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  import { Pagination } from 'element-ui';

  export default {
    components: {
      Pagination,
    },
    data() {
      return {
      };
    },
    props: {
      total: Number,
      loading: Boolean,
      page: Number,
    },
    methods: {
      handleCurrentChange(val) {
        this.$emit('pages', val)
      },
    },
  };
</script>

<style scoped>
  .pagination-wrapper {
    text-align: center;
    padding: 30px;
  }

</style>
