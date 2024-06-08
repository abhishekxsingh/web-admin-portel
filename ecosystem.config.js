module.exports = {
    apps: [
      {
        name: "web-admin",
        script: "./server/server.js",
        instances: 1,
        // Env Specific Config
        env_production: {
          NODE_ENV: "production",
          // exec_mode: "cluster_mode",
          HOST:'0.0.0.0',
          PORT: 3002,
          IDENTITY_SERVICE_URL: 'https://auth.unbiasly.in',     
          API_SERVICE_URL: 'https://api.unbiasly.in',    
          WORKFLOW_BASE_URL: 'http://localhost:5678', 
        },
        env_development: {
          NODE_ENV: "development",
          PORT: 3002,
          IDENTITY_SERVICE_URL: 'https://auth-dev.unbiasly.in',     
          API_SERVICE_URL: 'https://api-dev.unbiasly.in',   
          WORKFLOW_BASE_URL: 'http://localhost:5678',
        },
      },
    ],
  };
