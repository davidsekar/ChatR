/// <reference path="../chatr.d.ts" />
class ListRoomSideBar extends React.Component<IMainChatProps, ISideBarState> {
    public state: ISideBarState;

    constructor(props: IMainChatProps) {
        super(props);
        this.state = {
            rooms: []
        };
    }

    componentDidMount() {
        $.ajax({
            method: "get",
            url: "/api/rooms/all",
            dataType: "json",
            //headers: {
            //    "Authorization": this.state.userInfo.token_type + " " + this.state.userInfo.access_token
            //}
        }).done((data) => {
            this.setState({ rooms: data });
        }).fail(function (error) {
            console.log(error.message);
        });
    }

    enterRoom(id: string) {
        alert(id);
    }

    render() {
        return (
            <div className="">
                <div className="primary-heading">Rooms</div>
                {this.state.rooms.length > 0 ?
                    (<ul>
                        { this.state.rooms.map((listValue: IChatRoom) => {
                            return (
                                <li key={listValue.id}>
                                    <a onClick={this.enterRoom.bind(this, listValue.id) } href="#">{listValue.name}</a>
                                </li>
                            );
                        }) }
                    </ul>) : (<div className="error-message">No rooms created yet</div>) }
            </div>);
    }
}