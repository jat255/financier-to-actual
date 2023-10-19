require('dotenv').config()
let api = require('@actual-app/api');

(async () => {
    await api.init({
        // Budget data will be cached locally here, in subdirectories for each file.
        dataDir: '.',
        // This is the URL of your running server
        serverURL: process.env.ACTUAL_URL,
        // This is the password you use to log into the server
        password: process.env.ACTUAL_PASSWORD,
    });

  // This is the ID from Settings → Show advanced settings → Sync ID
  await api.downloadBudget('e5ef1f34-7c1d-4907-bf4b-2c80be1c5ce8');
  
  await api.shutdown();
})();