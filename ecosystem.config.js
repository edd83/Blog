module.exports = {
  apps: [{
    name: 'api',
    script: 'bin/api.js',
    exec_mode: 'cluster',
    instances: 8,
    max_memory_restart: '256M',
    env: {
      'NODE_PATH': './api',
      'NODE_ENV': 'production',
      'APIPORT': 3030,
      'APIKEY': '170f3832-52e5-4094-afa8-0e35cdc8dc75'
    }
  }, {
    name: 'server',
    script: 'bin/server.js',
    exec_mode: 'cluster',
    instances: 1,
    max_memory_restart: '512M',
    env: {
      'NODE_PATH': './src',
      'NODE_ENV': 'production',
      'PORT': 8080,
      'APIPORT': 3030,
      'APIKEY': '170f3832-52e5-4094-afa8-0e35cdc8dc75'
    }
  }]
};
