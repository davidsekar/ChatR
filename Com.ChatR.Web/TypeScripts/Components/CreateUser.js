var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CreateUser = (function (_super) {
    __extends(CreateUser, _super);
    function CreateUser(props) {
        var _this = this;
        _super.call(this, props);
        this.initializeUser = function () {
            var currentElem = $(ReactDOM.findDOMNode(_this));
            var username = currentElem.find("input[data-chatname]");
            _this.props.initialize(username);
        };
    }
    CreateUser.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("input", {"data-chatname": true, type: "text", placeholder: "Enter a chat name"}), " ", React.createElement("br", null), React.createElement("a", {onClick: this.initializeUser, href: "#"}, "Create User")));
    };
    return CreateUser;
}(React.Component));
