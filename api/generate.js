export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message, vibe = "electro", voice = "female" } = req.body || {};

  if (!message) {
    return res.status(400).json({ error: "Missing message" });
  }

  return res.status(200).json({
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
});
