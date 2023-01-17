import Event from "./Event.js"
import TBot from "./TBot.js"
import fs from 'fs'

class Logger{
    _path
    _notyfyByTypes
    _logByTypes


    /**
     * Конструктор для создания Logger
     * @constructor
     * @param {string} path - target file
     */
    constructor(path){
        this._path = path
    }

    /**
     * Получение пути до файла
     * @return {string} path of file
     */
    getPath(){
        return this._path
    }

    /**
     * Установка перечня типов событий для нотификаций
     * @param {Array<string>} arTypes array of types
     */
    setNotifyTypes(arTypes){
        this._notyfyByTypes = arTypes
    }

    /**
     * Получение перечня типов событий для нотификаций
     * @return {Array<string>} array of types
     */
    getNotifyTypes(){
        return this._notyfyByTypes
    }

    /**
     * Установка перечня типов событий для логирования
     * @param {Array<string>} arTypes array of types
     */
    setLogTypes(arTypes){
        this._logByTypes = arTypes
    }

    /**
     * Получение перечня типов событий для логирования
     * @return {Array<string>} array of types
     */
    getLogTypes(){
        return this._logByTypes
    }

    /**
     * Добавление события в логгер
     * @constructor
     * @param {Event} Event - instance of Event class
     * @param {TBot} TBot - instance of TBot class. Default false
     */
    async addEvent(Event, TBot = false){

        if(this._logByTypes.indexOf(Event._type) != -1){
            fs.appendFileSync(this._path, `[${new Date()}] TYPE: ${Event._type}; MSG: ${Event._message} \n`)
        }
        if(TBot){
            if(this._notyfyByTypes.indexOf(Event._type) != -1){
                const resPromise = TBot.sendMess(Event)
            }
        }
    }
}

export default Logger;