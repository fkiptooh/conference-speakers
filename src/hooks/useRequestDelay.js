import { useState, useEffect } from "react";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

export function useRequestDelay(delayTime = 1000, initialData = []) {
  const [data, setData] = useState(initialData);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    async function delayFunc() {
      try {
        await delay(2000);
        // throw "has error";
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(data);
      } catch (error) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(error);
      }
    }
    delayFunc();
  }, []);

  function updateRecord(recordUpdated, doneCallback) {
    const newRecord = data.map((rec) =>
      rec.id === recordUpdated.id ? recordUpdated : rec
    );

    async function delayFunc() {
      try {
        await delay(delayTime);
        if (doneCallback) {
          doneCallback();
        }
        setData(newRecord);
      } catch (error) {
        console.log("error thrown inside delay function:", error);
      }
    }
    delayFunc();
  }

  return { data, requestStatus, error, updateRecord };
}
