import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const userText = body.text || "";

    // Call OpenAI
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a quiz generator for teachers." },
          { role: "user", content: `Generate 5 quiz questions for: ${userText}` }
        ],
      }),
    });

    const data = await response.json();
    const result = data.choices?.[0]?.message?.content || "No result";

    return NextResponse.json({ result });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
