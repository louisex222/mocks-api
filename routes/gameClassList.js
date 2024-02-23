const useGameClassList = (app,fs)=>{
    const dataPath ='./data/gameClassList.json';
    const param = {
        gameClass: 3 
    }
    app.post('/api/Game/ClassListCommon',(req,res)=>{
        req = param;
        fs.readFile(dataPath,'utf8',(err,data)=>{
            if(err) throw err;
            res.send(JSON.parse(data))
        })
    })
}

module.exports = useGameClassList;