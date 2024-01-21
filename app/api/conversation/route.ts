import OpenAI from "openai";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

// Ensure OpenAI API key is set
if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing OPENAI_API_KEY environment variable");
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    // Retrieve user ID and request body
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    // Validate inputs
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!messages) {
      return new NextResponse("Bad Request", { status: 400 });
    }

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-16k",
      messages,
    });

    // Return response
    return new NextResponse(JSON.stringify(completion.choices[0].message), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}