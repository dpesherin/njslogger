# Logger for NodeJS projects
## Возможности
- Создание событий
- Создание подключения к боту телеграмм
- Создание фильтров событий логирования и нотификации
- Запись логов в файл .txt .log


## Создание объекта Логгера

```js
import Logger from "./njslogger/src/Logger.js"
const logger = new Logger('./log.txt') //Путь до файла с логами
```

## Установка типов событий

```js
logger.setLogTypes(['error', 'warning', 'invasion']) //Произвольные типы события, которые хотите предусмотреть
logger.setNotifyTypes(['error', 'invasion'])
```

## Создание события

```js
import Event from "./njslogger/src/Event.js"
const event = new Event('error', "Test message") // new Event(type, message)
```

## Создание подключения до бота телеграмм

```js
import TBot from "./njslogger/src/TBot.js"
const bot = new TBot('57*****584:AAEZM7i***************pKjxu43JiROe6o', '4*******') // new TBot(token, chatID)
```

## Создание записи лога

```js
logger.addEvent(event, bot) // addEvent(event: Event, bot: TBot = false)
```

Внутри метода производится проверка на вхождение в фильтры и необходимость записи в файл, а так же отправки

## Полная процедура 

```js
import Logger from "./njslogger/src/Logger.js"
import Event from "./njslogger/src/Event.js"
import TBot from "./njslogger/src/TBot.js"

const logger = new Logger('./log.txt')
logger.setLogTypes(['error', 'warning', 'invasion'])
logger.setNotifyTypes(['error', 'invasion'])

//Если не нужна отправка в телеграмм
const event = new Event('error', "Test message")
logger.addEvent(event)

//Если нужна отправка в телеграмм
const bot = new TBot('57*****584:AAEZM7i***************pKjxu43JiROe6o', '4*******')

const event = new Event('error', "Test message")
logger.addEvent(event, bot)
```

## Зависимости
|Package|npm link|
|----|----|
|axios|npm i axios|

## License
### MIT