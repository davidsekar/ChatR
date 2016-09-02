/// <reference path="../chatr.d.ts" />
class RegisterUser extends React.Component<IMainChatProps, IAppState> {
    constructor(props: IMainChatProps) {
        super(props);
    }

    vaildSubmission() {
        let emailCtrl = ReactDOM.findDOMNode(this.refs["email"]) as HTMLInputElement;
        let email = emailCtrl.value;


    }

    render() {
        return (
            <div>
                <h1>Register new user</h1>
                <div>Email: <input type="text" ref="email"/></div>
                <div>User Name: <input type="text" ref="username"/></div>
                <div>Password: <input type="password" ref="password"/></div>
                <div>Confirm Password: <input type="password" ref="confirmpassword"/></div>
                <a onClick={this.vaildSubmission.bind(this)} href="#">Register</a>
            </div>
        );
    }
}