/// <reference path="../chatr.d.ts" />

class UserInfoPanel extends React.Component<IUserInfoPanelProps, IAppState>{
    constructor(props: IUserInfoPanelProps) {
        super(props);
    }

    render() {
        return (<div>
            <div>
                {this.props.UserInfo.access_token}
                <a className="btn" onClick={this.props.LogOut} href="#">Logout</a>
            </div>
        </div>);
    }
}
