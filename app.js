var http = require('http')


server = http.createServer(function(req, res){
	res.send("it works..")
})

server.listen(8080)