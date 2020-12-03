const sockets = (io) => {
    
    io.use( (socket, next) => {
        console.log(socket.id, "connection middleware");
        next();
    });
    
    io.on("connection", (socket) => {
        // console.log("A user has been connected : " + socket.id);
    
        socket.on("chat", (data) => {
            io.emit("chat", data, socket.id);
        });
    
    });
}
export default sockets