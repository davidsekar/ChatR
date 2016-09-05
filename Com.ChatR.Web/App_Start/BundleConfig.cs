using System.Web.Optimization;

namespace Com.ChatR.Web
{
    public static class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new Bundle("~/bundles/signalr").Include(
                new string[] {
                    "~/Scripts/jquery-{version}.js",
                    "~/Scripts/jquery.signalR-{version}.js"
                }
            ));

            bundles.Add(new Bundle("~/bundles/react").Include(
                new string[]
                {
                    "~/Scripts/external/store.js",
                    "~/Scripts/React/react.js",
                    "~/Scripts/React/react-with-addons.js",
                    "~/Scripts/React/react-dom.js",
                    "~/Scripts/external/ReactRouter.js",
                    "~/Scripts/external/react-draggable.js",
                    "~/Scripts/external/react-progress-bar-plus.js"
                }
            ));

            bundles.Add(new ScriptBundle("~/bundles/chatr").Include(
                new string[]{
                    "~/Typescripts/constants.js",
                    "~/Typescripts/components/ListRoomsSideBar.js",
                    "~/Typescripts/components/CreateRoom.js",
                    "~/Typescripts/components/CreateUser.js",
                    "~/Typescripts/components/ChatScreen.js",
                    "~/Typescripts/components/login.js",
                    "~/Typescripts/components/RegisterUser.js",
                    "~/Typescripts/components/UserInfoPanel.js",
                    "~/Typescripts/components/MainChat.js",
                    "~/Typescripts/components/EntryPoint.js"
                }
            ));
        }
    }
}