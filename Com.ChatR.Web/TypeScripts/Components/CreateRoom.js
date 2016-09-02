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
        return (React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, "Enter Room name: ", React.createElement("input", {type: "text", "data-chatroomname": true})), React.createElement("div", null, "Private: ", React.createElement("input", {type: "checkbox", "data-isprivate": true})), React.createElement("div", null, "Secret Key: ", React.createElement("input", {type: "text", "data-secretkey": true})), React.createElement("a", {onClick: this.initializeChatRoom, href: "#"}, "Create Room!")), React.createElement(ListRoomSideBar, null)));
    };
    return ChatRoomInitialization;
}(React.Component));
