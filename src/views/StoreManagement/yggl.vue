<template>
  <div>
    <div class="box1">
      <p class="restruntname">洋洋餐厅</p>
      <el-col :span="24" class="boxd">
        <el-button type="primary" plain @click="dialogVisible=true;titleStatus='create'">添加员工</el-button>
        <div class="box2">
          <el-table :data="tableData3" border class="table3">
            <el-table-column type="index" label="#" width align="center"></el-table-column>
            <el-table-column prop="staff_name" label="姓名" width align="center"></el-table-column>
            <el-table-column prop="mobile" label="手机号" width align="center"></el-table-column>
            <el-table-column prop="positions_name" label="职位" width align="center"></el-table-column>
            <el-table-column prop="create_time" label="创建时间" width align="center"></el-table-column>
            <el-table-column prop="update_time" label="修改时间" width align="center"></el-table-column>
            <el-table-column label="操作" fixed="right" width="280" align="center">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="success"
                  plain
                  @click="chakan(scope.$index, scope.row);titleStatus='editor';dialogVisible=true"
                >编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  plain
                  @click="dialogVisible2=true;shanchu(scope.$index, scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            @current-change="handleCurrentChange"
            :page-size="5"
            layout="total, prev, pager, next"
            :total="pageinfo.total"
          ></el-pagination>
        </div>
      </el-col>
    </div>

    <!-- 编辑弹窗   新建弹窗   编辑弹窗   新建弹窗   编辑弹窗   新建弹窗   编辑弹窗   编辑弹窗   编辑弹窗   编辑弹窗-->
    <el-dialog
      :title="titleObj[titleStatus]"
      :visible.sync="dialogVisible"
      width="40%"
      @close="clear"
    >
      <div class="dialogdiv">
        <el-col :span="24">
          <div class="iptbox1" style="padding-left:15px">
            员工姓名
            <el-input class="ipt1" v-model="staff_name" placeholder="请输入姓名"></el-input>
          </div>
          <div class="iptbox1">
            员工手机号
            <el-input class="ipt1" v-model="mobile" placeholder="请输入手机号"></el-input>
          </div>
          <div class="iptbox1" style="padding-left:15px">
            员工类型
            <el-select v-model="positions" placeholder="请选择员工类型" style="padding-left:15px">
              <el-option
                v-for="item in options"
                :key="item.positions"
                :value="item.positions"
                :label="item.positions_name"
              ></el-option>
            </el-select>
          </div>
        </el-col>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          v-if="titleStatus === 'create'"
          @click="dialogVisible = false;addList()"
        >确 定</el-button>
        <el-button type="primary" v-else @click="dialogVisible = false;seave()">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 删除提示   删除提示   删除提示   删除提示   删除提示   删除提示   删除提示   删除提示   删除提示 -->
    <el-dialog title="提示" :visible.sync="dialogVisible2" width="500px">
      <div class="dialogdiv" style="padding-left:30px">
        <div class="el-icon-warning box5" style="color:red;font-size:25px"></div>
        <div
          style="display: inline-block;position: relative;top: -5px;left: 10px;"
        >此操作将永久删除该数据,是否继续?</div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible2 = false">取 消</el-button>
        <el-button type="primary" size="mini" @click="dialogVisible2 = false;del()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import {
  newStaffList,
  addStaffList,
  saveStaffList,
  deleteStaff
} from "@/api/StoreManagement";
export default {
  name: "yggl",
  data() {
    return {
      pageList: {
        startTime: null,
        endTime: null,
        seller_id: null,
        pagesize: 10,
        pagenum: 1,
        pageNo: 0,
        staff_name: "",
        type: null,
        sourceType: 1
      },
      tableData3: [],
      pageinfo: {},
      titleStatus: "",
      dialogVisible: false,
      dialogVisible2: false,
      titleObj: {
        create: "新建员工信息",
        editor: "编辑员工信息"
      },
      staff_name: "",
      mobile: "",
      positions: null,
      options: [
        { positions: 1, positions_name: "老板" },
        { positions: 2, positions_name: "店长" },
        { positions: 3, positions_name: "收银员" },
        { positions: 4, positions_name: "服务员" }
      ]
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      newStaffList(this.pageList).then(res => {
        // 要执行的函数
        let data = res.data.data;
        let pageinfo = res.data.pageinfo;
        // console.log(data, pageinfo, "请求员工列表返回的数据");
        this.tableData3 = [...data];
        this.pageinfo = { ...pageinfo };
        // 最后
        this.$message({
          message: "请求成功",
          type: "success"
        });
      });
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pageList.pagenum = `${val}`;
      this.getList();
    },
    getTime() {
      let date = new Date();
      let o = {
        y: date.getFullYear(),
        Mo: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds()
      };
      return o.y + "-" + o.Mo + "-" + o.d + " " + o.h + ":" + o.m + ":" + o.s;
    },
    clear() {
      this.staff_name = this.mobile = this.positions = this.positions_name = "";
    },
    // 编辑按钮
    chakan(index, row) {
      // console.log(index, row, "编辑的按钮");
      this.id = this.tableData3[index].id;
      this.staff_name = this.tableData3[index].staff_name;
      this.mobile = this.tableData3[index].mobile;
      this.positions = this.tableData3[index].positions;
      this.positions_name = this.tableData3[index].positions_name;
      this.create_time = this.tableData3[index].create_time;
      this.update_time = this.tableData3[index].update_time;
      this.index = index;
    },
    // 删除按钮
    shanchu(index, row) {
      console.log(row, "要删除的数据的row");
      this.row = row
    },
    // 确认保存按钮
    seave() {
      // console.log(this.id, '点击"编辑员工信息"的确定');
      var obje = {
        id: this.id,
        staff_name: this.staff_name,
        mobile: this.mobile,
        positions: this.positions,
        create_time: this.create_time,
        update_time: this.getTime()
      };
      saveStaffList(obje).then(res => {
        this.getList();
      });
      this.$message({
        message: "编辑成功",
        type: "success"
      });
    },
    // 确认新建按钮
    addList() {
      if (this.staff_name == "" || this.mobile == "" || this.userType == "") {
        this.$message({
          message: "请填写完整",
          type: "warning"
        });
        this.dialogVisible = true;
      } else {
        var newdata = {
          id: ++this.id,
          staff_name: this.staff_name,
          mobile: this.mobile,
          positions: this.positions,
          positions_name: this.positions_name,
          create_time: this.getTime(),
          update_time: "--"
        };

        addStaffList(newdata).then(res => {
          this.getList();
        });

        this.$message({
          message: "添加成功",
          type: "success"
        });
      }
    },
    // 确认删除按钮
    del() {
      let row = this.row
      deleteStaff(row).then(res => {
        this.getList();
      });
      this.$message({
        message: "删除成功",
        type: "success"
      });
    }
  }
};
</script>
<style lang="scss" spcoed>
.box1 {
  padding: 30px;
  .restruntname {
    font-size: 20px;
    font-weight: 600;
    display: inline-block;
  }
  .boxd {
    margin-top: 10px;
    .box2 {
      border-bottom: none;
      padding-top: 2px;
      margin-top: 20px;
    }
  }
}
.iptbox1 {
  display: block;
  margin: 20px 10px;
  .ipt1 {
    padding-left: 15px;
    display: inline-block;
    width: 40%;
  }
}
.box5 {
  width: 25px;
  height: 25px;
}
</style>