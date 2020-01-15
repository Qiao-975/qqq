<template>
    <div>
        asdfasdf
    </div>
</template>
<script>
import { newUserList } from '@/api/usercenter'
export default {
    name: 'userlist',
    data() {
        return {
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
        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList(){
            newUserList(this.pageList).then( (res) => {
                this.$message({
                message: '请求成功',
                type: 'success'
                });
                console.log(res)
            })
        }
    }


}
</script>
<style lang="scss" scoped> 
    
</style>