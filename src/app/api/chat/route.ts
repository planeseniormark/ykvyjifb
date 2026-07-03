import { NextRequest, NextResponse } from "next/server";
import { chatWithGigaChat, ChatMessage } from "@/lib/gigachat";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const messages: ChatMessage[] = body.messages || [];

    if (!messages.length) {
      return NextResponse.json(
        { error: "No messages provided" },
        { status: 400 }
      );
    }

    const reply = await chatWithGigaChat(messages);
    return NextResponse.json({ reply });
  } catch (error: unknown) {
    console.error("Chat API error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { reply: "Извините, произошла ошибка. Попробуйте позже.", error: errorMessage },
      { status: 500 }
    );
  }
}
