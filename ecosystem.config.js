module.exports = {
  apps : [{
    name   : "chatgpt-bot",
    script: 'build/',
    watch: true,
    watch_delay: 1000,
    watch : "build",
    // ignore_watch : ["node_modules"],
    exec_mode: "fork",
    instances: 1,
    max_memory_restart: "1G",
    log_date_format: "YYYY-MM-DD HH:mm:ss Z",
  }]
};