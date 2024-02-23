const useSlotGameList = (app, fs) => {

    const dataPath = './data/slotGame.json';


    app.get('/api/slotGameList', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = useSlotGameList;