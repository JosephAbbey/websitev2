const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const app = next({ dev: false });
const handle = app.getRequestHandler();

const fetch = require('node-fetch');
const fs = require('fs');
const env = require('./src/scripts/env');
setInterval(async () => {
    fetch(
        `https://www.googleapis.com/youtube/v3/channels?key=${env.API_KEY}&id=${env.CHANNEL_ID}&part=contentDetails`
    )
        .then(async (results) => {
            const channelObj = await results.json();
            fetch(
                `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&playlistId=${channelObj.items[0].contentDetails.relatedPlaylists.uploads}&key=${env.API_KEY}`
            )
                .then(async (results) => {
                    const videosObj = await results.json();
                    fs.writeFile(
                        './public/data/videos.json',
                        JSON.stringify(videosObj),
                        'utf8',
                        function (err) {
                            if (err) {
                                console.log(
                                    'Failed to update video database.',
                                    err
                                );
                            } else {
                                console.log('Updated video database.');
                            }
                        }
                    );
                })
                .catch((err) => {
                    console.log('Failed to update video database.', err);
                });
        })
        .catch((err) => {
            console.log('Failed to update video database.', err);
        });
}, 36000000);

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true);

        handle(req, res, parsedUrl);
    }).listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000 (production)');
    });
});
