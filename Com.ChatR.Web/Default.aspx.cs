using System;

namespace Com.ChatR.Web
{
    public partial class Default1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.Redirect("~/chat");
        }
    }
}