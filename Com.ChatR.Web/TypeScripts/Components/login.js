var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ReactDraggable;
var Draggable = ReactDraggable;
var LoginForm = (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm(props) {
        _super.call(this, props);
        this.state = { ErrorMessage: "" };
    }
    LoginForm.prototype.login = function (e) {
        var email = this.emailComp.value;
        var password = this.passwordComp.value;
        if ($.trim(email) === "" || $.trim(password) === "") {
            this.setState({ ErrorMessage: "username or password can not be blank." });
        }
        else {
            this.setState({ ErrorMessage: "" });
        }
        e.preventDefault();
    };
    LoginForm.prototype.clearForm = function (e) {
        this.emailComp.value = "";
        this.passwordComp.value = "";
        this.setState({ ErrorMessage: "" });
        e.preventDefault();
    };
    LoginForm.prototype.render = function () {
        var _this = this;
        return (React.createElement(Draggable, null, React.createElement("div", {className: "login-wrapper"}, React.createElement("form", {className: "block-group"}, React.createElement("div", {className: "block-group label"}, "UserName: "), React.createElement("div", {className: "block-group field"}, React.createElement("input", {type: "text", ref: function (c) { _this.emailComp = c; }})), React.createElement("div", {className: "block-group label"}, "Password: "), React.createElement("div", {className: "block-group field"}, React.createElement("input", {type: "text", ref: function (c) { _this.passwordComp = c; }})), React.createElement("div", {className: "error-message"}, this.state.ErrorMessage), React.createElement("a", {className: "btn", href: "#", onClick: this.login.bind(this)}, "Login"), React.createElement("a", {className: "btn", onClick: this.clearForm.bind(this), href: "#"}, "Clear"), " OR", React.createElement("a", {className: "btn", href: "#"}, "Register")))));
    };
    return LoginForm;
}(React.Component));
