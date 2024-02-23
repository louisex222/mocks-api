const useGameTokenRoyal = (app,fs)=>{
    const dataPath ='./data/gameTokenRoyal.json';

    const param = {
        device: "Web",
        gameCode: "4",
        lang: "zh-tw",
        lobbyURL: "https://www.dev-mclub.com/close"
    }
    app.post('/api/Game/GetGameToken/W1Royal',(req,res)=>{
        req = param;
        fs.readFile(dataPath,'utf8',(err,data)=>{
            if(err) throw err;
            res.send(JSON.parse(data))
        })
    })
}

module.exports = useGameTokenRoyal;