class Event{
    _type
    _message

    /**
     * Конструктор для создания Event
     * @constructor
     * @param {string} type - type of Event
     * @param {string} message - message of Event
     */
    constructor(type, message){
        this._type = type
        this._message = message
    }
}

export default Event