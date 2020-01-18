<template>
  <div class="contanier">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>对账收款</el-breadcrumb-item>
        <el-breadcrumb-item>收款信息管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="body">
      <div class="bodyhead">
        <p>洋洋餐厅</p>
      </div>
      <div class="bodycontent">
        <el-form
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          ref="ruleForm2"
          label-width="150px"
          class="demo-ruleForm"
          size="mini"
        >
          <el-form-item label="商家收款账户" prop="proper">
            <el-input type="proper" v-model="ruleForm2.proper" auto-complete="off" :span="6"></el-input>
          </el-form-item>
          <el-form-item label="收款人电话" prop="s_mobile">
            <el-input type="s_mobile" v-model="ruleForm2.s_mobile" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="接受打款信息电话" prop="boss_phone">
            <el-input type="boss_phone" v-model="ruleForm2.boss_phone" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="银行名称" prop="bank_name">
            <el-input type="bank_name" v-model="ruleForm2.bank_name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="银行账号" prop="bank">
            <el-input type="bank" v-model="ruleForm2.bank" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="开户行地址" prop="bank_address">
            <el-input type="bank_address" v-model="ruleForm2.bank_address" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="是否为法人" prop="is_corporation">
            <el-input type="is_corporation" v-model="ruleForm2.is_corporation" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input v-model.number="ruleForm2.age"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "amendGathering",
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        proper: "",
        s_mobile: "",
        boss_phone: "",
        bank_name: "",
        bank: "",
        bank_address: "",
        is_corporation: "",
        pass: "",
        checkPass: "",
        age: ""
      },
      rules2: {
        proper: [
          { required: true, message: "请输入账户名", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" }
        ],
        s_mobile: [
          { required: true, message: "请输入收款人电话", trigger: "blur" },
          { min: 11, max: 11, message: "请输入正确长度号码", trigger: "blur" }
        ],
        boss_phone: [
          { required: true, message: "请输入联系电话", trigger: "blur" },
          { min: 11, max: 11, message: "请输入正确长度号码", trigger: "blur" }
        ],
        bank_name: [{}],
        bank: [{}],
        bank_address: [{}],
        is_corporation: [{}],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="scss" scoped>
.contanier {
  padding: 20px;
  .header {
    line-height: 40px;
  }
  .body {
    margin-top: 20px;
    padding: 30px;
    border: 1px solid #ebeef5;
    border-radius: 5px;
    .bodyhead {
      border-bottom: 1px solid #000;
      margin-bottom: 15px;
      p {
        font-size: 20px;
        font-weight: 600;
      }
    }
    .bodycontent {
    }
  }
}
</style>