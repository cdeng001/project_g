
var Room = require('./room');

class RoomController {
    constructor() {
        this._rooms = {};
    }

    generateUniqueId(){
        var id, keys = this.getRoomIds();
        do{
            id = Math.random().toString(36).substr(2, 16);
        } while (keys.includes(id));
        return id;
    }

    getRoomIds(){
        return Object.keys(this._rooms);
    }

    createRoom(host){
        let id = this.generateUniqueId();
        let room = new Room(id, host);
        this._rooms[id] = room;
        return id;
    }

    joinRoomById(id, player){
        let room = null;

        return room;
    }

    joinRoomByRandom(player){
        let room = null

        return room;
    }

    getRoomById(id){
        let room = null;
        if(this._rooms.hasOwnProperty(id)){
            room = this._rooms[id];
        }
        return room;
    }
}

module.exports = RoomController;