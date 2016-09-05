var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LoginForm = (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm(props) {
        _super.call(this, props);
        this.state = { ErrorMessage: "" };
    }
    LoginForm.prototype.login = function (e) {
        e.preventDefault();
        var email = $.trim(this.emailComp.value);
        var password = $.trim(this.passwordComp.value);
        if (email === "" || password === "") {
            this.setState({ ErrorMessage: "Email or Password can not be blank." });
            return;
        }
        else {
            this.setState({ ErrorMessage: "" });
        }
        this.props.loginUser(email, password);
    };
    LoginForm.prototype.clearForm = function (e) {
        this.emailComp.value = "";
        this.passwordComp.value = "";
        this.setState({ ErrorMessage: "" });
        e.preventDefault();
    };
    LoginForm.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", {className: "login-wrapper"}, React.createElement("form", {className: "block-group"}, React.createElement("div", {className: "primary-heading"}, "Login"), React.createElement("div", {className: "block-group label"}, "Email: "), React.createElement("div", {className: "block-group field"}, React.createElement("input", {autoFocus: true, placeholder: "Email", type: "text", ref: function (c) { _this.emailComp = c; }})), React.createElement("div", {className: "block-group label"}, "Password: "), React.createElement("div", {className: "block-group field"}, React.createElement("input", {type: "password", placeholder: "Password", ref: function (c) { _this.passwordComp = c; }})), React.createElement("div", {className: "block-group error-message block"}, this.state.ErrorMessage), React.createElement("div", {className: "block-group"}, React.createElement("a", {className: "btn", href: "#", onClick: this.login.bind(this)}, "Login"), React.createElement("a", {className: "btn", onClick: this.clearForm.bind(this), href: "#"}, "Clear"), " OR", React.createElement(ReactRouter.Link, {className: "btn", to: "/chat/register"}, "Register")))));
    };
    return LoginForm;
}(React.Component));
