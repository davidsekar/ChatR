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
        return (
            <div>
                <form className="block-group">
                    <div className="primary-heading">Create a chat room</div>
                    <div className="block-group label">Enter Room name: </div>
                    <div className="block-group field"><input type="text" data-chatroomname /></div>
                    <div className="block-group label">Private: </div>
                    <div className="block-group field"><input type="checkbox" data-isprivate/></div>
                    <div className="block-group label">Secret Key: </div>
                    <div className="block-group field"><input type="text" data-secretkey/></div>
                    <div className="block">
                        <a className="btn" onClick={this.initializeChatRoom} href="#">Create Room!</a>
                    </div>
                </form>
            </div>);
    }
}