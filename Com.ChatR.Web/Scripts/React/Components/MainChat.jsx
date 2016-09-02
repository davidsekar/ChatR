class MainChat extends React.component {
    getInitialState() {
        return {
            ChatHub: $.connection.ChatRHub,
            Messages: [],
            UserInitialized: false,
            UserName: '',
            UserId: '00000000-0000-0000-0000-000000000000',
            Users: [],
            RoomName: ''
        };
    }

    pushNewMessage(id, userId, userName, message, dateTime) {
        var msgs = this.state.Messages;
        msgs.push({
            Id: id,
            UserId: userId,
            UserName: userName,
            Message: message,
            DateTime: dateTime
        })
        this.setState({
            Messages: msgs
        });
    }

    pushUserList(userList) {
        this.setState({
            Users: userList
        });
    }

    componentWillMount() {
        this.state.ChatHub.client.pushNewMessage = this.pushNewMessage;
        this.state.ChatHub.client.pushUserList = this.pushUserList;
        $.connection.hub.start().done(function () {
            console.log('SignalR Hub Started!');
        });
    }

    initializeUser(userName) {
        var component = this;
        $.getJSON('./api/Chat/?userName=' + userName).then(function (userId) {
            component.setState({
                UserInitialized: true,
                UserName: userName,
                UserId: userId
            });
        });
    }

    initializeRoom(roomName) {
        var component = this;
        $.ajax({
            method: "post",
            url: "./api/createRoom",
            data: roomName,
            dataType: "json",
            contentType: "application/json; charset=utf-8"
        });
    }

    sendMessage(message) {
        var messageObj = {
            Id: '00000000-0000-0000-0000-000000000000',
            UserId: this.state.UserId,
            UserName: this.state.UserName,
            Message: message,
            DateTime: new Date()
        };
        $.ajax({
            method: 'post',
            url: './api/Chat/',
            data: JSON.stringify(messageObj),
            dataType: "json",
            contentType: "application/json; charset=utf-8"
        });
    }
    render() {
        if (this.state.UserInitialized) {
            return (<ChatWindow messages={this.state.Messages}
                                username={this.state.UserName}
                                userid={this.state.UserId}
                                sendmessage={this.sendMessage}
                                users={this.state.Users} />);
        }
        else {
            return (<ChatRoomInitialization initialize={this.initializeRoom } />);
        }
    }
}
