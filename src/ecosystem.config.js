module.exports = {
    apps : [{
      name: "Backend_Municipios_Tiserium",
      script: "index.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }