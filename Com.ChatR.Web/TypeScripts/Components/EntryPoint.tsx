/// <reference path="../chatr.d.ts" />
/// <reference path="mainchat.tsx" />
/// <reference path="registeruser.tsx" />

ReactDOM.render(
    <ReactRouter.Router history={ReactRouter.browserHistory}>
        <ReactRouter.Route path="/chat/" component={MainChat}/>
        <ReactRouter.Route path="/chat/register" component={RegisterUser}/>
    </ReactRouter.Router>, document.getElementById("container"));
