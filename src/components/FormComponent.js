import React, { useState } from "react";

function Form() {
    const [skills, setSkills] = useState([]);
    const [Role, setRole] = useState("");
    const [Name, CallName] = useState("");
    const [Bio, setBio] = useState("");
    const [Img, setImg] = useState(null);
    const [preview, setPreview] = useState(null);

    const [userData, setUserData] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setImg(file);
        setPreview(URL.createObjectURL(file));
    };

    //  Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();

        const finalData = {
            Name,
            Role,
            Bio,
            skills,
            image: preview,
        };

        setUserData(finalData); 
        console.log("Final Submitted Data:", finalData);

        CallName("");
        setRole("");
        setBio("");
        setSkills([]);
        setImg(null);
        setPreview(null);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={Name}
                        onChange={(e) => CallName(e.target.value)}
                    />
                </label>

                <br /><br />

                <label>
                    Role:
                    <input
                        type="text"
                        value={Role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                </label>

                <br /><br />

                <label>
                    Skills (comma separated):
                    <input
                        type="text"
                        onChange={(e) => setSkills(e.target.value.split(","))}
                    />
                </label>

                <br /><br />

                <label>
                    Bio:
                    <input
                        type="text"
                        value={Bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                </label>

                <br /><br />

                <input type="file" onChange={handleImageUpload} />

                <br /><br />

                {preview && <img src={preview} width="100" alt="preview" />}

                <br /><br />

                <button type="submit">Submit</button>
            </form>

            {userData && <ProfileCard userData={userData} />}
        </div>
    );
}

function ProfileCard({ userData }) {
  const [showBio, setShowBio] = useState(true); 

  return (
    <div>
      <h1>Profile Card</h1>

      <img src={userData.image} width="120" alt="profile" />

      <h2>{userData.Name}</h2>
      <p>{userData.Role}</p>

      <button id="togglebtn" onClick={() => setShowBio(!showBio)}>
        {showBio ? "Hide Bio" : "Show Bio"}
      </button>

      {showBio && <p>{userData.Bio}</p>}

      <div>
        {userData.skills.map((skill, index) => (
          <span key={index}> {skill} </span>
        ))}
      </div>
    </div>
  );
}

export default Form;
