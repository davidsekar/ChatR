var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MainChat = (function (_super) {
    __extends(MainChat, _super);
    function MainChat(props) {
        _super.call(this, props);
        this.state = {
            UserLoggedIn: false,
            userInfo: {},
            UserName: "",
            ChatRoom: {},
            ChatRoomInitialized: false
        };
    }
    MainChat.prototype.loginUser = function () {
        var _this = this;
        $.ajax({
            method: "post",
            url: "./api/loginUser",
            data: {},
            dataType: "json"
        }).done(function (data) {
            _this.setState({ UserLoggedIn: true, ChatRoom: data });
        });
    };
    MainChat.prototype.initializeRoom = function (room) {
        var _this = this;
        $.ajax({
            method: "post",
            url: "./api/createRoom",
            data: room,
            dataType: "json"
        }).done(function (data) {
            _this.setState({ ChatRoomInitialized: true, ChatRoom: data });
        });
    };
    MainChat.prototype.initializeChatScreen = function () {
        alert("start chat");
    };
    MainChat.prototype.initializeUser = function (userName) {
        this.setState({ UserName: userName, UserLoggedIn: true });
    };
    MainChat.prototype.render = function () {
        if (this.state.UserLoggedIn === false) {
            return (React.createElement(LoginForm, {initialize: this.initializeUser.bind(this), loginUser: this.loginUser.bind(this)}));
        }
        else if (this.state.ChatRoomInitialized == false) {
            return (React.createElement(ChatRoomInitialization, {initialize: this.initializeRoom.bind(this)}));
        }
        else {
            return (React.createElement(ChatScreen, {initialize: this.initializeChatScreen}));
        }
    };
    return MainChat;
}(React.Component));
