const express = require("express");
const cors = require("cors");

const {makeMove,getLedger} = require("./contract/gameContract");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/move",(req,res)=>{

const position = req.body.position;

const result = makeMove(position);

res.json(result);

});

app.get("/ledger",(req,res)=>{

res.json(getLedger());

});

app.listen(3000,()=>{
console.log("Server running on port 3000");
});