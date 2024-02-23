const useGameToken = (app,fs)=>{
    const dataPath ='./data/gameToken.json';

    const param = {
        Desk: "BlueVersionLobby",
        WebId: "Web",
        device: "Web",
        lang: "zh-tw",
        lobbyURL: "https://www.dev-mclub.com/close"
    }
    app.post('/api/Game/GetGameToken/W1RCGv2',(req,res)=>{
        req = param;
        fs.readFile(dataPath,'utf8',(err,data)=>{
            if(err) throw err;
            res.send(JSON.parse(data))
        })
    })
}

module.exports = useGameToken;