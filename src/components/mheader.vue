<template>
	<div>
		<el-menu
						:default-active="$route.path"
						class="el-menu-demo"
						mode="horizontal"
						text-color="#fff"
						background-color="#545c64"
						active-text-color="#ffd04b"
						router
		>
			<el-menu-item index="/home" style="margin-left: 150px;" >首页</el-menu-item>
			<el-input placeholder="请输入商品信息" v-model="searchValue" class="search-head">
				<i class="el-icon-search el-input__icon" slot="suffix" @click="search"></i>
			</el-input>
			<el-submenu index="2" class = 'user-head'>
				<template slot="title" >
					<i class="el-icon-user-solid"></i>
				</template>
				<el-menu-item index="2-1" disabled style="text-align: center"><i class="el-icon-user"></i>{{userName}}</el-menu-item>
				<el-menu-item index="/login">退出登录</el-menu-item>
			</el-submenu>
			<el-badge :hidden="showRedPoint" :value="cartLength" :max="99" class="item red-point">
				<el-menu-item index="/user/cart" style="margin-top:-10px">购物车</el-menu-item>
			</el-badge>
		</el-menu>
	</div>
</template>
<script>
    export default {
        data () {
            return {
                searchValue:this.$store.state.search,
								userName:this.$store.state.username,
								cartLength:this.$store.state.cartIdList.length
            }
        },
        methods: {
            search:function() {
                this.$store.commit('setSearch',this.searchValue)
								if(this.$route.path!=='/home') {
                    this.$router.push('/home')
                }
                else{
								}
            },
        },
        watch: {
            "$store.state.cartIdList":function () {
                this.cartLength=this.$store.state.cartIdList.length
            }
        },
        computed:{
          showRedPoint(){
              return this.$store.state.cartIdList.length === 0
					}
				},
        mounted () {
            if(this.$store.state.username===''){
                this.$message({
                    message: '请先登录',
                    type: 'warning'
								})
                this.$router.push('/login')
						}
            else{
                this.$ajax.post('data/user/cartId',{userID:this.$store.state.userID})
                  .then(res=>{
                      if(res.data.succeed === true){
                          this.$store.commit('setCartIdList',res.data.cartIdList)
                      }else{
                          console.log(res.data)
                          this.$message({
                              showClose: true,
                              message: '无法获取购物车',
                              type: 'error'
                          });
                      }
                  })
						}
        },
        name:'mheader',
    }
</script>
<style scoped>
	.user-head{
		float: right;
		margin-right: 100px;
	}
	.search-head{
		margin-top: 10px;
		width:250px;
	}
	.red-point{
		margin-top:10px;
		margin-right: 40px;
		float: right;
	}
</style>
