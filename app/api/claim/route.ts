import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  const { user_id, event_id } = await req.json();

  const { data: existing } = await supabase
    .from("claims")
    .select("*")
    .eq("user_id", user_id)
    .eq("event_id", event_id)
    .maybeSingle();

  if (existing) {
    return NextResponse.json(
      { error: "Already claimed" },
      { status: 400 }
    );
  }

  const { error } = await supabase.from("claims").insert([
    { user_id, event_id, status: "claimed" }
  ]);

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}