class Room {

    constructor(id, host) {
        this.room_id = id;
        this.host = host;
        this.capacity = 5;
        this.max_capacity = 5;
        this.players = [host];
        this.closed = false;
        this.active = false;
        
        this.mode = null;               //boss, pvp
        this.map = null;                //map_id
    }
}

module.exports = Room;