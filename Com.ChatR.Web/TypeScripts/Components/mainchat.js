var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ProgressBar = ReactProgressBarPlus;
var MainChat = (function (_super) {
    __extends(MainChat, _super);
    function MainChat(props) {
        _super.call(this, props);
        this.state = {
            UserLoggedIn: false,
            UserInfo: {},
            ChatRoom: {},
            ChatRoomInitialized: false,
            Percentage: 0
        };
        var previousAuth;
        previousAuth = store.get(app.constants.userAuthInfoKey);
        if (previousAuth) {
            this.state.UserInfo = previousAuth;
            this.state.UserLoggedIn = true;
        }
    }
    MainChat.prototype.loginUser = function (userName, password) {
        var _this = this;
        var data = "grant_type=password&username=" + userName + "&password=" + password;
        $.ajax({
            method: "post",
            url: "/oauth/token",
            data: data,
            dataType: "json",
            contentType: "application/x-www-form-urlencoded"
        }).done(function (data) {
            _this.setState({ UserLoggedIn: true, UserInfo: data });
            store.set(app.constants.userAuthInfoKey, data);
        });
    };
    MainChat.prototype.initializeRoom = function (room) {
        var _this = this;
        $.ajax({
            method: "post",
            url: "/api/createRoom",
            data: room,
            dataType: "json",
            headers: {
                "Authorization": this.state.UserInfo.token_type + " " + this.state.UserInfo.access_token
            }
        }).done(function (data) {
            _this.setState({ ChatRoomInitialized: true, ChatRoom: data });
        });
    };
    MainChat.prototype.initializeChatScreen = function () {
        alert("start chat");
    };
    MainChat.prototype.initializeUser = function (userName) {
    };
    MainChat.prototype.logoutUser = function (e) {
        e.preventDefault();
        store.remove(app.constants.userAuthInfoKey);
        this.setState({ UserLoggedIn: false, UserInfo: {} });
    };
    MainChat.prototype.componentDidMount = function () {
        this.setState({ Percentage: 100 });
    };
    MainChat.prototype.render = function () {
        var components;
        if (this.state.UserLoggedIn === false) {
            components = (React.createElement(LoginForm, {initialize: this.initializeUser.bind(this), loginUser: this.loginUser.bind(this)}));
        }
        else if (this.state.ChatRoomInitialized === false) {
            components = (React.createElement("div", {className: "block-group createroom-wrapper"}, React.createElement("div", {className: "block"}, React.createElement(UserInfoPanel, {UserInfo: this.state.UserInfo, LogOut: this.logoutUser.bind(this)})), React.createElement("div", {className: "block-group create-room"}, React.createElement(ChatRoomInitialization, {initialize: this.initializeRoom.bind(this)})), React.createElement("div", {className: "block-group list-rooms"}, React.createElement(ListRoomSideBar, null))));
        }
        else {
            components = (React.createElement(ChatScreen, {initialize: this.initializeChatScreen}));
        }
        return (React.createElement("div", null, React.createElement(ProgressBar, {autoIncrement: "true", percent: this.state.Percentage, onTop: "true"}), components));
    };
    return MainChat;
}(React.Component));
