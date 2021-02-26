const http = require('http')
const port = 8080

const server = http.createServer(function(req,res){
	res.write("hello world")
	res.end()
})
server.listen(port,'0.0.0.0',function(error){
	if (error){
		console.log("something went wrong",error)

	}
	else
	{
		console.log('server runing at port '+port)
	}
})
