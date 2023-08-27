import Speaker from "./Speaker";
export function SpeakersList({ data, showSession }) {
  return (
    <div className="container speaker-list">
      <div className="row">
        {data.map(function (speaker) {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSession={showSession}
            />
          );
        })}
      </div>
    </div>
  );
}
