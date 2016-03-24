fis.config.set('modules.parser.jade','jade');
fis.config.set('roadmap.ext.jade','html');
var jadeConf = {
    filters : {
        jadesrc : require('jade-highlighter')
    },
  pretty  : true
};

fis.config.set('settings.parser.jade', jadeConf);


//file : example/fis-conf.js
fis.config.merge({
  modules:{
    parser:{
      styl: 'stylus'
    }
  },
  roadmap:{
    ext:{
      styl: 'css'
    }
  }
});