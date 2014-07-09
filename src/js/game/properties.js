var npmProperties = require('../../../package.json');

module.exports =
  { title: 'Phaser JS Boilerplate'
  , description: npmProperties.description
  , port: 3017
  , liveReloadPort: 3018
  , showStats: true
  , size:
    { x: 800
    , y: 600
    }
  , analyticsId: 'UA-50892214-2'
  };
