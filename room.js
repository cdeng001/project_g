class Room {

    static generateUniqueId(existingIds){
        var id;
        do{
            id = Math.random().toString(36).substr(2, 16);
        } while (existingIds.includes(id));
        return id;
    }

    constructor(existingIds=[]) {
        this.room_id = Room.generateUniqueId(existingIds);
    }
}

module.exports = Room;