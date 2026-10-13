module.exports = {
  apps: [
    {
      name: 'trilha',
      script: 'server/index.js',
      cwd: '/home/user/webapp',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}
