var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.get("/",(req,res) => {
    res.send("Hello");
})
app.post("/bfhl",(req,res) => {
    var a = {};
    var User_Id = "harshitkumarpatidar";
    var colleage_Roll_Number = "0827CS191106"
    var Email_Id = "harshitkumarcs19@acropolis.in"; 
    var body = req.body.data;
    var alphabet = [];
    var number = [];
    var cnt1 = 0,cnt2 = 0;
    st = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(i = 0;i<body.length;i++){
        var flag = false;
        for(let j = 0; j < st.length; j++){
            if(body[i] == st[j]){ 
                flag = true;
                break;
            }    
        }
        if(flag){
            alphabet[cnt2++] = body[i];
        }
        if(!isNaN(body[i])){
            number[cnt1++] = body[i];
        }
    }
    ans = {is_success:true,user_id:User_Id,email:Email_Id,roll_number:colleage_Roll_Number,numbers:number,alphabets:alphabet};
    res.json(ans);
})
app.listen(port);
