"use client";

import { useState } from "react";
import { ClaimButton } from "@/components/ClaimButton";

export default function EventPage() {
  const [claimed, setClaimed] = useState(false);

  return (
    <main style={{ padding: 20 }}>
      <h1>Live Event</h1>
      <p>Artist: Demo Artist</p>
      <p>Venue: Test Venue</p>

      {!claimed ? (
        <ClaimButton onSuccess={() => setClaimed(true)} />
      ) : (
        <h2>✅ You got access</h2>
      )}
    </main>
  );
}