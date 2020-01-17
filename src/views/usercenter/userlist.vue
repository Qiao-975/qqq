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
          <div class="row1">
            <!-- 时间日期选择器 -->
            <div class="block datecheck">
              <span class="demonstration">用户列表:</span>
              <el-date-picker
                v-model="value6"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="timestamp"
                @change="datepicker"
              ></el-date-picker>
            </div>
            <!-- //类型选择框 -->
            <div class="typebox">
              <el-select v-model="pageList.type" placeholder="请选择" @change="gettype">
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <!-- 搜索框 -->
            <div class="searchbox">
              <el-input
                v-model="pageList.wx_nickname"
                clearable
                @change="search"
                placeholder="请输入内容"
              >
                <el-button type="primary" plain slot="append" @click="search">搜索</el-button>
              </el-input>
            </div>
          </div>
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
            <el-pagination
              @current-change="skippage"
              :page-size="10"
              layout="total, prev, pager, next,  jumper "
              :total="this.pageinfo.total"
            ></el-pagination>
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
      value6: [],
      options: [{ key: 1, value: "洋洋餐厅" }],
      options1: [
        { value: "1", label: "自然" },
        { value: "2", label: "复购" },
        { value: "3", label: "裂变" },
        { value: "4", label: "裂变+复购 " }
      ],
      tableData2: [],
      titleObj: {
        create: "添加员工",
        updata: "编辑员工信息"
      },
      pageinfo: {},
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
        startTime: null,
        endTime: null,
        seller_id: null,
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
        let data = res.data.data;
        let pageinfo = res.data.pageinfo;
        this.$message({
          message: "请求成功",
          type: "success"
        });
        console.log(res, "data");
        console.log(this.pageList, "加载中");

        this.tableData2 = [...data];
        this.pageinfo = { ...pageinfo };
      });
    },
    gettype() {
      this.getList();
    },
    search() {
      this.getList();
    },
    chakan(index, row) {
      this.obj1 = {};
      this.show = true;
      this.titleStatus = "create";

      this.dialogVisible = true;
      this.obj1 = { ...this.tableData2[index] };
      console.log(this.obj1);
    },
    skippage(val) {
      this.pageList.pagenum = `${val}`;
      this.getList();
    },
    datepicker() {
      if(this.value6==[]){
        this.pageList.startTime = this.pageList.endTime = null
        this.getList();
      }else {
        let asd = this.value6[0].toString();
        let asd1 = this.value6[1].toString();
        let jkl = asd.slice(0, 10)-0;
        let jkl1 = asd1.slice(0, 10)-0;
  
        this.pageList.startTime = jkl;
        this.pageList.endTime = jkl1;
        this.getList();
      }
    },
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
.row1 > div {
  display: inline-block;
  margin-right: 30px;
}
</style>