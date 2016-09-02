/// <reference path="../constants.ts" />
/// <reference path="../chatr.d.ts" />

class ChatRoomInitialization extends React.Component<IMainChatProps, IAppState> {
    public state: IAppState;
    initializeChatRoom = () => {
        var currentElem = $(ReactDOM.findDOMNode(this));
        var roomInfo: IChatRoom;
        roomInfo = {
            id: app.constants.emptyGuid,
            name: currentElem.find("input[data-chatroomname]").val(),
            secretKey: currentElem.find("input[data-secretkey]").val(),
            isPrivate: currentElem.find("input[data-isprivate]").is(":checked")
        };
        this.props.initialize(roomInfo);
    };
    render() {
        return (<div>
            <div>
                <div>Enter Room name: <input type="text" data-chatroomname /></div>
                <div>Private: <input type="checkbox" data-isprivate/></div>
                <div>Secret Key: <input type="text" data-secretkey/></div>
                <a onClick={this.initializeChatRoom} href="#">Create Room!</a>
            </div>
            <ListRoomSideBar/>
        </div>);
    }
}