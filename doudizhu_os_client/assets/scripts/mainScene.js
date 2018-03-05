
cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad: function () {
        let socket = io('http://localhost:3000')
        socket.on("welcome",function (data) {
            console.log("data = " + data);
        })
    }



});
