const useBulletin =(app,fs) =>{
    const dataPath ='./data/bulletin.json';
    const param = {
        "messageTypeID": "-1",
        "top": "500",
        "siteID": "A002",
        "webSite_Id": "maesot"
    }
    app.post('/api/Utils/BulletinList',(req,res)=>{
        req = param;
        fs.readFile(dataPath,'utf8',(err,data)=>{
            if(err){
                throw err;
            }
            res.send(JSON.parse(data));
        })
    })
}

module.exports = useBulletin;