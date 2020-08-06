<template>
	<div>
	<el-row>
		<el-col :span="5" v-for="(product, index) in list" :key="product.id" :offset="index%4 === 0 ? 2 : 0">
			<el-card :body-style="{ padding: '20px'}" class="card" @click.native="handleClickCard(product.id)">
				<div style="overflow: hidden">
					<el-image :src="product.url" fit="contain" class="image"></el-image>
					<div type="text" class="title">{{product.name}}</div>
					<div type="text" class="describe">{{product.description}}</div>
					<div type="text" class="price">￥{{product.price}}</div>
					<p class="productStatus">
						<span class="sale">月成交 <em>{{product.saleCount}}</em></span>
						<span class="rate"><a style="color: gray">评分 </a><i class="el-icon-star-on" ></i>{{product.rank}}</span>
					</p>
				</div>
			</el-card>
		</el-col>
	</el-row>
	</div>
</template>

<script>
    export default {
        props: ['list'],
        data() {
            return {
            };
        },
        methods: {
            handleClickCard(id){
								this.$router.push('/home/' + String(id))
						}
        },
        mounted () {
        }
    }
</script>

<style scoped>
	.card{
		width: 100%;
		height: 0;
		padding-bottom: 150%;
		overflow: hidden;
		position: relative;
	}
	.card:hover{
		transform: translateY(-3px);
		box-shadow: 1px 1px 20px #999;
	}
	.title{
		font-size: 18px;
		font-weight: bold;
		padding-top: 8%;
		white-space: nowrap;
		width: 100%;
		overflow: hidden;
		text-overflow:ellipsis;
	}
	.describe{
		font-size: 10px;
		color: gray;
		padding-top: 2%;
		display: inline-block;
		white-space: nowrap;
		width: 100%;
		overflow: hidden;
		text-overflow:ellipsis;
	}
	.price{
		color: red;
		font-size: 18px;
		font-weight: bold;
		padding-top: 7%;
	}
	.image {
		height: 273px;
		width: 100%;
		padding-top: 0%;
		display: block;
	}

	.productStatus {
		position: relative;
		height: 32px;
		border: none;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
		margin-bottom: 0;
		color: #999;
	}
	.sale {
		float: left;
		display: inline-block;
		width: 46%;
		padding: 10px 1px;
		margin-right: 6px;
		line-height: 12px;
		text-align: center;
		white-space: nowrap;
	}
	.rate
	{
		float: left;
		display: inline-block;
		width: 42%;
		padding-top: 4px;
		text-align: right;
		white-space: nowrap;
		color: #ffbb0f;
	}
	.productStatus em {
		color: #b57c5b;
	}
	.productStatus a {
		color: #38b;
	}
</style>
