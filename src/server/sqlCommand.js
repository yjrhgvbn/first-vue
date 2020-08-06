const sqlStatement = {
  insertUser: 'INSERT INTO users(name, password, id) VALUES (?, ?, NULL);',
  selectUserAndPassword: 'select * from users where name = ? and password = ?;',
  selectUser: 'select * from users where name = ?;',
  selectCart: 'select * from cart where userID = ?;',
  selectProductDetail: 'SELECT name,description,saleCount,leftCount,package,price FROM Product Where id=? ;' +
    'SELECT url FROM img1 Where productID=? ORDER BY img1.order;' +
    'SELECT url FROM img2 Where productID=? ORDER BY img2.order;',
  insertCart:'insert into cart(userID, productID, amount) values (?, ?, ?) ON DUPLICATE KEY UPDATE amount = amount + ?;',
  selectCartIdList:'SELECT productID FROM cart WHERE userID=?;',
  updateProductLeft:'update product set leftCount = case when leftCount>=?' +
    ' then leftCount-? else leftCount end,saleCount= case when leftCount>=? ' +
    'then saleCount+? else saleCount end where id=?;',
  selectCartList:'SELECT p.url,p.name,p.price,c.amount,c.productID FROM product p,cart c WHERE c.userID=? AND c.productID=p.id;',
  deleteCart:'DELETE FROM Cart WHERE userID=? AND productID=?;'
}
module.exports = sqlStatement
