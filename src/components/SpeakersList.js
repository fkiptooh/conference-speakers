import Speaker from "./Speaker";
import ReactPlaceHolder from "react-placeholder";
import { useRequestDelay, REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data } from "../../SpeakerData";

export function SpeakersList({ showSession }) {
  const {
    data: speakerData,
    requestStatus,
    error,
    updateRecord,
  } = useRequestDelay(2000, data);

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div className="text-danger">
        ERROR: <b>Loading speaker data failed {error}</b>
      </div>
    );
  }

  // if (isLoading === true) return <div>Loading....</div>;
  return (
    <div className="container speaker-list">
      <ReactPlaceHolder
        type="media"
        row={15}
        className="speakerlist-placeholder"
        ready={requestStatus === REQUEST_STATUS.SUCCESS}
      >
        <div className="row">
          {speakerData.map(function (speaker) {
            return (
              <Speaker
                key={speaker.id}
                speaker={speaker}
                showSession={showSession}
                onFavoriteToggle={() => {
                  updateRecord({
                    ...speaker,
                    favorite: !speaker.favorite,
                  });
                }}
              />
            );
          })}
        </div>
      </ReactPlaceHolder>
    </div>
  );
}
