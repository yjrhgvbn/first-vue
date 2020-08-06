<template>
	<div class="main">
		<div class="gray-box">
			<div class="title">
				<h2 style="font-size: 100%;font-weight: 400;">购物清单</h2>
			</div>
			<div class="card-head">
				<span class="cart-info">商品信息</span>
				<span class="cart-price">单价</span>
				<span class="cart-count">数量</span>
				<span class="cart-cost">小计</span>
				<span class="cart-delete">删除</span>
			</div>
			<div>
				<div class="cart-content-main" v-for="(product,index) in cartList">
					<div class="cart-info">
						<img :src="product.url" @click="handleProductClick(product.productID)">
						<span style="padding-left: 10px">{{product.name}}</span>
					</div>
					<div class="cart-price">￥ {{product.price}}</div>
					<div class="cart-count">
						<el-button icon="el-icon-minus" circle size="mini" @click="handleAmountClick('minus',index)"></el-button>
						<span style="width: 50px">{{product.amount}}</span>
						<el-button icon="el-icon-plus" circle size="mini" @click="handleAmountClick('plus',index)"></el-button>
					</div>
					<div class="cart-cost">
						￥ {{product.amount*product.price}}
					</div>
					<div class="cart-delete" @click="handleDeleteClick(index)">
						<span class="cart-control-delete">删除</span>
					</div>
				</div>
				<div style="height: 40px;font-size: 20px" v-if="!cartList.length">购物车为空</div>
			</div>
			<div class="cart-footer" v-show="cartList.length">
				<div class="cart-footer-desc">
					共计 <span>{{sum}}</span>
				</div>
				<el-divider direction="vertical"></el-divider>
				<div class="cart-footer-desc">
					应付总额 <span>{{sum}}</span>
				</div>
				<div class="cart-footer-desc">
					<el-button type="primary" @click="handleSettleClick"
										 v-loading.fullscreen.lock="fullscreenLoading">现在结算</el-button>
				</div>
			</div>
		</div>
		<el-dialog title="结算失败商品" :visible.sync="dialogTableVisible" style="text-align: left">
			<el-table :data="failSettle">
				<el-table-column property="name" label="商品名" width="350"></el-table-column>
				<el-table-column property="amount" label="数量" width="200"></el-table-column>
				<el-table-column property="reason" label="原因"></el-table-column>
			</el-table>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="handleFailClick">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
    export default {
        name: 'productSummary',
        data(){
            return {
                cartList:[],
                activeName: 'first',
                failSettle:[],
                fullscreenLoading: false,
                dialogTableVisible: false
            };
        },
				computed: {
            sum(){
                return eval(this.cartList.map((item) => {
                    return item.price*item.amount;
                }).join('+'))
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(this.activeName, tab, event);
            },
            handleDeleteClick(index){
                this.$ajax.post('/data/user/deleteCard',{
                    userID:this.$store.state.userID,
										productID:this.cartList[index].productID
                }).then(res=>{
                      if(res.data.succeed===true){
                          this.$message({
                              showClose: true,
                              message: '删除成功',
                              type: 'success'
                          })
                          this.$store.commit('deleteCartIdList',this.cartList[index].productID)
                          this.init()
                      }else{
                          this.$message({
                              showClose: true,
                              message: '无法删除，请重试',
                              type: 'error'
                          });
                      }
									})
						},
            handleProductClick(id) {
                this.$router.push('/home/'+String(id))
            },
            handleAmountClick(type, index){
                if(type === 'minus'){
                    if(this.cartList[index].amount-1>0) {
                        this.cartList[index].amount--
                    }else{
                        this.$message({
                            showClose: true,
                            message: '购买数量不能小于0',
                            type: 'warning'
                        });
										}
								}
                else if(type === 'plus'){
                    this.cartList[index].amount++
								}
						},
            handleSettleClick(){
                let complete=0
                this.fullscreenLoading=true
                for(let i in this.cartList){
                    this.$ajax.post('/data/deal',{
                        amount:this.cartList[i].amount,
												productID:this.cartList[i].productID})
                      .then(res=>{
                          if(res.data.succeed === true) {
                              this.$ajax.post('/data/user/deleteCard',{
                                  userID:this.$store.state.userID,
                                  productID:this.cartList[complete].productID
                              })
                              this.$store.commit('deleteCartIdList',this.cartList[complete].productID)
                          }
                          else{
                              this.failSettle.push({
																	name:this.cartList[complete].name,
                                  amount:this.cartList[complete].amount,
																	reason:res.data.reason})
                          }
                          complete++
                          if(complete === this.cartList.length){
                              this.fullscreenLoading=false
                              if(this.failSettle.length===0)
															{
                                  this.$alert('结算成功', '提示', {
                                      confirmButtonText: '确定'
                                  })
															}else{
                                  this.dialogTableVisible=true
															}
                              this.init()
													}
                      })
								}
						},
            handleFailClick(){
                this.dialogTableVisible = false
								this.failSettle=[]
						},
						init(){
                this.$ajax.post('/data/user/card',{userID:this.$store.state.userID})
									.then(res=>{
                      if(res.data.succeed===true){
                          this.cartList=res.data.list
                      }else{
                          this.$message({
                              showClose: true,
                              message: '无法获取购物车',
                              type: 'error'
                          });
											}
									})
						}
        },
        mounted () {
            this.init()
        }
    }
</script>

<style scoped>
	.main{
		clear: both;
		width: 1220px;
		min-height: 600px;
		padding: 0 0 25px;
		margin: 0 auto;
	}
	.gray-box{
		position: relative;
		margin-bottom: 30px;
		overflow: hidden;
		background: #fff;
		border-radius: 8px;
		border: 1px solid #dcdcdc;
	}
	.title{
		position: relative;
		height: 50px;
		padding: 0 10px 0 24px;
		border-bottom: 1px solid #d4d4d4;
		border-radius: 8px 8px 0 0;
		background: linear-gradient(#ffffff,#ececec);
		line-height: 40px;
		font-size: 18px;
		color: #333;
		text-align: left;
	}
	.card-head{
		padding: 12px 33px;
		border-bottom: 1px solid #dddee1;
		background: #eee;
		overflow: hidden;
	}
	.cart-head span{
		text-align: center;
		float: left;
		font-size: 14px;
	}
	.cart-info{
		width: 60%;
		float: left;
		text-align: left;
	}
	.cart-price{
		float: left;
		width: 10%;
	}
	.cart-count{
		text-align: center;
		float: left;
		width: 10%;
	}
	.cart-cost{
		float: left;
		width: 10%;
	}
	.cart-delete {
		float: left;
		width: 10%;
	}
	.cart-content-main{
		padding: 0 33px;
		height: 80px;
		line-height: 80px;
		text-align: center;
		border-bottom: 1px dashed #e9eaec;
		overflow: hidden;
	}
	.cart-content-main div{
		float: left;
	}
	.cart-content-main img{
		width: 50px;
		height: 50px;
		position: relative;
		top: 15px;
	}
	.cart-control-delete{
		cursor: pointer;
		color: #2d8cf0;
	}  .cart-footer{
			 padding: 32px;
			 text-align: right;
		 }
	.cart-footer-desc{
		display: inline-block;
		padding: 0 16px;
	}
	.cart-footer-desc span{
		color: #f2352e;
		font-size: 20px;
	}
	.cart-control-order{
		display: inline-block;
		padding: 8px 32px;
		border-radius: 6px;
		background: #2d8cf0;
		color: #fff;
		cursor: pointer;
	}
</style>
