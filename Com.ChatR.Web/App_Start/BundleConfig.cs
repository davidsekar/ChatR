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
                    "~/Scripts/React/react.js",
                    "~/Scripts/React/react-dom.js",
                    "~/Scripts/React/react-with-addons.js",
                    "~/Scripts/external/react-draggable.js"
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
                    "~/Typescripts/components/MainChat.js",
                    "~/Typescripts/components/EntryPoint.js"
                }
            ));
        }
    }
}