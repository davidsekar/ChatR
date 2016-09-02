/// <reference path="../typings/index.d.ts" />

interface IAppState {
    UserLoggedIn?: boolean;
    ChatRoomInitialized?: boolean;
    ChatRoom?: IChatRoom;
    UserName?: string;
    userInfo?: any;
}

interface IMainChatProps {
    initialize?: (param: any) => void;
}

interface ISideBarState {
    rooms: Array<Object>;
}

interface IChatRoom {
    id: string;
    name: string;
    secretKey: string;
    isPrivate: boolean;
}

interface ILoginState {
    ErrorMessage: string;
}


interface ILoginFormProps {
    initialize?: (param: any) => void;
    loginUser?: (param: any) => void;
}

interface IloginInfo {
    
}