import { useState } from "react";
import { SpeakersList } from "./SpeakersList";
import { SpeakersToolbar } from "./SpeakersToolbar";

export function Speakers({ theme, setTheme }) {
  const [showSession, setShowSession] = useState(true);
  return (
    <>
      <SpeakersToolbar
        theme={theme}
        setTheme={setTheme}
        showSession={showSession}
        setShowSession={setShowSession}
      />
      <SpeakersList showSession={showSession} />
    </>
  );
}
