const useGameList = (app,fs)=>{
    const dataPath ='./data/gameList.json';
    const param = 
    {
        gameType: 3,
        thirdParty_Id: "Royal"
    }

    app.post('/api/Game/ListCommon',(req,res)=>{

        req = param;
        fs.readFile(dataPath,'utf8',(err,data)=>{
            if(err)throw err;
            res.send(JSON.parse(data))
        })
    })

}

module.exports = useGameList;