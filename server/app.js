const cors = require('cors')
const express = require('express')
const app = express()


app.use(cors())
 const Wappalyzer = require('wappalyzer');
 const options = {
        debug: false,
        delay: 500,
        headers: {},
        maxDepth: 3,
        maxUrls: 10,
        maxWait: 5000,
        recursive: true,
        probe: true,
        userAgent: 'Wappalyzer',
        htmlMaxCols: 2000,
        htmlMaxRows: 2000,
        noScripts: false,
        };
 const web = new Wappalyzer(options)



app.get('/finde', function (req, res) {
      
      

        (  async function() {
                try {
                  await web.init()
                  // Optionally set additional request headers
                  const headers = {}
                  const site = await web.open(req.query.url, headers)
                  // Optionally capture and output errors
                  site.on('error', console.error)
                 const results = await site.analyze()
                 res.send( JSON.stringify(results, null, 2))
                } catch (error) {
                  console.error(error)
                }
              
                await web.destroy()
              })()
    
 
})




app.listen(5000, function () {
    console.log('Example app listening on port 5000!')
  })