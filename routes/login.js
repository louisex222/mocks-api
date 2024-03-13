const useLogin = (app,fs)=>{
    const dataPath ='./data/login.json';
    const param =
        {
            "account": "CCcct1001",
            "password": "E9510081AC30FFA83F10B68CDE1CAC07",
            "uidKey": "maesotweb",
            "ip": "127.0.0.1"
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