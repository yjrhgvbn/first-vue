<template>
	<div class="main">
		<div class="gray-box">
			<div class="gallery">
				<div class="left">
					<ul>
						<li v-for="url in img1" @click="handleImgClick(url.url)">
							<el-image :src="url.url" fit="cover"></el-image>
						</li>
					</ul>
				</div>
				<div class="right">
					<el-image :src="selectImg" fit="contain" class="img"></el-image>
				</div>
			</div>
			<div style="padding-left: 30px;width: 470px;text-align: left">
				<h3>{{product.name}}</h3>
				<div style="font-size: 10px;color: gray">{{product.description}}</div>
				<el-divider></el-divider>
				<span style="color: gray;float: left;padding-top: 5px">套餐：</span>
				<ul style="padding-left:50px;">
					<el-button v-for="pack in product.package" :key="pack.name" @click="handlePackClick(pack)" size="mini" plain
										 style="margin: 5px 6px;" :class="{packSelect:pack.name===selectPack.name}">{{pack.name}}</el-button>
				</ul>
				<div class="price-property">
					<span class="price-title">价格: <em>￥{{product.price+selectPack.price}}</em></span>
				</div>
				<div style="padding-top: 20px">
					<span style="color: #6c6c6c;">数量：</span>
					<el-input-number v-model="buyCount" :min="1" :max="product.leftCount"></el-input-number>
					<span style="padding-left:10px;font-size: 15px">(库存:{{product.leftCount}})</span>
				</div>
				<el-divider></el-divider>
				<div style="padding-top:10px">
					<el-button  plain type="primary" style="width: 150px;" @click="addCart">加入购物车</el-button>
					<el-button  plain style="width: 150px;"  @click="dialogVisible = true">立即购买</el-button>
					<el-dialog
									title="购买确认"
									:visible.sync="dialogVisible"
									width="30%"
									:before-close="handleDialogClose">
						<span>{{product.name}} X{{buyCount}}</span>
						<div style="text-align: right"><span class="price-title">总价:<em>￥{{product.price*buyCount}}</em></span></div>
						<span slot="footer" class="dialog-footer">
							<el-button @click="dialogVisible = false">取 消</el-button>
							<el-button type="primary" @click="handleDeal" v-loading.fullscreen.lock="fullscreenLoading">确 定</el-button>
						</span>
					</el-dialog>
				</div>
			</div>
		</div>
		<br>
		<div class="detail-box">
			<el-tabs v-model="activeName" type="card">
				<el-tab-pane label="详细信息" name="first">
					<div>
						<el-image v-for="(url,index) in img2" :key="index" :src="url.url" lazy></el-image>
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
    export default {
        name: 'productSummary',
        data(){
            return {
                id: parseInt(this.$route.params.id),
								product:{},
								img1:[],
								img2:[],
                activeName: 'first',
                buyCount: 1,
								selectImg:'',
								selectPack:{name:'',price: 0},
                dialogVisible: false,
                fullscreenLoading: false
            };
        },
        methods: {
            handleDialogClose(done) {
                this.$confirm('取消购买？')
                  .then(_ => {
                      done();
                  })
                  .catch(_ => {});
            },
            handleDeal(){
                this.fullscreenLoading = true;
                this.$ajax.post('/data/deal',{amount:this.buyCount,productID:this.id})
									.then(res=>{
                      this.fullscreenLoading = false
									    if(res.data.succeed === true) {
                          this.$alert('购买成功', '提示', {
                              confirmButtonText: '确定',
                              callback: () => {
                                  this.dialogVisible = false
                                  this.init()
                              }
                          })
                      }
									    else{
                          this.$alert('购买失败', '提示', {
                              confirmButtonText: '确定'
                          })
											}
									})
						},
            handleImgClick(url){
                this.selectImg=url
						},
            handlePackClick(pack){
                this.selectPack = pack
						},
						addCart(){
                let sqlParams = {
                    userID:this.$store.state.userID,
										productID:this.id,
										amount:this.buyCount,
                }
                this.$ajax.post('/data/addCart',sqlParams)
									.then(res=>{
                      if(res.data.succeed === true) {
                          this.$store.commit('addCart',this.id)
                          this.$notify({
                              title: '添加购物车成功',
                              message: this.product.name+' X'+this.buyCount,
                              type: 'success',
                              position: 'top-left'
                          });
											}else{
                          console.log(res.data)
                          this.$message({
                              showClose: true,
                              message: '无法添加购物车',
                              type: 'error'
                          });
											}
									})
						},
						init(){
                this.id = parseInt(this.$route.params.id)
                this.$ajax.post('/data/product',{userID:this.id})
                  .then(res=>{
                      if(res.data.succeed===true){
                          this.product = res.data.product
                          let packages = this.product.package
                          this.product.package=[]
                          for(let t of packages.split(" ")){
                              this.product.package.push({
                                  name:t.split(':')[0],
                                  price:parseInt(t.split(':')[1])
                              })
                          }
                          this.selectPack=this.product.package[0]
                          this.img1 = res.data.img1
                          this.selectImg = this.img1[0].url
                          this.img2 = res.data.img2
                      }
                      else{
                          this.$message({
                              showClose: true,
                              message: '无法获取商品',
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
		background: #ededed;
		overflow: hidden;
		width: 100%;
		min-height: 562px;
	}
	.gray-box{
		overflow: hidden;
		background: #fff;
		border-radius: 8px;
		border: 1px solid #dcdcdc;
		display: flex;
		padding: 60px;
		margin: 0 auto;
		width: 1098px;
		height: 440px;
	}
	.gallery{
		display: flex;
		width: 540px;
		height: 440px;
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	.left{
	}
	.left ul{
		list-style-type:none;
		padding-inline-start: 0px;
	}
	.left li{
		width: 80px;
		height: 80px;
		margin-top: 10px;
	}
	.right{
		padding-left: 10px;
	}
	.img{
		padding-bottom: 0px;
		height: 440px;
		text-align:center;
	}
	.packSelect{
		color: #3a8ee6;
		border-color: #3a8ee6;
	}
	.price-property{
		padding-top: 10px;
		line-height: 26px;
		position: relative;
	}
	.price-title{
		margin-top: 2px;
		color: #6c6c6c;
	}
	.price-title em{
		padding-left: 10px;
		font-size: 26px;
		font-weight: 700;
		margin-right: 4px;
		font-style: normal;
		color: #F40
	}

	.detail-box{
		overflow: hidden;
		background: #fff;
		border-radius: 8px;
		border: 1px solid #dcdcdc;
		display: flex;
		margin: 0 auto;
		width: 1218px;
	}

</style>
