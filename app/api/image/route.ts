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
    const {prompt, amount = 1, resolution = "512*512"} = body;

    // Validate inputs
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!prompt) {
      return new NextResponse("Bad Request", { status: 400 });
    }

    // Call OpenAI API
    const completion = await openai.images.generate({
        prompt,
        n: parseInt(amount,10),
        size: resolution
    });

    // Return response
    return new NextResponse(JSON.stringify(completion.data), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}