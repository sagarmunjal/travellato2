// Ghost Configuration for Heroku

var path = require('path'),
    config,
    fileStorage,
    storage;

if (!!process.env.S3_ACCESS_KEY_ID) {
  fileStorage = true
  storage = {
    active: 'ghost-s3',
    'ghost-s3': {
      accessKeyId:     process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_ACCESS_SECRET_KEY,
      bucket:          process.env.S3_BUCKET_NAME,
      region:          process.env.S3_BUCKET_REGION,
      assetHost:       process.env.S3_ASSET_HOST_URL
    }
  }
} else if (!!process.env.BUCKETEER_AWS_ACCESS_KEY_ID) {
  fileStorage = true
  storage = {
    active: 'ghost-s3',
    'ghost-s3': {
      accessKeyId:     process.env.BUCKETEER_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.BUCKETEER_AWS_SECRET_ACCESS_KEY,
      bucket:          process.env.BUCKETEER_BUCKET_NAME,
      region:          process.env.S3_BUCKET_REGION,
      assetHost:       process.env.S3_ASSET_HOST_URL
    }
  }
} else {
  fileStorage = false
  storage = {}
}

config = {

  // Production (Heroku)
  production: {
    url: process.env.HEROKU_URL,
    mail: {
      transport: 'SMTP',
      options: {
        service: 'Mailgun',
        auth: {
          user: process.env.MAILGUN_SMTP_LOGIN,
          pass: process.env.MAILGUN_SMTP_PASSWORD
        }
      }
    },
    fileStorage: fileStorage,
    storage: storage,
    database: {
      client: 'postgres',
      connection: process.env.DATABASE_URL,
      debug: false
    },
    server: {
      host: '0.0.0.0',
      port: process.env.PORT
    },
    paths: {
      contentPath: path.join(__dirname, '/content/')
    }
  },

  // Development
  development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        // Change this to your Ghost blog's published URL.
        url: 'http://localhost:2368',

        // Example refferer policy
        // Visit https://www.w3.org/TR/referrer-policy/ for instructions
        // default 'origin-when-cross-origin',
        // referrerPolicy: 'origin-when-cross-origin',

        // Example mail config
        // Visit http://support.ghost.org/mail for instructions
        // ```
        //  mail: {
        //      transport: 'SMTP',
        //      options: {
        //          service: 'Mailgun',
        //          auth: {
        //              user: '', // mailgun username
        //              pass: ''  // mailgun password
        //          }
        //      }
        //  },
        // ```

        // #### Database
        // Ghost supports sqlite3 (default), MySQL & PostgreSQL
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        // #### Server
        // Can be host & port (default), or socket
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        },
        // #### Paths
        // Specify where your content directory lives
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    }

};

// Export config
module.exports = config;
