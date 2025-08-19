export async function POST(req) {
  try {
    const body = await req.json();
    return new Response(
      JSON.stringify({ result: `You sent: ${body.text}` }),
      { status: 200 }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ error: "Invalid request" }),
      { status: 400 }
    );
  }
}
