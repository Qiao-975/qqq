<template>
  <div>
    <div>
      <div class="box1">
        <el-col :span="20" class="addrs">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">店铺管理</el-breadcrumb-item>
            <el-breadcrumb-item>账户信息</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="12">
          <p class="restruntname">洋洋餐厅</p>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="23" class="boxd">
          <div class="box2">
            <el-table :data="tableData2" border class="table2">
              <el-table-column type="index" label="#" width></el-table-column>
              <el-table-column prop="UserSource" label="用户来源" width></el-table-column>
              <el-table-column prop="wx_nickname" label="用户名称" width></el-table-column>
              <el-table-column prop="userType" label="用户类型" width="180px"></el-table-column>
              <el-table-column prop="sex" label="性别" width></el-table-column>
              <el-table-column prop="u_mobile" label="手机号" width></el-table-column>
              <el-table-column prop="num" label="消费次数" width></el-table-column>
              <el-table-column prop="add_time" label="上次消费时间" width="180px"></el-table-column>
              <el-table-column label="操作" fixed="right" width>
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="success"
                    @click="chakan(scope.$index, scope.row)"
                  >查看详情</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="block">
            <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
          </div>
        </el-col>
      </div>
      <el-dialog :title="titleObj[titleStatus]" :visible.sync="dialogVisible" width="60%">
        <div class="dialogdiv">
          <el-tabs tab-position="bottom">
            <el-tab-pane label="用户管理">
              <xiangqing
                :wx_avatarurl="obj1.wx_avatarurl"
                :wx_nickname="obj1.wx_nickname"
                :sex="obj1.sex"
                :u_mobile="obj1.u_mobile"
                :fid="obj1.fid"
                :add_time="obj1.add_time"
                :shareNum="obj1.shareNum"
                :UserSource="obj1.UserSource"
              ></xiangqing>
            </el-tab-pane>
            <el-tab-pane label="配置管理">diertye</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button
            type="primary"
            v-if="titleStatus === 'create'"
            @click="dialogVisible = false"
          >确 定</el-button>
          <el-button type="primary" v-else @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import xiangqing from "@/views/usercenter/xiangqing.vue";
import { newUserList } from "@/api/usercenter";
export default {
  name: "userlist",
  components: {
    xiangqing: xiangqing
  },
  data() {
    return {
      options: [{ key: 1, value: "洋洋餐厅" }],
      tableData2: [],
      titleObj: {
        create: "添加员工",
        updata: "编辑员工信息"
      },
      titleStatus: "create",
      dialogVisible: false,
      value: "",
      show: false,
      obj1: {
        wx_avatarurl:
          "http://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEK9I96iaOnpfoXgncPricAiafA6JKhxVXiawic2prszqtIwB5k1wCPVFmcDbVkgH8clp6gVOaiarwUlYWog/132",
        wx_nickname: "小二",
        sex: "男",
        u_mobile: "18611744393",
        fid: 85,
        add_time: "2019-08-08 12:03:58",
        shareNum: 0,
        UserSource: "微信"
      },
      pageList: {
        // pagenum: 1,
        // wx_nickname: '',
        // type: null
        startTime: null,
        seller_id: null,
        endTime: null,
        pagesize: 10,
        pagenum: 1,
        wx_nickname: "",
        type: null,
        sourceType: 1
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      newUserList(this.pageList).then(res => {
        let data = res.data.data
        this.$message({
          message: "请求成功",
          type: "success"
        });
        console.log(res.data, "data");

        this.tableData2 = [...data];
        // this.tableData2 = data;
      });
    },
    chakan(index, row) {
      this.obj1 = {};
      this.show = true;
      this.titleStatus = "create";

      this.dialogVisible = true;
      this.obj1 = { ...this.tableData2[index] };
      console.log(this.obj1);
    }
  }
};
</script>
<style lang="scss" scoped>
.box1 {
  padding: 30px;
}
.addrs {
  height: 40px;
  line-height: 40px;
}
.restruntname {
  font-size: 30px;
  font-weight: 600;
  display: inline-block;
}
.boxd {
  margin-top: 10px;
  border: 1px solid #ebeef5;
  padding: 40px;
  border-radius: 6px;
  .box2 {
    // border: 1px solid #ebeef5;
    border-bottom: none;
    padding-top: 2px;
    margin: 20px 0;
    th,
    td {
      text-align: center;
    }
  }
}
</style>