const useGameTypeList = (app,fs) => {
    const dataPath ='./data/gameTypeList.json';
    app.get('/api/webCache/GetGameTypeList',(req,res)=>{
        fs.readFile(dataPath,'utf8',(err,data)=>{
            if(err)throw err;
            res.send(JSON.parse(data))
        })
    })
}
module.exports = useGameTypeList;