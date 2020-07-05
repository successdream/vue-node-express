<template lang="pug">
  <div id="app">
    .header 我是头部
    .content
      <router-view style="height: 100%; width: 100%"/>
  </div>
</template>

<style lang="less">
#app {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  .content{
    flex: 1;
  }

}
</style>
