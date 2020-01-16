<template>
  <div id="xiangqing">
    <div class="box1">
      <img :src="wx_avatarurl" alt />
      <div class="xiang">
        <el-col :span="20">用户名: {{wx_nickname}}</el-col>
        <el-col :span="20">性别: {{sex}}</el-col>
        <el-col :span="20">手机号码: {{u_mobile}}</el-col>
        <el-col :span="6">消费次数: {{fid}}</el-col>
        <el-col :span="12">上次消费时间: {{add_time}}</el-col>
        <el-col :span="20">使用特权返现剩余次数: {{shareNum}}</el-col>
        <el-col :span="20">用户来源: {{UserSource}}</el-col>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "xiangqing",
  data() {
    return {};
  },
  props: [
    "wx_avatarurl",
    "wx_nickname",
    "sex",
    "u_mobile",
    "fid",
    "add_time",
    "shareNum",
    "UserSource"
  ]
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#xiangqing {
  font-size: 30px;
  color: rgb(255, 3, 3);
}
.box1 {
  font-size: 18px;
  color: rgb(0, 0, 0);
  padding: 30px;
  background: #fff;
}
.box1 img {
  border-radius: 50%;
}
.box1 .title2 {
  font-size: 30px;
  margin-bottom: 50px;
}
.box1 .xiang {
  padding: 30px;
}
.xiang div {
  line-height: 40px;
}
</style>