const isProduction = 'TOKEN' in process.env;

module.exports = {
  credentials: isProduction
    ? {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY
      }
    : require('../../../credentials'),
  sheetId: isProduction
    ? '1vSVc3tWtLtdpNESk-Hu_I35Ko2P3d5Xqagqrs5IYRSU'
    : '1vSVc3tWtLtdpNESk-Hu_I35Ko2P3d5Xqagqrs5IYRSU',
  guildChannelMap: {
    '715758653252173937': {
      channelsToIgnore: []
    }
  }
};
