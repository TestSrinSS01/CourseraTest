const Bot = new Discord.Client()
Bot.on('ready', ()=>{
    document.write(`${Bot.user.username} logged in!!!`)
})
Bot.on('message', msg =>{
    if (msg.content === 'Hi') msg.channel.send('Hello')
})
Bot.login('NzU2MTQxNjk5ODQzMjI3NzAx.X2Nh1Q.qSu49mfvzf8Orlxn3zYqiisH4AA').then(console.log)
//https://testsrinss01.github.io/CourseraTest/Bot/Start.html