const useMaintainStatus =(app,fs) =>{
    const dataPath ='./data/maintainStatus.json';

    app.post('/api/Game/FrontEndMaintainStatus',(req,res)=>{
        fs.readFile(dataPath,'utf8',(err,data)=>{
            if(err){
                throw err;
            }
            res.send(JSON.parse(data));
        })
    })
}

module.exports = useMaintainStatus;