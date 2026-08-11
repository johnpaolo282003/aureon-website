import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
      console.error("BREVO_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Subscription service is temporarily unavailable." },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://api.brevo.com/v3/contacts",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "api-key": apiKey,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          updateEnabled: true,
        }),
      }
    );

    if (response.ok || response.status === 201) {
      return NextResponse.json({
        success: true,
        message: "You're subscribed!",
      });
    }

    const errorData = await response.json().catch(() => null);

    console.error("Brevo error:", errorData);

    return NextResponse.json(
      { error: "Unable to subscribe right now." },
      { status: response.status }
    );
  } catch (error) {
    console.error("Subscription error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
