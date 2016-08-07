var ChatWindow = React.createClass({
    
    sendMessage: function () {
        var $messageInput = $(ReactDOM.findDOMNode(this)).find('input[data-message]');
        var message = $messageInput.val();                
        this.props.sendmessage(message);
        $messageInput.val('');
    },            

	componentDidUpdate: function () {
		var $messageInput = $(ReactDOM.findDOMNode(this)).find('div[data-messages]');
		if($messageInput.length) {			
			$messageInput[0].scrollTop = $messageInput[0].scrollHeight;
		}		
	},

    render: function () {
        var items = [];
        var i=0;
        var userId;
                
        if(this.props.messages.length) {
            for(;i<this.props.messages.length;i++) {
                userId = this.props.messages[i].UserId;
                items.push(<ChatItem 
                                username={this.props.messages[i].UserName}
                                datetime={this.props.messages[i].DateTime} 
                                source={(userId === this.props.userid) ? 'client' : 'server'} 
                                text={this.props.messages[i].Message} key={i} 
                            />);
            }
        }
                
        return ( <div>
					<div style={{overflow:'hidden'}}> 
						<div data-messages className={'messagesDiv'}>{items}</div> 
						<UserList users = {this.props.users}/>
					</div>
                    <div style={{display:'block',width:'400px'}}>Message: <input type='text' data-message/> &nbsp; <a onClick={this.sendMessage} href='#'>Send</a></div>
                </div>
            );
    }

});