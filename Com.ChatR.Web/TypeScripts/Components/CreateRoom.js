var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ChatRoomInitialization = (function (_super) {
    __extends(ChatRoomInitialization, _super);
    function ChatRoomInitialization() {
        var _this = this;
        _super.apply(this, arguments);
        this.initializeChatRoom = function () {
            var currentElem = $(ReactDOM.findDOMNode(_this));
            var roomInfo;
            roomInfo = {
                id: app.constants.emptyGuid,
                name: currentElem.find("input[data-chatroomname]").val(),
                secretKey: currentElem.find("input[data-secretkey]").val(),
                isPrivate: currentElem.find("input[data-isprivate]").is(":checked")
            };
            _this.props.initialize(roomInfo);
        };
    }
    ChatRoomInitialization.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("form", {className: "block-group"}, React.createElement("div", {className: "primary-heading"}, "Create a chat room"), React.createElement("div", {className: "block-group label"}, "Enter Room name: "), React.createElement("div", {className: "block-group field"}, React.createElement("input", {type: "text", "data-chatroomname": true})), React.createElement("div", {className: "block-group label"}, "Private: "), React.createElement("div", {className: "block-group field"}, React.createElement("input", {type: "checkbox", "data-isprivate": true})), React.createElement("div", {className: "block-group label"}, "Secret Key: "), React.createElement("div", {className: "block-group field"}, React.createElement("input", {type: "text", "data-secretkey": true})), React.createElement("div", {className: "block"}, React.createElement("a", {className: "btn", onClick: this.initializeChatRoom, href: "#"}, "Create Room!")))));
    };
    return ChatRoomInitialization;
}(React.Component));
