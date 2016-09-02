class ChatRoomInitialization extends React.Component {
    initializeChatRoom() {
        var $roomNameInput = $(ReactDOM.findDOMNode(this)).find('input[data-chatroomname]');
        var roomName = $roomNameInput.val();
        this.props.initialize(roomName);
    }
    render() {
        return ( <div>
            Enter Room name:
                        <input type='text' data-chatroomname /> &nbsp;
        <a onClick={this.initializeChatRoom} href='#'>Create Room!</a>
    </div>);
    }
}