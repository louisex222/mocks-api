const useHotList = (app,fs) =>{
    const dataPath ='./data/hotList.json';

    app.get('/api/Game/GetHotList',(req,res)=>{
        
        fs.readFile(dataPath,'utf8',(err,data)=>{
            if(err){
                throw err;
            }
            res.send(JSON.parse(data));
        })
    })
}

module.exports = useHotList;