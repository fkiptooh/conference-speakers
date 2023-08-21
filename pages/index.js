import React from "react";
import { data } from "../SpeakerData";

const index = () => {
  return (
    <div className="container speaker-list">
      <div className="row">
        {data.map(function (speakers) {
          const { id, bio, first, last, twitterHandle, company, sessions } =
            speakers;
          return (
            <div
              key={id}
              className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12"
            >
              <div className="card card-height p-4 mt-4">
                <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
                  <img
                    className="contain-fit"
                    src={`/images/speaker-${id}.jpg`}
                    width="300"
                    alt={`${first} ${last}`}
                  />
                </div>
                <div className="speaker-info">
                  <div className="d-flex justify-content-between mb-3">
                    <h3 className="text-truncate w-20">
                      {first} {last}
                    </h3>
                  </div>
                </div>
                <div>
                  <p>
                    {bio} {company} {twitterHandle}
                  </p>
                </div>
              </div>
              <div className="sessionBox card h-250">
                <span className="session w-100">
                  {sessions[0].title}{" "}
                  <strong>Room: {sessions[0].room.name}</strong>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;