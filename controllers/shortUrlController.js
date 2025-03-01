import express from 'express';
import ShortUrl from '../models/shortUrl.js';

const router = express.Router();

// Functionality

// GET route to display all short URLs
router.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render('index', { shortUrls: shortUrls });
});

// POST route to create a new short URL
router.post('/shortURLs', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullURL });
  res.redirect('/');
});

// Redirect to full URL based on short URL
router.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });

  if (shortUrl == null) {
    return res.sendStatus(404); // If no match found, send 404 status
  }

  shortUrl.numClicks++;
  shortUrl.save();

  res.redirect(shortUrl.full);
});

export default router;
