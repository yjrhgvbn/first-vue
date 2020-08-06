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
				<div class="cart-content-main" v-for="url in urls">
					<div class="cart-info">
						<img :src="url">
						<span style="padding-left: 10px">阿萨德</span>
					</div>
					<div class="cart-price">
						￥ 22
					</div>
					<div class="cart-count">
            <el-button icon="el-icon-plus" circle size="mini"></el-button>
						12
						<el-button icon="el-icon-minus" circle size="mini"></el-button>
					</div>
					<div class="cart-cost">
						￥ 131
					</div>
					<div class="cart-delete">
                    <span class="cart-control-delete">删除</span>
					</div>
				</div>
				<div class="cart-empty" v-if="!urls.length">购物车为空</div>
			</div>
			<div class="cart-footer" v-show="urls.length">
				<div class="cart-footer-desc">
					共计 <span>123</span>
				</div>
				<el-divider direction="vertical"></el-divider>
				<div class="cart-footer-desc">
					应付总额 <span>123</span>
				</div>
				<div class="cart-footer-desc">
					<el-button type="primary">现在结算</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: 'productSummary',
				data(){
            return {
                activeName: 'first',
                num: 1,
                urls: [
                    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
                ]
            };
				},
        methods: {
            handleClick(tab, event) {
                console.log(this.activeName,tab, event);
            }
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
