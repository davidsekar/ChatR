var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RegisterUser = (function (_super) {
    __extends(RegisterUser, _super);
    function RegisterUser(props) {
        _super.call(this, props);
        this.state = { ErrorMessage: "", Percentage: 0 };
    }
    RegisterUser.prototype.vaildSubmission = function () {
        var email = $.trim(this.emailComp.value), name = $.trim(this.nameComp.value), password = $.trim(this.passwordComp.value), confirmPassword = $.trim(this.confirmPasswordComp.value);
        if (email === "" || name === "" || password === "" || confirmPassword === "") {
            this.setState({ ErrorMessage: "All fields are mandatory" });
            return false;
        }
        else if (password != confirmPassword) {
            this.setState({ ErrorMessage: "Password and confirm password should match" });
            return false;
        }
        else {
            this.registrationData = {
                email: email,
                name: name,
                password: password
            };
            this.setState({ ErrorMessage: "" });
        }
        return true;
    };
    RegisterUser.prototype.submitRegistration = function (e) {
        var _this = this;
        e.preventDefault();
        if (this.vaildSubmission()) {
            this.setState({ ErrorMessage: "", Percentage: 0 });
            $.ajax({
                method: "post",
                url: "/api/createuser",
                data: this.registrationData,
                dataType: "json"
            }).done(function (data) {
                _this.setState({ ErrorMessage: data.message, Percentage: 100 });
            });
        }
    };
    RegisterUser.prototype.componentDidMount = function () {
        this.setState({ Percentage: 100 });
    };
    RegisterUser.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null, React.createElement(ProgressBar, {autoIncrement: "true", percent: this.state.Percentage, onTop: "true"}), React.createElement("div", {className: "register-wrapper"}, React.createElement("form", {className: "block-group"}, React.createElement("h1", {className: "primary-heading"}, "Register"), React.createElement("div", {className: "block-group label"}, "Email: "), React.createElement("div", {className: "block-group field"}, React.createElement("input", {autoFocus: true, type: "text", placeholder: "Enter email address", ref: function (c) { _this.emailComp = c; }})), React.createElement("div", {className: "block-group label"}, "Name: "), React.createElement("div", {className: "block-group field"}, React.createElement("input", {type: "text", placeholder: "Display Name", ref: function (c) { _this.nameComp = c; }})), React.createElement("div", {className: "block-group label"}, "Password: "), React.createElement("div", {className: "block-group field"}, React.createElement("input", {type: "password", placeholder: "Password", ref: function (c) { _this.passwordComp = c; }})), React.createElement("div", {className: "block-group label"}, "Confirm Password: "), React.createElement("div", {className: "block-group field"}, React.createElement("input", {type: "password", placeholder: "Reenter password", ref: function (c) { _this.confirmPasswordComp = c; }})), React.createElement("div", {className: "block-group error-message block"}, this.state.ErrorMessage), React.createElement("div", {className: "block-group"}, React.createElement("a", {className: "btn", onClick: this.submitRegistration.bind(this), href: "#"}, "Register"), React.createElement(ReactRouter.Link, {className: "btn", to: "/chat/", href: "#"}, "Back to login"))))));
    };
    return RegisterUser;
}(React.Component));
