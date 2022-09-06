const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://share.getcloudapp.com",
    "watchForFileChanges": false
  }
})
