const useLogin = (app,fs)=>{
    const dataPath ='./data/login.json';
    const param =
        {
            "account": "Datw05",
            "password": "CF79AE6ADDBA60AD018347359BD144D2",
            "uidKey": "web",
          }
    
    app.post('/api/Member/Login',(req,res)=>{
        req = param;
        fs.readFile(dataPath,'utf8',(err,data)=>{
            if(err){
                throw err;
            }
            res.send(JSON.parse(data));
        })
    })


}
module.exports = useLogin