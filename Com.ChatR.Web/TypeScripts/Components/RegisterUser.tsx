/// <reference path="../chatr.d.ts" />
class RegisterUser extends React.Component<ILoginFormProps, IRegisterState> {
    constructor(props: IMainChatProps) {
        super(props);
        this.state = { ErrorMessage: "", Percentage: 0 };
    }

    private emailComp: HTMLInputElement;
    private nameComp: HTMLInputElement;
    private passwordComp: HTMLInputElement;
    private confirmPasswordComp: HTMLInputElement;

    private registrationData: IRegistrationInfo;

    private vaildSubmission(): boolean {
        var email = $.trim(this.emailComp.value),
            name = $.trim(this.nameComp.value),
            password = $.trim(this.passwordComp.value),
            confirmPassword = $.trim(this.confirmPasswordComp.value);

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
    }

    submitRegistration(e: Event) {
        e.preventDefault();

        if (this.vaildSubmission()) {
            this.setState({ ErrorMessage: "", Percentage: 0 })
            $.ajax({
                method: "post",
                url: "/api/createuser",
                data: this.registrationData,
                dataType: "json"
            }).done((data: ICustomResultData) => {
                this.setState({ ErrorMessage: data.message, Percentage: 100 });
            });
        }
    }
    componentDidMount() {
        this.setState({ Percentage: 100 });
    }

    render() {
        return (
            // <ReactDraggable>
            <div>
                <ProgressBar autoIncrement="true" percent={this.state.Percentage} onTop="true"/>
                <div className="register-wrapper">
                    <form className="block-group">
                        <h1 className="primary-heading">Register</h1>
                        <div className="block-group label">Email: </div>
                        <div className="block-group field">
                            <input autoFocus type="text" placeholder="Enter email address" ref={(c: HTMLInputElement) => { this.emailComp = c; } }/>
                        </div>
                        <div className="block-group label">Name: </div>
                        <div className="block-group field">
                            <input type="text" placeholder="Display Name" ref={(c: HTMLInputElement) => { this.nameComp = c; } }/>
                        </div>
                        <div className="block-group label">Password: </div>
                        <div className="block-group field">
                            <input type="password" placeholder="Password" ref={(c: HTMLInputElement) => { this.passwordComp = c; } }/>
                        </div>
                        <div className="block-group label">Confirm Password: </div>
                        <div className="block-group field">
                            <input type="password" placeholder="Reenter password" ref={(c: HTMLInputElement) => { this.confirmPasswordComp = c; } }/>
                        </div>
                        <div className="block-group error-message block">
                            {this.state.ErrorMessage}
                        </div>
                        <div className="block-group">
                            <a className="btn" onClick={this.submitRegistration.bind(this) } href="#">Register</a>
                            <ReactRouter.Link className="btn" to="/chat/" href="#">Back to login</ReactRouter.Link>
                        </div>
                    </form>
                </div>
            </div>
            // </ReactDraggable>
        );
    }
}