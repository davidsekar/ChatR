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
            dataType: "json"
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
        return this.state.rooms.length > 0 ?
            (<ul>
                { this.state.rooms.map((listValue: IChatRoom) => {
                    return (
                        <li key={listValue.id}>
                            <a onClick={this.enterRoom.bind(this, listValue.id) } href="#">{listValue.name}</a>
                        </li>
                    );
                }) }
            </ul>) : (<div>No rooms created yet</div>);
    }
}