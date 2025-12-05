import React, { useState } from "react";

function Form() {
  const [skills, setSkills] = useState([]);
  const [Role, setRole] = useState("");
  const [Name, CallName] = useState("");
  const [Bio, setBio] = useState("");
  const [Img, setImg] = useState(null);
  const [preview, setPreview] = useState(null); // ✅ Missing state added

  // ✅ Correct Image Upload Handler
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return; // safety check

    setImg(file); // Stores actual image file
    setPreview(URL.createObjectURL(file)); // Creates browser preview
  };

  // ✅ Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      Name,
      Role,
      Bio,
      skills,
      image: preview,
    };

    console.log("Final Submitted Data:", userData);

    // ✅ Reset form
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
            onChange={(e) =>
              setSkills(e.target.value.split(","))
            }
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

        {/* ✅ Correct File Input (NO value attribute & correct handler) */}
        <input type="file" onChange={handleImageUpload} />

        <br /><br />

        {/* ✅ Image Preview */}
        {preview && <img src={preview} width="100" alt="preview" />}

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
