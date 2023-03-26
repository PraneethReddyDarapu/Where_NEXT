import React, { useState, useEffect } from "react";
import axios from "axios";
import AddHangout from "./AddHangout";

function HangoutTogether() {
  const [data, setData] = useState([]);
  const [chats, setChats] = useState([]);
  const [user_id, setUser_id] = useState(localStorage.getItem("user_id"));
  const [activeTab, setActiveTab] = useState(1);

  const getData = () => {
    setUser_id(localStorage.getItem("user_id"));
    axios
      .get(`${process.env.REACT_APP_API_URL}/hangout`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${process.env.REACT_APP_API_URL}/hangout/personal`)
      .then((res) => {
        setChats(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Blog">
      <div className="d-flex justify-content-between">
        <div className="ps-3">
          <button
            className={`btn btn-${
              activeTab === 1 ? "dark" : "white"
            } rounded-3 mt-2 me-2`}
            onClick={() => setActiveTab(1)}
          >
            Hangouts
          </button>
          <button
            className={`btn btn-${
              activeTab === 2 ? "dark" : "white"
            } rounded-3 mt-2 me-2`}
            onClick={() => setActiveTab(2)}
          >
            Chats
          </button>
        </div>
        <div className="pe-3">
          <AddHangout getData={getData} />
        </div>
      </div>
      <div className="blogout">
        {/* hangouts */}
        {activeTab === 1 &&
          data.map((row, key) => (
            <div className="card mt-3 shadow-sm border-0" key={key}>
              <div class="card-body">
                <div className="col-2 p-0 m-0">
                  <div className="d-flex align-items-center m-0 p-0">
                    <img
                      src={`https://avatars.dicebear.com/4.5/api/avataaars/${row.user._id}.svg?mood=happy`}
                      alt="avatar"
                      className="user__image rounded-circle"
                    />
                    <p className="text-dark user__name">
                      {row.user.first_name} {row.user.last_name}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10">
                    <h5>{row.title}</h5>
                    <p class="card-text">{row.description}</p>
                    <p class="card-text">
                      Date of travel : {row?.booking?.start_date || "-"}{" "}
                    </p>
                  </div>
                </div>
                <br></br>
                <a
                  href={`/chat?hangout_id=${row._id}&type=group`}
                  class="btn btn-dark text-decoration-none"
                >
                  Join group chat
                </a>
                {row.user_id != user_id && (
                  <a
                    href={`/chat?hangout_id=${row._id}&user_id=${row.user._id}&type=personal`}
                    class="btn btn-primary ms-3 text-decoration-none"
                  >
                    chat personally
                  </a>
                )}
              </div>
            </div>
          ))}
        {/* chat */}
        {activeTab === 2 &&
          chats.map((row, key) => (
            <div className="card mt-3 shadow-sm border-0 pb-3">
              <div
                className="d-flex"
                // use div as a link
                role={"button"}
                onClick={() => {
                  window.location.href = `/chat?user_id=${row.targetUserIds}&type=personal`;
                }}
              >
                <div className="col-12">
                  <div className="d-flex align-items-center">
                    <img
                      src={`https://avatars.dicebear.com/4.5/api/avataaars/${row.user._id}.svg?mood[]=happy`}
                      alt="avatar"
                      className="user__image rounded-circle"
                    />
                    <h5 className="text-dark fw-light">
                      {row.user.first_name} {row.user.last_name}
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>{row.lastMessage[0]?.message}</p>
                    {/* <p>{row.lastMessage[0]?.created_at}</p> */}
                    <p>
                      {new Date(row.lastMessage[0]?.created_at).toLocaleString(
                        "en-US",
                        {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        }
                      )}
                    </p>
                  </div>
                </div>
                {/* <a
                  className="col-4 d-flex align-items-center text-decoration-none"
                  href={`/chat?user_id=${row._id}&type=personal`}
                >
                  <button className="btn btn-dark ms-3 text-decoration-none">
                    Send Message
                  </button>
                </a> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default HangoutTogether;
