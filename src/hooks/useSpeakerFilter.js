import { useState } from "react";
export function useSpeakerFilter(startingSession) {
  const [showSession, setShowSession] = useState(startingSession);
  return {
    showSession,
    setShowSession,
  };
}
