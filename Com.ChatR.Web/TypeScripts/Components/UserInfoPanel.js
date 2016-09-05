var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UserInfoPanel = (function (_super) {
    __extends(UserInfoPanel, _super);
    function UserInfoPanel(props) {
        _super.call(this, props);
    }
    UserInfoPanel.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("div", null, this.props.UserInfo.access_token, React.createElement("a", {className: "btn", onClick: this.props.LogOut, href: "#"}, "Logout"))));
    };
    return UserInfoPanel;
}(React.Component));
