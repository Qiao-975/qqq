<template>
  <div id="sharelist">
    <div class="box1">
      <el-col :span="20" class="addrs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">店铺管理</el-breadcrumb-item>
          <el-breadcrumb-item>账户信息</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <div class="box2">
        <el-table :data="tableData" border style="width: 100%" class="table1">
          <el-table-column fixed type="index" label="#" width="100px" align="center"></el-table-column>
          <el-table-column prop="wx_avatarurl" label="微信头像" width="100px" align="center">
            <template slot-scope="scope">
              <img :src="scope.row.wx_avatarurl" alt style="width: 50px;height: 50px" />
            </template>
          </el-table-column>
          <el-table-column prop="wx_nickname" label="微信名称" width align="center"></el-table-column>
          <el-table-column prop="sex" label="性别" width align="center"></el-table-column>
          <el-table-column prop="u_mobile" label="手机号" width align="center"></el-table-column>
          <el-table-column prop="userVipType" label="分享发起位置" width align="center"></el-table-column>
          <el-table-column prop="UserSource" label="分享方式" width align="center"></el-table-column>
          <el-table-column prop="UserSource" label="分享类型" width align="center"></el-table-column>
          <el-table-column prop="add_time" label="分享时间" width align="center"></el-table-column>
          <el-table-column fixed="right" label="操作" width align="center">
            <template slot-scope="scope">
              <el-button
                @click="chakan(scope.row);dialogFormVisible=true"
                type="success"
                size="mini"
                plain
              >查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="block">
        <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
      </div>
      <div class="duihua">
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
import { newUserList } from "@/api/usercenter";
export default {
  name: "sharelist",
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      tableData: [
        {
          source: 1,
          id: 490,
          user_wx_id: 85,
          wx_gender: "1",
          wx_avatarurl:
            "http://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEK9I96iaOnpfoXgncPricAiafA6JKhxVXiawic2prszqtIwB5k1wCPVFmcDbVkgH8clp6gVOaiarwUlYWog/132",
          wx_nickname: "小二儿",
          u_mobile: "18611744393",
          wx_account: "cfz*****",
          add_time: "2019-08-08 12:03:58",
          fid: 85,
          is_first: 1,
          o_fld_type: 1,
          u_level: 2,
          num: 104,
          userType: "自然用户",
          Type: 1,
          shareNum: 0,
          share_time: "",
          userVipType: "运营商用户",
          UserSource: "微信",
          upi_get_num: 7,
          upi_get_num_total: 7,
          Remaining: 0,
          sex: "男"
        },
        {
          source: 1,
          id: 76576,
          user_wx_id: 40360,
          wx_gender: "1",
          wx_avatarurl:
            "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLp0dlc2Ste8UzW0Y0aThyGzTjyr0QJmBp3iazm5EsHhE7DAMYBUjUb6gRGzIEenzctWEND8UI8F8w/132",
          wx_nickname: "阿超",
          u_mobile: "17638534313",
          wx_account: null,
          add_time: "2019-09-16 10:22:38",
          fid: 0,
          is_first: 0,
          o_fld_type: 4,
          u_level: 1,
          num: 102,
          userType: "(裂变 + 复购) 用户",
          Type: 4,
          shareNum: 0,
          share_time: "",
          userVipType: "会员用户",
          UserSource: "微信",
          upi_get_num: 1,
          upi_get_num_total: 1,
          Remaining: 0,
          sex: "女"
        },
        {
          source: 1,
          id: 4069,
          user_wx_id: 4139,
          wx_gender: "1",
          wx_avatarurl:
            "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eolbDR2apiaAicgZ511iaBA545ohGHMdM2F8tU86UtrKr2PsPOrXO5Uc7rkWOcnRcRibOColauhqQUzmg/132",
          wx_nickname: "Da",
          u_mobile: "18510999927",
          wx_account: null,
          add_time: "2019-12-18 17:18:16",
          fid: 0,
          is_first: 1,
          o_fld_type: 1,
          u_level: 1,
          num: 48,
          userType: "裂变用户",
          Type: 3,
          shareNum: 0,
          share_time: "",
          userVipType: "会员用户",
          UserSource: "微信",
          upi_get_num: 7,
          upi_get_num_total: 7,
          Remaining: 0,
          sex: "女"
        },
        {
          source: 1,
          id: 5869,
          user_wx_id: 5710,
          wx_gender: "1",
          wx_avatarurl:
            "https://wx.qlogo.cn/mmopen/vi_32/Q3auHgzwzM7ib6Mmaj4yl3qMruEgkVLKswicfoEgNzkkLsT8licubEyRpW2CookJTnbRehjibDK6LAOb6iaQHJdKdgA/132",
          wx_nickname: "刘志超",
          u_mobile: "18210860325",
          wx_account: null,
          add_time: "2019-04-18 16:40:27",
          fid: 0,
          is_first: 1,
          o_fld_type: 1,
          u_level: 1,
          num: 38,
          userType: "裂变用户",
          Type: 3,
          shareNum: 0,
          share_time: "",
          userVipType: "会员用户",
          UserSource: "微信",
          upi_get_num: 1,
          upi_get_num_total: 1,
          Remaining: 0,
          sex: "女"
        },
        {
          source: 1,
          id: 479,
          user_wx_id: 104,
          wx_gender: "1",
          wx_avatarurl:
            "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIkzlpcCwW9iaIH1uEHV9cIGXda4lCOeuJAqXF6nWeY8YicB8V8KARhF2yDibjLYyuLcnC4fnJCaEQdg/132",
          wx_nickname: "一个好人",
          u_mobile: "18303652640",
          wx_account: " zh*****iyang",
          add_time: "2019-12-30 22:36:34",
          fid: 0,
          is_first: 1,
          o_fld_type: 1,
          u_level: 2,
          num: 30,
          userType: "裂变用户",
          Type: 3,
          shareNum: 0,
          share_time: "",
          userVipType: "运营商用户",
          UserSource: "微信",
          upi_get_num: 7,
          upi_get_num_total: 7,
          Remaining: 0,
          sex: "女"
        },
        {
          source: 1,
          id: 1377,
          user_wx_id: 62,
          wx_gender: "1",
          wx_avatarurl:
            "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epJoh0n0CSkuic7FSAyMVbcC9TsBwfGgPuNUBE7BLunSEYqMicEkBRHFtPhx3UTzicPFe1pyQZYkuAZw/132",
          wx_nickname: "Frank",
          u_mobile: "18610810338",
          wx_account: "860*****6",
          add_time: "2019-07-18 19:46:14",
          fid: 0,
          is_first: 1,
          o_fld_type: 1,
          u_level: 1,
          num: 8,
          userType: "裂变用户",
          Type: 3,
          shareNum: 0,
          share_time: "",
          userVipType: "会员用户",
          UserSource: "微信",
          upi_get_num: 7,
          upi_get_num_total: 7,
          Remaining: 0,
          sex: "男"
        },
        {
          source: 1,
          id: 1129,
          user_wx_id: 112,
          wx_gender: "1",
          wx_avatarurl:
            "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI9JdRricv0X491CjmshXibUyEN7DibcBOSkkKWdU3v3opzaZhOjveAv36TRyArPSlfS6kjSmqicfgkBQ/132",
          wx_nickname: "黑大帅",
          u_mobile: "15600598783",
          wx_account: "",
          add_time: "2019-07-08 16:08:53",
          fid: 0,
          is_first: 1,
          o_fld_type: 1,
          u_level: 1,
          num: 7,
          userType: "(裂变 + 复购) 用户",
          Type: 4,
          shareNum: 0,
          share_time: "",
          userVipType: "会员用户",
          UserSource: "微信",
          upi_get_num: 7,
          upi_get_num_total: 7,
          Remaining: 0,
          sex: "男"
        },
        {
          source: 1,
          id: 22168,
          user_wx_id: 23924,
          wx_gender: "1",
          wx_avatarurl:
            "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJWYXISZNM2z1c8XxZrEiah6WveeGZ5ibsGetfCv1PBas8sYdhmoh04Dqfic9oziagzawSraibMb5JYGBQ/132",
          wx_nickname: "刘震",
          u_mobile: "",
          wx_account: null,
          add_time: "2019-06-18 19:24:42",
          fid: 0,
          is_first: 1,
          o_fld_type: 2,
          u_level: 0,
          num: 7,
          userType: "(裂变 + 复购) 用户",
          Type: 4,
          shareNum: 0,
          share_time: "",
          userVipType: "普通用户",
          UserSource: "微信",
          upi_get_num: 1,
          upi_get_num_total: 1,
          Remaining: 0,
          sex: "男"
        },
        {
          source: 1,
          id: 5717,
          user_wx_id: 4369,
          wx_gender: null,
          wx_avatarurl: null,
          wx_nickname: null,
          u_mobile: null,
          wx_account: null,
          add_time: "2019-08-26 10:10:33",
          fid: null,
          is_first: 1,
          o_fld_type: 2,
          u_level: null,
          num: 6,
          userType: "裂变用户",
          Type: 3,
          shareNum: 0,
          share_time: "",
          userVipType: "普通用户",
          UserSource: "微信",
          upi_get_num: 1,
          upi_get_num_total: 1,
          Remaining: 0,
          sex: "男"
        },
        {
          source: 1,
          id: 5354,
          user_wx_id: 6322,
          wx_gender: "0",
          wx_avatarurl:
            "https://wx.qlogo.cn/mmopen/vi_32/aeLuIDof1ynIgbfuvR2SBdJ3qwBYbxewNFqfrTp4oeicd48OhNLcQIucEHBSRp8L6jEqzDpFHSOn9iaEbW74vh8g/132",
          wx_nickname: "文件转输工具",
          u_mobile: "0",
          wx_account: null,
          add_time: "2019-04-18 09:24:24",
          fid: 0,
          is_first: 1,
          o_fld_type: 2,
          u_level: 0,
          num: 5,
          userType: "裂变用户",
          Type: 3,
          shareNum: 0,
          share_time: "",
          userVipType: "普通用户",
          UserSource: "微信",
          upi_get_num: 1,
          upi_get_num_total: 1,
          Remaining: 0,
          sex: "男"
        }
      ]
    };
  },
 methods: {
      chakan(){
      console.log(13);
      
  }
 },
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
.box2 {
  margin: 20px 0;
}
</style>