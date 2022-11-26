/*const io = require('socket.io')(3000)

const users = {}

io.on('connection',socket =>
{
    socket.on('new-user-joined', name =>{
        users[socket.id] = name;
        socket.broadcast.emit('user-joined',name);
    })
    socket.on('send',message)
    socket.broadcast.emit('receive',{message: message,name: user[socket.id]})
}
)*/
const express = require('express')
const app = express()
 const http = require('http').createServer(app)

const PORT = process.env.PORT || 3000

http.listen(PORT , () => {
    console.log('listening on port ${PORT}')
})
app.use(express.static(__dirname + '/public'))
app.get('/',(req,res) =>{
    res.sendFile(__dirname + '/index.html')
})

//socket
const io = require('socket.io')(http)

io.on('connection',(socket)=>
{
    console.log('connected....')
    socket.on('message',(msg)=>{
        socket.broadcast.emit('message', msg)
    })
})