class AlarmClock {
    constructor() {
        this.alarmCollection = []
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('ID не передан!')
        }

        // Есть ли уже существующий звонок
        if (this.alarmCollection.find(item => item.id === id)) {
            return console.error('Такой ID уже существует!')
        }
        callback()
        this.alarmCollection.push({time, callback, id})
    }

    removeClock(id) {
        let idx = this.alarmCollection.findIndex(item => item.id === id);
        if(this.alarmCollection.findIndex(item => item.id === id) === id - 1) {
            this.alarmCollection.splice(idx, 1)
            return `Успешно удалено время!`
        } else {
            console.error(`АШИПКА!`)
        }
    }

    getCurrentFormattedTime() {
        return `${new Date().getHours()}:${new Date().getMinutes()}`
    }

    start() {
        let date = new Date();
        let nowHours = date.getHours();
        let nowMinutes = date.getMinutes();
        function checkAlarm(call) {
            if (`${nowHours}:${nowMinutes}` === call.time) {
                callback()
            }
        }
        if(!this.timerId) {
            this.timerId = setInterval (this.alarmCollection.forEach(item => checkAlarm(item)), 1000)
        }
    }

    stop() {
        if(this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(item => console.log(item.time, item.id));
    }

    clearAlarms() {
        this.stop()
        for(let i = 0; i <= this.alarmCollection.length; i += 1) {
            this.alarmCollection = [];
        }
    }
}