const self = module.exports = {

  getIpAddress: (req) => {
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    if (!ip) {
      return '127.0.0.1';
    }

    return ip;
  },

  detectAgent: (req) => {
    let device = 'desktop';
    let agentDevice = {
      user_agent: 'unknow',
      browser: 'unknow',
      os: 'unknow',
    }
    if (req.useragent) {
      const isDesktop = req.useragent.isDesktop;
      if (!isDesktop) {
        device = 'mobile';
      }
      agentDevice.user_agent = req.useragent.source;
      agentDevice.browser = req.useragent.browser;
      agentDevice.os = `${req.useragent.os} - ${device}`;
    }

    return agentDevice;
  },

  convertMinuteToSecond: (minute) => {
    return minute * 60;
  },

  isJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

}