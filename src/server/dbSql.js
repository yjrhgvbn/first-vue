const sqlCommand = require('../server/sqlCommand')
const express = require('express')
const router = express.Router()
const query = require('./db')

router.use('/checkUser', function (req, res) {
  let sql
  let sqlParams
  if (!req.body.password) {
    sql = sqlCommand.selectUser
    sqlParams = [req.body.userName]
  } else {
    sql = sqlCommand.selectUserAndPassword
    sqlParams = [req.body.userName, req.body.password]
  }
  query(sql, sqlParams, function (err, result) {
    if (err || result.length === 0) {
      res.json({
        exist: false
      })
    } else {
      res.json({
        exist: true,
        userID: result[0].id
      })
    }
    res.end()
  })
})

router.use('/addUser', function (req, res) {
  let sql = sqlCommand.insertUser;
  let sqlParams = [req.body.userName, req.body.userID, req.body.password, req.body.email]
  query(sql, sqlParams, function (err, result){
    if(err){
      res.json({
        succeed: false
      })
    }
    else{
      res.json({
        succeed: true
      })
    }
    res.end()
  })
})

// old
router.use('/getList', function (req, res) {
  let isHaveWhere = false
  let sql='SELECT SQL_CALC_FOUND_ROWS id,url,name,description,price,saleCount,product.rank FROM product '
  let sqlParams = []
  if(req.body.search!==''){
    sql += 'WHERE name LIKE ? '
    isHaveWhere = true
    sqlParams.push("%"+req.body.search+"%")
  }
  if(req.body.type!=='all'){
    if(!isHaveWhere){
      sql+='WHERE '
      isHaveWhere=true
    }else{
      sql+='AND '
    }
    sql+='type=? '
    sqlParams.push(req.body.type)
  }
  if(req.body.priceMin!==''){
    if(!isHaveWhere){
      sql+='WHERE '
      isHaveWhere=true
    }else{
      sql+='AND '
    }
    sql+='price >= ? '
    sqlParams.push(req.body.priceMin)
  }
  if(req.body.priceMax!==''){
    if(!isHaveWhere){
      sql+='WHERE '
      isHaveWhere=true
    }else{
      sql+='AND '
    }
    sql+='price <= ? '
    sqlParams.push(req.body.priceMax)
  }
  if(req.body.order!==''){
    sql+='ORDER BY '+req.body.order+' '
  }
  //12一页
  sql+='LIMIT ? , ? ;SELECT FOUND_ROWS() as count;'
  let page = parseInt(req.body.page);
  sqlParams.push(page*12)
  sqlParams.push(12)
  query(sql, sqlParams, function (err, result){
    if(err){
      res.json({
        succeed: false
      })
    }
    else{
      res.json({
        list:result[0],
        succeed: true,
        count:result[1][0].count
      })
    }
    res.end()
  })
})

router.use('/product',function (req, res) {
  let sql = sqlCommand.selectProductDetail
  let sqlParams = [req.body.userID, req.body.userID, req.body.userID]
  query(sql, sqlParams, function (err, result){
    if(err){
      res.json({
        succeed: false
      })
    }
    else{
      res.json({
        product:result[0][0],
        img1:result[1],
        img2:result[2],
        succeed: true
      })
    }
    res.end()
  })
})

router.use('/addCart', function (req, res) {
  let sql = sqlCommand.insertCart;
  let sqlParams = [req.body.userID, req.body.productID, req.body.amount, req.body.amount]
  query(sql, sqlParams, function (err, result){
    if(err){
      res.json({
        succeed: false,
      })
    }
    else{
      res.json({
        succeed: true
      })
    }
    res.end()
  })
})

router.use('/user/cartId',function (req, res) {
  let sql=sqlCommand.selectCartIdList;
  query(sql,[req.body.userID],function (err, result){
    if(err){
      res.json({
        succeed: false,
        sql:sql,
        sqlParams:req.body.userID
      })
    }
    else{
      res.json({
        succeed: true,
        cartIdList:result
      })
    }
    res.end()
  })
})

router.use('/deal', function (req, res) {
  let sql = sqlCommand.updateProductLeft
  let sqlParams = [req.body.amount, req.body.amount, req.body.amount, req.body.amount, req.body.productID]
  query(sql, sqlParams, function (err, result) {
    if (err) {
      res.json({
        succeed: false,
        reason:'未知'
      })
    } else {
        res.json({
          succeed: result.changedRows>0,
          reason:'不知道'
        })
    }
    res.end()
  })
})

router.use('/user/card',function (req, res){
  let sql=sqlCommand.selectCartList
  let sqlParams = [req.body.userID]
  query(sql, sqlParams, function (err, result){
    if(err){
      res.json({
        succeed: false
      })
    }
    else{
      res.json({
        list:result,
        succeed: true
      })
    }
    res.end()
  })
})

router.use('/user/deleteCard',function (req, res){
  let sql=sqlCommand.deleteCart
  let sqlParams = [req.body.userID,req.body.productID]
  query(sql, sqlParams, function (err, result){
    if(err){
      res.json({
        succeed: false
      })
    }
    else{
      res.json({
        succeed: true
      })
    }
    res.end()
  })
})

router.use('/test',function (req, res){
  let sql='SELECT id,url,name,description,price,saleCount,product.rank FROM product '
  let sqlParams = []
  query(sql, sqlParams, function (err, result){
    if(err){
      res.json({
        succeed: false
      })
    }
    else{
      res.json({
        list:result,
        succeed: true
      })
    }
    res.end()
  })
})
module.exports = router
