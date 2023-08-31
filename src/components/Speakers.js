import { useState } from "react";
import { SpeakersList } from "./SpeakersList";
import { SpeakersToolbar } from "./SpeakersToolbar";

export function Speakers() {
  const [showSession, setShowSession] = useState(true);
  return (
    <>
      <SpeakersToolbar
        showSession={showSession}
        setShowSession={setShowSession}
      />
      <SpeakersList showSession={showSession} />
    </>
  );
}
