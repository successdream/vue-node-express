<template lang="pug">
  .home
    .sider-bar sider-bar
      
    .content content
</template>

<script lang="ts">
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { Component, Vue} from 'vue-property-decorator';
@Component({

})
export default class Home extends Vue{

}

</script>
<style lang="less" scoped>
  .home{
    display: flex;
    // flex-direction: column;
    .sider-bar{
      width: 300px;

    }
    .content{
      flex: 1;
    }
  }
</style>
