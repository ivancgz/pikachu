import string from './css.js'

const player = {
    id : undefined,
    n : 1,
    ui: {
        demo : document.querySelector('#demo'),
        demo2 : document.querySelector('#demo2')
    },
    time : 100,
    events : {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    init: ()=>{
        player.ui.demo.innerText = string.substr(0,player.n)
        player.ui.demo2.innerHTML = string.substr(0,player.n)
        player.play()
        player.bindEvents()
    },
    bindEvents: ()=>{
        for (let key in player.events) {
            if(player.events.hasOwnProperty(key)){
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run : ()=>{
        player.n+=1
        if(player.n > string.length){
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText = string.substr(0,player.n)
        player.ui.demo2.innerHTML = string.substr(0,player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play : ()=>{
        player.id = setInterval(player.run, player.time)
    },
    pause : ()=>{
        window.clearInterval(player.id)
    },
    fast : ()=>{
        player.pause()
        player.time = 0
        player.play()
    },
    slow : ()=>{
        player.pause()
        player.time = 300
        player.play()
    },
    normal : ()=>{
        player.pause()
        player.time = 100
        player.play()
    }
}

player.init()