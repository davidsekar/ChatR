class ChatInitialization extends React.Component {
    initializeUser() {
        var $userNameInput = $(ReactDOM.findDOMNode(this)).find('input[data-username]');
        var userName = $userNameInput.val();
        this.props.initialize(userName);
    }
    render() {
        return ( <div>
            Enter the user name:
                        <input type='text' data-username /> &nbsp;
            <a onClick={this.initializeUser} href='#'>Start Chatting!</a>
        </div>);
    }
}