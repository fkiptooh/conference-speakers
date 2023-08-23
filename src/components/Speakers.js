import { SpeakersList } from "./SpeakersList";
import { SpeakersToolbar } from "./SpeakersToolbar";

export function Speakers({ theme, data, setTheme }) {
  return (
    <>
      <SpeakersToolbar theme={theme} setTheme={setTheme} />
      <SpeakersList data={data} />
    </>
  );
}
