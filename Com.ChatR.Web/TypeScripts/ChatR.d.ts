/// <reference path="../typings/index.d.ts" />

//State Definition
interface IAppState {
    UserLoggedIn?: boolean;
    ChatRoomInitialized?: boolean;
    ChatRoom?: IChatRoom;
    UserInfo?: IUserAuthInfo;
}

interface ISideBarState {
    rooms: Array<Object>;
}

interface ILoginState {
    ErrorMessage: string;
}

interface IRegisterState {
    ErrorMessage: string;
}

//Component props
interface IMainChatProps {
    initialize?: (param: any) => void;
}

interface ILoginFormProps {
    initialize?: (param: any) => void;
    loginUser?: (userName: string, password: string) => void;
}

interface IRegisterFormProps {
    initialize?: (param: any) => void;
}

//Data Member definition
interface IChatRoom {
    id: string;
    name: string;
    secretKey: string;
    isPrivate: boolean;
}

interface IloginInfo {

}

interface ICustomResultData {
    code: Number;
    isError: boolean;
    message: string;
}

interface IRegistrationInfo {
    email: string;
    name: string;
    password: string;
}

interface IUserAuthInfo {
    access_token: string;
    token_type: string;
    expires_in: number;
}