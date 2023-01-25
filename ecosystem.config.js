module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'root',
      host : '185.98.136.208',
      ref  : 'origin/main',
      repo : 'git@github.com:ventustyl/OpotagerBack.git',
      path : '/var/www/evinformatique.site/web/back',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
