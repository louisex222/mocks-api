const useTimeRange = (app,fs)=>{
    const dataPath = './data/timeRange.json';
    
    app.post('/api/Utils/TimeRange',(req,res)=>{
        fs.readFile(dataPath,'utf8',(err,data)=>{
            if(err){
                throw err;
            }
            res.send(JSON.parse(data));
        })
    })
}
module.exports = useTimeRange;