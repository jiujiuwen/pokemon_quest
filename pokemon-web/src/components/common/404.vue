<template>
  <p>页面未找到！</p>
</template>

<script>
  export default {
    methods:{
      getReferUrl(){
        var ref=document.referrer;
        console.log(ref);
      }
    },
    mounted() {
      this.getReferUrl();
    }
  }
</script>
