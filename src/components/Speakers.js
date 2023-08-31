import { SpeakerFilterProvider } from "../contexts/SpeakerFilterContext";
import { SpeakersList } from "./SpeakersList";
import { SpeakersToolbar } from "./SpeakersToolbar";

export function Speakers() {
  return (
    <SpeakerFilterProvider startingShowSession={false}>
      <SpeakersToolbar />
      <SpeakersList />
    </SpeakerFilterProvider>
  );
}
