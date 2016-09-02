var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RegisterUser = (function (_super) {
    __extends(RegisterUser, _super);
    function RegisterUser(props) {
        _super.call(this, props);
    }
    RegisterUser.prototype.vaildSubmission = function () {
        var emailCtrl = ReactDOM.findDOMNode(this.refs["email"]);
        var email = emailCtrl.value;
    };
    RegisterUser.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("h1", null, "Register new user"), React.createElement("div", null, "Email: ", React.createElement("input", {type: "text", ref: "email"})), React.createElement("div", null, "User Name: ", React.createElement("input", {type: "text", ref: "username"})), React.createElement("div", null, "Password: ", React.createElement("input", {type: "password", ref: "password"})), React.createElement("div", null, "Confirm Password: ", React.createElement("input", {type: "password", ref: "confirmpassword"})), React.createElement("a", {onClick: this.vaildSubmission.bind(this), href: "#"}, "Register")));
    };
    return RegisterUser;
}(React.Component));
