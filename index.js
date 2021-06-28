const express = require("express")
const app = express();
const cors = require('cors')
const db = require('./db_mysql.js')
const pool = require('./db_pg.js');

const PORT = process.env.PORT || 8080

app.use(cors());
app.use(express.json());

// check connect store
app.get('/',(req,res) => {
    db.query("SELECT * FROM user WHERE user.email='cs27@fitwhey.com'",(err, result) => {
        if (err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
    
})

// check connect wms
/*app.get('/wms',(req, res) => {
    pool.query("SELECT * from wmsfw.saleorderhead "+
    " WHERE sale_order_no = '1956855'",(err, result)=>{
        if (err){
            console.log(err);
        } else {
            res.send(result.rows);
        }
    });
})

app.get('/user/:_id',(req, res) => {
    const id = req.params._id
    console.log(id)
    db.query("SELECT * FROM `order` WHERE `order`.id= ?",[id],(err,result) => {
        if (err){
            console.log(err);
        } else {
            res.send(result);
        }
    })
})
app.put('/updatestore/:_id',(req,res) => {
    let id = req.params._id
    let name = req.body.shipping_name
    let address = req.body.shipping_address
    let province = req.body.shipping_province
    let zipcode = req.body.shipping_zipcode
    let phone  = req.body.shipping_mobile
    db.query("UPDATE `order` "+
    "SET `order`.shipping_name = ?,`order`.shipping_address = ?"+
    ",`order`.shipping_province = ?, `order`.shipping_zipcode = ?"+
    ",`order`.shipping_mobile = ?"+
    " WHERE `order`.id = ?",[name,address,province,zipcode,phone,id], (err, result) => {
        if(err) {
            console.log("fail update store")
        } else {
            res.send("store update success!!")
        }
    })    
})

app.put('/updatewms/:_id',(req,res) => {
    let id = req.params._id
    let name = req.body.shipping_name
    let address = req.body.shipping_address
    let province = req.body.shipping_province
    let zipcode = req.body.shipping_zipcode
    let full_address = address +" "+ province +" "+ zipcode
    let phone  = req.body.shipping_mobile
    pool.query("UPDATE wmsfw.saleorderhead "+
    "SET rec_name = $1,"+
    "rec_company = $2,rec_full_address = $3,"+
    "rec_address = $4,rec_zip_code = $5"+
    "rec_city_input = $6,rec_numtel = $7"+
    " WHERE sale_order_no = $4",[name,name,full_address,rec_address,zipcode,province,phone,id], (err, result) => {
        if(err) {
            console.log(err)
            res.send("fail update wms")
        } else {
            res.send("wms update success!!")
        }
    })
})*/


app.listen(PORT,() => {
    console.log(`Sever is running on port: ${PORT}`)
})