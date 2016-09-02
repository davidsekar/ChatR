/// <reference path="../chatr.d.ts" />
var ReactDraggable: any;
var Draggable = ReactDraggable;
class LoginForm extends React.Component<ILoginFormProps, ILoginState> {

    constructor(props: IMainChatProps) {
        super(props);
        this.state = { ErrorMessage: "" };
    }

    private emailComp: HTMLInputElement;
    private passwordComp: HTMLInputElement;

    login(e: Event) {
        var email = this.emailComp.value;
        var password = this.passwordComp.value;

        if ($.trim(email) === "" || $.trim(password) === "") {
            this.setState({ ErrorMessage: "username or password can not be blank." });
        } else {
            this.setState({ ErrorMessage: "" });
        }
        e.preventDefault();
    }

    clearForm(e: Event) {
        this.emailComp.value = "";
        this.passwordComp.value = "";
        this.setState({ ErrorMessage: "" });
        e.preventDefault();
    }

    render() {
        return (
            <Draggable>
                <div className="login-wrapper">
                    <form className="block-group">
                        <div className="block-group label">UserName: </div>
                        <div className="block-group field"><input type="text" ref={(c: HTMLInputElement) => { this.emailComp = c; } }/></div>
                        <div className="block-group label">Password: </div>
                        <div className="block-group field"><input type="text" ref={(c: HTMLInputElement) => { this.passwordComp = c; } }/></div>
                        <div className="error-message">{this.state.ErrorMessage}</div>
                        <a className="btn" href="#" onClick={this.login.bind(this) }>Login</a>
                        <a className="btn" onClick={this.clearForm.bind(this) } href="#">Clear</a> OR 
                        <a className="btn" href="#">Register</a>
                    </form>
                </div>
            </Draggable >
        );
    }
}