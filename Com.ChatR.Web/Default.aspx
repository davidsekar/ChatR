<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Com.ChatR.Web.Default" %>

<!DOCTYPE html>
<html>
<head>
    <title>React Chat</title>
    <link rel="stylesheet" href="Style/main.css" />
    <%: System.Web.Optimization.Scripts.Render("~/bundles/signalr") %>
    <script src="signalr/hubs"></script>
</head>
<body>
    <div id="container"></div>
    <%: System.Web.Optimization.Scripts.Render("~/bundles/react") %>
    <%: System.Web.Optimization.Scripts.Render("~/bundles/chatr") %>    
</body>
</html>
