import { useState } from "react";
import "./FormComponent.css"
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
        <div class="formContainer">
            <form onSubmit={handleSubmit}>
                <label id="Label">
                    Name
                    <input id="Input"
                        placeholder="Enter your Name"
                        type="text"
                        value={Name}
                        onChange={(e) => CallName(e.target.value)}
                    />
                </label>

                <br /><br />

                <label id="Label">
                    Role:
                    <input
                        id="Input"
                        type="text"
                        value={Role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                </label>

                <br /><br />

                <label id="Label">
                    Skills (comma separated):
                    <input
                        id="Input"
                        placeholder=""
                        type="text"
                        onChange={(e) => setSkills(e.target.value.split(","))}
                    />
                </label>

                <br /><br />

                <label id="Label">
                    Bio:
                    <input
                        id="Input"
                        type="text"
                        value={Bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                </label>

                <br /><br />

                <input id="Label" type="file" onChange={handleImageUpload} />

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
        <div class="profile">
            <h1>Profile Card</h1>

            <img id="Img" src={userData.image} width="120" alt="profile" />

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
