export default function handler(req, res) {
  res.status(200).json({
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  });
}
