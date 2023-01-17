import Event from "./Event.js"
import axios from 'axios'

class TBot{
    _token
    _chatId


    /**
     * Конструктор для создания TBot
     * @constructor
     * @param {string} token - Bot token from BotFather
     * @param {string} chatID - id of chat in telegramm
     */
    constructor(token, chatID){
        this._token = token
        this._chatId = chatID
    }

    /**
     * Отправка сообщения
     * @param {Event} Event - instance of Event class
     */
    async sendMess(Event){
        let fields = [
            '<b>Тип:</b> ' + Event._type,
            '<b>Сообщение:</b> ' + Event._message
        ]

        let msg = ''

        fields.forEach(field => {
            msg += field + '\n'
        })

        msg = encodeURI(msg)

        axios.post(`https://api.telegram.org/bot${this._token}/sendMessage?chat_id=${this._chatId}&parse_mode=html&text=${msg}`)
        .catch((err)=>{
            console.log(new Error(err))
        })
        
    }
}

export default TBot