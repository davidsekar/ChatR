var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ListRoomSideBar = (function (_super) {
    __extends(ListRoomSideBar, _super);
    function ListRoomSideBar(props) {
        _super.call(this, props);
        this.state = {
            rooms: []
        };
    }
    ListRoomSideBar.prototype.componentDidMount = function () {
        var _this = this;
        $.ajax({
            method: "get",
            url: "/api/rooms/all",
            dataType: "json",
        }).done(function (data) {
            _this.setState({ rooms: data });
        }).fail(function (error) {
            console.log(error.message);
        });
    };
    ListRoomSideBar.prototype.enterRoom = function (id) {
        alert(id);
    };
    ListRoomSideBar.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", {className: ""}, React.createElement("div", {className: "primary-heading"}, "Rooms"), this.state.rooms.length > 0 ?
            (React.createElement("ul", null, this.state.rooms.map(function (listValue) {
                return (React.createElement("li", {key: listValue.id}, React.createElement("a", {onClick: _this.enterRoom.bind(_this, listValue.id), href: "#"}, listValue.name)));
            }))) : (React.createElement("div", {className: "error-message"}, "No rooms created yet"))));
    };
    return ListRoomSideBar;
}(React.Component));
