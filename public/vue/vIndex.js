const socket = io.connect('http://localhost:3000');

let chatbox = new Vue ({
    el: "#chatBox",
    data: {
        messages: [],
        dmessage: "",
        username: ""
    },
    mounted: function () {
        // sockets
        socket.on("connect", () => {
            console.log("a user has been connected.")
        });

        socket.on("chat", (data, userid) => {
            // console.log("message received");
            this.messages.push({
                userid: userid,
                username: data.user,
                message: data.chat,
                dtime: new Date()
            })
        });
    },
    methods: {
        sendmsg: function ()  {
            socket.emit("chat", {
                user: this.username,
                chat: this.dmessage
            })
        }
    }
});

let cryptpass = new Vue ({
    el: "#cryptpass",
    data: {
        password: "",
        hashpass: "",
        comparepass: "",
        bool: "False"
    },
    mounted: function () {},
    methods: {
        hashp: function () {
            // console.log(this.password);
            axios.post('/hashpass', {
                pass: this.password
            })
            .then((res) => {
                this.hashpass = res.data
            })
        },
        compare: function() {
            axios.post('/compare', {
                pass: this.comparepass,
                hashp: this.hashpass
            })
            .then((res) => {
                console.log(`pass match:  ${res.data} `);
                this.bool = res.data
            })
        }
    }
})


