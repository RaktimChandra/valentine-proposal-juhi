# 💕 Valentine's Proposal Website for Juhi 💕

## 🎵 How to Add Music

### Option 1: Using a YouTube Video (Easiest)
1. Find your romantic song on YouTube
2. Copy the video ID (e.g., from `https://youtube.com/watch?v=dQw4w9WgXcQ`, the ID is `dQw4w9WgXcQ`)
3. Open `script.js`
4. Find line 2-3 where audio is defined
5. You can use a free service to convert YouTube to MP3, or use Spotify embed

### Option 2: Using a Local MP3 File
1. Download your favorite romantic song as an MP3 file
2. Create a folder named `music` in the project folder
3. Put your MP3 file there (e.g., `our-song.mp3`)
4. Open `index.html`
5. Find line 19: `<source src="data:audio/mpeg..."`
6. Replace it with: `<source src="music/our-song.mp3" type="audio/mpeg">`

### Option 3: Using Spotify Embed
1. Go to your song on Spotify
2. Click Share → Copy Embed Code
3. Add the iframe to the music player section

## 📸 How to Add Photos

### Method 1: Local Photos
1. Create a folder named `images` in the project folder
2. Add your photos there (e.g., `photo1.jpg`, `photo2.jpg`, etc.)
3. Open `index.html`
4. Find the photo gallery section (around line 95-125)
5. Replace each `<div class="photo-placeholder">` with:
```html
<img src="images/photo1.jpg" alt="Our Memory" style="width: 100%; height: 100%; object-fit: cover;">
```

### Method 2: Using Image URLs
If your photos are already online:
1. Get the direct image URL
2. Replace the placeholder div with:
```html
<img src="YOUR_IMAGE_URL" alt="Our Memory" style="width: 100%; height: 100%; object-fit: cover;">
```

## 🎨 Quick Customization Tips

1. **Change Her Name**: Search for "Juhi" in `index.html` and replace with any name
2. **Edit Love Messages**: Look for the "Love Letters" section in `index.html`
3. **Change Timeline Events**: Edit the timeline items in the "Our Beautiful Journey Together" section
4. **Add More Photos**: Just duplicate the photo-item divs and update the numbers

## 🚀 How to View

1. Make sure Python server is running: `python -m http.server 8000`
2. Open your browser
3. Go to: `http://localhost:8000` (NOT https://)
4. If you see an SSL error, make sure you're using `http://` not `https://`

## 💡 Pro Tips

- Test the website before showing Juhi!
- Make sure all photos load properly
- Check that music plays when clicked
- Try it on your phone to see how it looks
- Take a screenshot of her reaction when she says YES! 💍

## ❤️ Good Luck!

You've got this! This proposal is going to be amazing!
