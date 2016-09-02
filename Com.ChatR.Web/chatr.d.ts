/// <reference path="TypeScripts/ChatR.d.ts" />
declare module "CreateRoom" {
    class ChatRoomInitialization extends React.Component<IChatProps, IAppState> {
        state: IAppState;
        initializeChatRoom(): void;
        render(): JSX.Element;
    }
    export { ChatRoomInitialization };
}
declare module "MainChat" {
    class MainChat extends React.Component<IMainChatProps, IAppState> {
        constructor(props: IMainChatProps);
        initializeRoom(roomName: string): void;
        render(): JSX.Element;
    }
    export { MainChat };
}
declare module "EntryPoint" {
}
