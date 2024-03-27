const socket = new WebSocket("wss://socketsbay.com/wss/v2/1/demo/")

socket.addEventListener("open", function (event){
    socket.send("Hello World!");
});

socket.addEventListener("message", function (event){
    console.log("message from server", event.data);
});