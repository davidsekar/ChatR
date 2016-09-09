/// <reference path="createroom.tsx" />

var ProgressBar = ReactProgressBarPlus;

class MainChat extends React.Component<IMainChatProps, IAppState> {
    constructor(props: IMainChatProps) {
        super(props);

        this.state = {
            UserLoggedIn: false,
            UserInfo: {} as IUserAuthInfo,
            ChatRoom: {} as IChatRoom,
            ChatRoomInitialized: false,
            Percentage : 0
        };

        // set if the local storage has auth info
        var previousAuth: IUserAuthInfo;
        previousAuth = store.get(app.constants.userAuthInfoKey);
        if (previousAuth) {
            this.state.UserInfo = previousAuth;
            this.state.UserLoggedIn = true;
        }
    }

    // login Methods
    loginUser(userName: string, password: string) {
        var data = "grant_type=password&username=" + userName + "&password=" + password;
        $.ajax({
            method: "post",
            url: "/oauth/token",
            data: data,
            dataType: "json",
            contentType: "application/x-www-form-urlencoded"
        }).done((data: IUserAuthInfo) => {
            this.setState({ UserLoggedIn: true, UserInfo: data });
            store.set(app.constants.userAuthInfoKey, data);
        });
    }

    initializeRoom(room: IChatRoom) {
        $.ajax({
            method: "post",
            url: "/api/createRoom",
            data: room,
            dataType: "json",
            headers: {
                "Authorization": this.state.UserInfo.token_type + " " + this.state.UserInfo.access_token
            }
        }).done((data: IChatRoom) => {
            this.setState({ ChatRoomInitialized: true, ChatRoom: data });
        });
    }

    initializeChatScreen() {
        alert("start chat");
    }

    initializeUser(userName: string) {
        // this.setState({ UserName: userName, UserLoggedIn: true });
    }

    logoutUser(e: Event) {
        e.preventDefault();

        store.remove(app.constants.userAuthInfoKey);
        this.setState({ UserLoggedIn: false, UserInfo: {} as IUserAuthInfo });
    }

    componentDidMount() {
        this.setState({ Percentage: 100 });
    }

    render() {
        var components;
        if (this.state.UserLoggedIn === false) {
            components = (<LoginForm initialize={this.initializeUser.bind(this) } loginUser={this.loginUser.bind(this) }/>);
        } else if (this.state.ChatRoomInitialized === false) {
            components = (<div className="block-group createroom-wrapper">
                <div className="block">
                    <UserInfoPanel UserInfo={this.state.UserInfo} LogOut={this.logoutUser.bind(this) }/>
                </div>
                <div className="block-group create-room">
                    <ChatRoomInitialization initialize={this.initializeRoom.bind(this) } />
                </div>
                <div className="block-group list-rooms">
                    <ListRoomSideBar/>
                </div>
            </div>);
        } else {
            components = (<ChatScreen initialize={this.initializeChatScreen}/>);
        }

        return (
            <div>
                <ProgressBar autoIncrement="true" percent={this.state.Percentage} onTop="true"/>
                {components}
            </div>
        );
    }
}

