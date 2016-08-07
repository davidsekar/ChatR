var ChatItem = React.createClass({
    
    render: function () {
        var itemStyle = 'chatItem';
        var userNameStyle = (this.props.source === 'client') ? 'clientUserName' : 'serverUserName';
        var messageStyle = (this.props.source === 'client') ? 'clientMessage' : 'serverMessage';

        return ( <div>
                    <div className={itemStyle}>
                        <div className={userNameStyle}>{this.props.username}</div>
                        <div className={messageStyle}>{this.props.text}</div>
                    </div>
                </div> 
            );
    }

});