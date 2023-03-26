import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import moment from "moment";
import useWebSocket from "react-use-websocket";

export default function Chat() {
  const [data, setData] = useState([]);
  const [hangoutData, setHangoutData] = useState({});
  const chatRef = React.useRef(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // get hangout_id and type from query params
  const hangout_id = new URLSearchParams(window.location.search).get(
    "hangout_id"
  );
  const type = new URLSearchParams(window.location.search).get("type");
  let user_id_query = new URLSearchParams(window.location.search).get(
    "user_id"
  );

  useWebSocket(
    `${process.env.REACT_APP_WS_URL}/${
      type == "hangout" ? hangout_id : user_id_query
    }`,
    {
      share: true,
      onOpen: () => {
        console.log("WebSocket connection established.");
      },
      onMessage: (event) => {
        getData();
      },
    }
  );
  const user_id = localStorage.getItem("user_id");

  const onSubmit = (data) => {
    let identifier = type == "hangout" ? hangout_id : user_id_query;
    axios
      .post(`${process.env.REACT_APP_API_URL}/chat/${identifier}`, {
        message: data.message,
        type: type,
      })
      .then((res) => {
        reset();
        getData();
      });
  };

  const getData = () => {
    let user_id = localStorage.getItem("user_id");
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/chat/${hangout_id}?user_id=${user_id}&type=${type}`
      )
      .then((res) => {
        setData(res.data);
      });
    if (hangout_id && hangout_id.length > 0) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/hangout/${hangout_id}`)
        .then((res) => {
          setHangoutData(res.data);
        });
    }

    setTimeout(() => {
      // scroll to bottom
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, 100);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-secondary py-5">
      <div className="row justify-content-center">
        <div className="col-lg-9 col-md-10 col-sm-12 bg-white rounded rounded-3 shadow-sm p-4">
          <div className="d-flex">
            <h5>
              {hangout_id && hangout_id.length > 0 ? hangoutData.title : ""}
            </h5>
          </div>

          <div style={{ height: "60vh", overflowY: "scroll" }} ref={chatRef}>
            {data?.length > 0 ? (
              data.map((row, key) => (
                <div
                  className={`d-flex ${
                    row.user_id == user_id
                      ? "justify-content-end"
                      : "justify-content-start"
                  }`}
                  key={key}
                >
                  <div className="col-6 mt-2">
                    <div
                      className={`p-1 ps-2 border rounded shadow-sm ${
                        row.user_id == user_id ? "bg-white" : "bg-light"
                      }`}
                    >
                      {row.message}
                      <div className="row justify-content-between">
                        <div className="col-6">
                          <small className="text-muted">
                            {row?.user[0]?.first_name} {row?.user[0]?.last_name}
                          </small>
                        </div>
                        <div className="col-6">
                          <small className="text-muted">
                            {moment(
                              row.created_at,
                              "YYYY-MM-DD HH:mm:ss"
                            ).calendar()}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="d-flex justify-content-center align-items-center">
                <h5>No messages yet</h5>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex mt-5">
              <input
                className="col-10 border border-2 border-secondary rounded-3"
                placeholder="Type your message here..."
                {...register("message", { required: true })}
              />
              <button className="btn btn-dark rounded rounded-5 ms-2">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
