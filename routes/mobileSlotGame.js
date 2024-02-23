const useMobileSlotGame = (app,fs) =>{
    const dataPath ='./data/mobileSlotGame.json';

    app.get('/api/Game/mobileSlotGame',(req,res)=>{
        
        fs.readFile(dataPath,'utf8',(err,data)=>{
            if(err){
                throw err;
            }
            res.send(JSON.parse(data));
        })
    })
}

module.exports = useMobileSlotGame;