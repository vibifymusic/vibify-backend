export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message, vibe = "electro", voice = "female" } = req.body || {};

  if (!message) {
    return res.status(400).json({ error: "Missing message" });
  }

  try {
    const response = await fetch("https://api.kie.ai/v1/music/generate", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.KIE_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: message,
        style: vibe,
        voice: voice,
        duration: 20
      })
    });

    const data = await response.json();

    return res.status(200).json({
      success: true,
      data
    });

  } catch (err) {
    return res.status(500).json({
      error: "Generation failed",
      details: err.message
    });
  }
}
