import { useState } from "react";

export default function EditProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isEditing, setisEditing] = useState(false);
  const handleForm = (e) => {
    e.preventDefault();
    setisEditing(!isEditing);
  };
  return (
    <form onSubmit={handleForm}>
      <>
        {isEditing ? (
          <>
            <label>
              First name:
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label>
              Last name:
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </>
        ) : (
          <>
            <label>
              First name: <b>{firstName}</b>
            </label>
            <label>
              Last name: <b>{lastName}</b>
            </label>
          </>
        )}
      </>
      <button type="submit">{isEditing ? "save" : "edit"}</button>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}
