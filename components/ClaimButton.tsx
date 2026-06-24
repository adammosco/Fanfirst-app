"use client";

import { useState } from "react";

export function ClaimButton({ onSuccess }: { onSuccess: () => void }) {
  const [loading, setLoading] = useState(false);

  const claim = async () => {
    setLoading(true);

    const res = await fetch("/api/claim", {
      method: "POST",
      body: JSON.stringify({
        user_id: "demo-user",
        event_id: "1"
      })
    });

    setLoading(false);

    if (res.ok) {
      onSuccess();
    } else {
      alert("Already claimed or error");
    }
  };

  return (
    <button onClick={claim} disabled={loading}>
      {loading ? "Claiming..." : "Claim Ticket"}
    </button>
  );
}