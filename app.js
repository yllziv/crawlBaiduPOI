var http = require('http'),
  fs = require('fs');
var  reqPath;
var server = http.createServer(function (req, res) {
  fs.readFile('./crawlWuhanPOI.html', function(error, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data, 'utf-8');
  });
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    socket.emit("message",{text:"you have connected!"})
    socket.on("fileName",function(data){
        reqPath = "./txt/"+data.text+".txt";
    })
    socket.on("poi",function(data){
        // console.log(data.text)

        fs.exists(reqPath, function(exists){
            if(!exists){
                fs.writeFile(reqPath,"",["Unicode"],function(err){
                    if(err)throw err;
                    console.log("File Saved!")
                })
                fs.appendFile(reqPath,data.text,["Unicode"],function(err){
                    if(err)throw err;
                    console.log("File Saved!")
                })
            }else{
                fs.appendFile(reqPath,data.text,["Unicode"],function(err){
                    if(err)throw err;
                    console.log("File Saved!")
                })
            }
        });

    })

  console.log('User connected');
  socket.on('disconnect', function () {
    console.log('User disconnected');
  });
});
