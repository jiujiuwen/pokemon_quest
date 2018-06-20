<template>
    <div id="mainLayout">
      <db-breadcrumb class="db-breadcrumb-style"></db-breadcrumb>
      <router-view></router-view>
    </div>
</template>


<script>
  import DbBreadcrumb from './breadcrumb'
export default {
  components: {
    DbBreadcrumb,
  },
}

</script>


<style>
#mainLayout
  .db-breadcrumb-style {
    display: inline-block;
    margin: 0rem 5rem 2rem 0rem;
  }

</style>
