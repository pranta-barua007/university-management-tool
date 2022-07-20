import React from "react";
import { Link } from "react-router-dom";
import EftiPic from "../Style/Images/team/efti.jpg";
import MaryPic from "../Style/Images/team/mary.jpg";
import AnikPic from "../Style/Images/team/anik.jpg";
import PrantoPic from "../Style/Images/team/pranto.jpg";

const Member = ({ name, picture, sid }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "25px",
        padding: "1.5rem",
        backgroundColor: "whitesmoke",
      }}
    >
      <img
        src={picture}
        alt="team-member"
        style={{
          height: "220px",
          width: "220px",
          border: "4px solid #ecf0f4",
          borderRadius: "50%",
          marginBottom: "3vh",
        }}
      />
      <h2>{name}</h2>
      <h4>Id: {sid}</h4>
    </div>
  );
};

const Team = () => {
  const devsData = [
    {
      name: "Eftia Mumu",
      picture: EftiPic,
      sid: "1910205021",
    },
    {
      name: "Md. Munibur",
      picture: AnikPic,
      sid: "1910205011",
    },

    {
      name: "Marjana Akter",
      picture: MaryPic,
      sid: "1910205019",
    },
    {
      name: "Pranta Barua",
      picture: PrantoPic,
      sid: "1910205004",
    },
  ];

  return (
    <div className="container">
      <div
        style={{
          padding: "1rem 0",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {devsData.map((dev, idx) => (
          <Member
            key={idx}
            name={dev.name}
            picture={dev.picture}
            sid={dev.sid}
          />
        ))}
      </div>
      <div>
        <h4>
          <Link
            style={{
              color: "#00c2cb",
            }}
            to={"/"}
          >
            &#8592; Back To Home
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Team;
