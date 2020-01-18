<template>
  <div class="contanier">
    <div class="header">
      <!-- <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/gathering' }">对账收款</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/gathering/gatheringImfor' }">收款信息</el-breadcrumb-item>
      </el-breadcrumb> -->
    </div>
    <div class="body">

    </div>
  </div>
</template>
<script>
export default {
  name: "gatheringImfor",
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.contanier {
    background: #000;
    padding: 20px;
    .header {
        line-height: 40px;
    }
    .body {
        margin-top: 20px;
    }
}
</style>