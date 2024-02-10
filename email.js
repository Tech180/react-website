const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.use(express.json());

const file = path.join(__dirname, '../public/musicAuth.txt');
const auth = fs.readFileSync(file, 'utf8').split('\n');
const user = auth[0].trim();
const pass = auth[1].trim();

router.get('/music', async (req, res) => {
  try {
    // Authenticate with Navidrome using Subsonic API
    const authResponse = await axios.get(
      'https://music.lawsonserver.org/rest/login',
      {
        params: {
          u: user,
          p: pass,
          format: 'json'
        }
      }
    );

    // Extract session ID from authentication response
    const sessionID = authResponse.data['subsonic-response'].session.id;

    // Fetch last played song using session ID
    const nowPlayingResponse = await axios.get(
      'https://music.lawsonserver.org/rest/getNowPlaying.view',
      {
        params: {
          u: user,
          p: pass,
          s: sessionID,
          v: '1.16.1',
          c: 'website',
          f: 'json'
        }
      }
    );

    // Extract last played song from response
    const lastPlayed = nowPlayingResponse.data['subsonic-response'].nowPlaying.song;

    res.json(lastPlayed);
  } catch (error) {
    console.error('Error fetching last song:', error);
    res.status(500).json({ error: 'Failed to fetch last song' });
  }
});

module.exports = router;
