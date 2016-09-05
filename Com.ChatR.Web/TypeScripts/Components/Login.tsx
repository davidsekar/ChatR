/// <reference path="../chatr.d.ts" />
// var ReactDraggable: any;
class LoginForm extends React.Component<ILoginFormProps, ILoginState> {

    constructor(props: IMainChatProps) {
        super(props);
        this.state = { ErrorMessage: "" };
    }

    private emailComp: HTMLInputElement;
    private passwordComp: HTMLInputElement;

    login(e: Event) {
        e.preventDefault();

        var email = $.trim(this.emailComp.value);
        var password = $.trim(this.passwordComp.value);

        if (email === "" || password === "") {
            this.setState({ ErrorMessage: "Email or Password can not be blank." });
            return;
        } else {
            this.setState({ ErrorMessage: "" });
        }

        this.props.loginUser(email, password);
    }

    clearForm(e: Event) {
        this.emailComp.value = "";
        this.passwordComp.value = "";
        this.setState({ ErrorMessage: "" });
        e.preventDefault();
    }

    render() {
        return (
            // <ReactDraggable>
            <div className="login-wrapper">
                <form className="block-group">
                    <div className="primary-heading">Login</div>
                    <div className="block-group label">Email: </div>
                    <div className="block-group field">
                        <input autoFocus placeholder="Email" type="text" ref={(c: HTMLInputElement) => { this.emailComp = c; } }/>
                    </div>
                    <div className="block-group label">Password: </div>
                    <div className="block-group field">
                        <input type="password" placeholder="Password" ref={(c: HTMLInputElement) => { this.passwordComp = c; } }/>
                    </div>
                    <div className="block-group error-message block">{this.state.ErrorMessage}</div>
                    <div className="block-group">
                        <a className="btn" href="#" onClick={this.login.bind(this) }>Login</a>
                        <a className="btn" onClick={this.clearForm.bind(this) } href="#">Clear</a> OR
                        <ReactRouter.Link className="btn" to="/chat/register">Register</ReactRouter.Link>
                    </div>
                </form>
            </div >
            // </ReactDraggable>
        );
    }
}