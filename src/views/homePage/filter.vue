<template>
	<div>
		<div style="height: 30px;padding-top: 10px">
		</div>
		<div class="excavator container">
			<div class="excavator-filter">
				<span class="excavator-filter-name">商品分类：</span>
				<a v-for="filter in filters" class="excavator-filter-item" @click="handleFilter(filter.typeName)"
					 :class="{active:sqlParams.type===filter.typeName}">{{filter.name}}</a>
			</div>
			<div class="excavator-filter">
				<span class="excavator-filter-name">排序方式：</span>
				<a v-for="order in orders" class="excavator-filter-item" @click="handleOrder(order.typeName)"
					 :class="{active:sqlParams.order===order.typeName}">{{order.name}}</a>
			</div>
			<div class="excavator-filter">
				<span class="excavator-filter-name">具体筛选：</span>
				<div>
					<label>价格区间：</label>
					<el-input autofocus="true" placeholder="价格"
										v-model="sqlParams.priceMin" clearable size="mini" class="filter-input"></el-input>
					<label>-</label>
					<el-input placeholder="价格" v-model="sqlParams.priceMax" clearable size="mini" class="filter-input"></el-input>
					<el-button type="primary" size="mini" class="el-icon-check" @click="getProductList"></el-button>
				</div>
			</div>
		</div>
		<br>
		<productList :list="productList"></productList>
		<br>
		<el-pagination
						:page-size="12"
						background
						@current-change="handleCurrentChange"
						layout="prev, pager, next"
						:total="productCount">
		</el-pagination>
		<br>
	</div>
</template>

<script>
    import myHeader from '../../components/mheader'
    import productList from './productList'
    export default {
        components: {
            productList,
            myHeader
        },
        data() {
            return {
                filters:[
                  	{name:'全部', typeName:'all'},
                    {name:'食品', typeName:'food'},
                    {name:'数码', typeName:'digital'},
                    {name:'其他', typeName:'else'}
								],
								orders:[
                    {name:'默认', typeName:''},
                    {name:'价格降序', typeName:'price DESC'},
                    {name:'价格升序', typeName:'price'},
                    {name:'销量', typeName:'saleCount DESC'},
                    {name:'评分', typeName:'product.rank DESC'}
								],
                sqlParams:{
                    search:this.$store.state.search,
                    type:'all',
                    priceMin:'',
                    priceMax:'',
                    order:'',
                    page:0
                },
                productList:[],
								productCount:12,
                input: '',
                focusState: false,
            }
        },
        methods: {
            getProductList(){
                this.$ajax.post('/data/getList', this.sqlParams)
                  .then(res=>{
                      if(res.data.succeed === true) {
                          this.productList = res.data.list
													this.productCount = res.data.count
                      }
                      else{
                          this.$message({
                              showClose: true,
                              message: '无法获取商品列表',
                              type: 'error'
                          });
                      }
                  })
            },
            handleFilter(typeName){
                this.sqlParams.type = typeName
								this.getProductList()
						},
            handleOrder(typeName){
                this.sqlParams.order = typeName
                this.getProductList()
            },
            handleCurrentChange(page){
                this.sqlParams.page=page-1
                this.getProductList()
						}
        },
        watch: {
            "$store.state.search":function () {
                this.sqlParams.search=this.$store.state.search
                this.getProductList()
            }
        },
        directives: {
            focus: {

            }
        },
        mounted () {
            this.getProductList()
        }
    }
</script>

<style scoped>
	.excavator {
		border: 1px solid #e6e6e6;
	}
	.container {
		font-size: 14px;
		width: 83%;
		margin: 0 auto;
	}
	.excavator-filter {
		line-height: 26px;
		padding: 4px 8px 3px 7em;
		background-color: #fff;
		position: relative;
		text-align: left;
	}
	.excavator-filter-name {
		position: absolute;
		left: 10px;
		top: 6px;
		color: #999;
	}
	.excavator-filter-item {
		white-space: nowrap;
		display: inline-block;
		margin: 2px 3px;
		padding: 0 10px;
	}
	.excavator-filter-item:hover {
		background-color: #f6f6f6;
		border-radius: 3px;
	}

	.filter-input{
		width: 90px;
	}
	.filter-input:focus{
		width: 140px;
	}
	.active {
		color: blue;
		background-color: #f6f6f6;
		border-radius: 3px;
	}
</style>
