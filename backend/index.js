const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 3000;
app.get("/",(req,res)=>{
    res.send("hi Vib how are u!");
});
app.post("/login",(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    if(!email||password){
        return res.status(400).json({
            message: "Email and password are required",
        });

    }
    if(email ==="manpretjattan1234@gmail.com"&& password==="man@123"){
        return res.json({
            success:true,
            message:"Login successful",
        });
    }
    return res.status(401).json({
        message: "Invalid credential",
    });
});



app.listen(PORT, ()=> {
    console.log("sever running on port", PORT);
});