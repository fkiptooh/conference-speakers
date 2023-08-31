import React, { createContext } from "react";
import { useSpeakerFilter } from "../hooks/useSpeakerFilter";

const SpeakerFilterContext = createContext();

function SpeakerFilterProvider({ children, startingSession = false }) {
  const { showSession, setShowSession } = useSpeakerFilter(startingSession);
  return (
    <SpeakerFilterContext.Provider value={{ showSession, setShowSession }}>
      {children}
    </SpeakerFilterContext.Provider>
  );
}

export { SpeakerFilterContext, SpeakerFilterProvider };
