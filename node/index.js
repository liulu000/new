	var express=require("express");
	var app=express();
	app.use(express.static("public"));
	app.all("*",function(req,res,next){
			res.header("Access-Control-Allow-Origin","*");
			next();
	});	
	
	app.get("/01",function(req,res){
			res.sendFile(__dirname+"/01.json");
		})
	
	app.get("/02",function(req,res){
			res.sendFile(__dirname+"/02.json");
		})
	
	app.get("/03",function(req,res){
			res.sendFile(__dirname+"/03.json");
		})
	
	app.get("/04",function(req,res){
			res.sendFile(__dirname+"/04.json");
		})
	
	app.get("/nnn",function(req,res){
			res.sendFile(__dirname+"/index.html");
		})
	
	var server=app.listen(8081,function(){
		console.log(server.address().address,server.address().port,server.address().family);
	})

