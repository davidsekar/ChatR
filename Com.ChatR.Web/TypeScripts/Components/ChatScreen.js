var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ChatScreen = (function (_super) {
    __extends(ChatScreen, _super);
    function ChatScreen(props) {
        _super.call(this, props);
    }
    ChatScreen.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("div", null, "User Name: "), React.createElement("div", null, "Chat Room: "), React.createElement("div", null)));
    };
    return ChatScreen;
}(React.Component));
