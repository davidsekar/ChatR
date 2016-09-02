/// <reference path="createroom.tsx" />

class MainChat extends React.Component<IMainChatProps, IAppState> {
    constructor(props: IMainChatProps) {
        super(props);
        this.state = {
            UserLoggedIn: false,
            userInfo: {} as any,
            UserName: "",
            ChatRoom: {} as IChatRoom,
            ChatRoomInitialized: false
        };
    }

    //Login Methods
    loginUser() {
        $.ajax({
            method: "post",
            url: "./api/loginUser",
            data: {},
            dataType: "json"
        }).done((data: IChatRoom) => {
            this.setState({ UserLoggedIn: true, ChatRoom: data });
        });
    }

    initializeRoom(room: IChatRoom) {
        $.ajax({
            method: "post",
            url: "./api/createRoom",
            data: room,
            dataType: "json"
        }).done((data: IChatRoom) => {
            this.setState({ ChatRoomInitialized: true, ChatRoom: data });
        });
    }

    initializeChatScreen() {
        alert("start chat");
    }

    initializeUser(userName: string) {
        this.setState({ UserName: userName, UserLoggedIn: true });
    }

    render() {
        if (this.state.UserLoggedIn === false) {
            return (<LoginForm initialize={this.initializeUser.bind(this) } loginUser={this.loginUser.bind(this) }/>);
        } else if (this.state.ChatRoomInitialized == false) {
            return (<ChatRoomInitialization initialize={this.initializeRoom.bind(this) } />);
        } else {
            return (<ChatScreen initialize={this.initializeChatScreen}/>);
        }
    }
}

