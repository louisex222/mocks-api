const useLogout =  (app,fs)=>{
    const dataPath ='./data/logout.json';

    app.post('/api/Member/Logout',(req,res)=>{
        fs.readFile(dataPath,'utf8',(err,data)=>{
            if(err) throw err;
            res.send(JSON.parse(data))
        })
    })
}
module.exports = useLogout;