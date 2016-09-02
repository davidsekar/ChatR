/// <reference path="../chatr.d.ts" />
class CreateUser extends React.Component<IMainChatProps, IAppState> {
    public state: IAppState;
    constructor(props: IMainChatProps) {
        super(props);
    }

    initializeUser = () => {
        var currentElem = $(ReactDOM.findDOMNode(this));
        var username = currentElem.find("input[data-chatname]");
        this.props.initialize(username);
    }

    render() {
        return (
            <div>
                <input data-chatname type="text" placeholder="Enter a chat name"/> <br/>
                <a onClick={this.initializeUser} href="#">Create User</a>
            </div>
        );
    }
}