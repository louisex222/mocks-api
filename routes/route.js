const useSlotGameList = require('./slotGame');
const useBulletin = require('./bulletin');
const useMaintainStatus = require('./maintainStatus');
const useLogin = require('./login')
const useTimeRange = require('./timeRange')
const useGameClassList = require('./gameClassList')
const useGameList = require('./gameList')
const useGameToken = require('./gameToken')
const useGameTokenRoyal = require('./gameTokenRoyal')
const useLogout = require('./logout')
const useHotList = require('./hotList')
const useGameTypeList = require('./gameTypeList')
const useMobileSlotGame = require('./mobileSlotGame')

const appRouter = (app, fs) => {
  app.get('/', (req, res) => {
    res.send('welcome to the development api-server');
  });
  useSlotGameList(app, fs);
  useBulletin(app, fs);
  useMaintainStatus(app, fs);
  useLogin(app, fs);
  useTimeRange(app, fs);
  useGameClassList(app, fs);
  useGameList(app, fs);
  useGameToken(app, fs);
  useGameTokenRoyal(app, fs);
  useLogout(app, fs);
  useHotList(app, fs);
  useGameTypeList(app, fs);
  useMobileSlotGame(app, fs);
};

module.exports = appRouter;