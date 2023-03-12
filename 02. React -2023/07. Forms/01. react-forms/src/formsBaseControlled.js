import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [username, setUsername] = useState("Peter");
  const [age, setAge] = useState();
  const [creditCard, setCreditCard] = useState();
  const [occupation, setOccupation] = useState("engineer");
  const [gender, setGender] = useState("female");
  const [bio, setBio] = useState("");
  const [hobbies, setHobbies] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setUsername("John");
    }, 3000);
  }, []);

  const onUsernameChange = (e) => {
    // console.log(e.target.value);
    setUsername(e.target.value);
  };

  const onAgeChange = (e) => {
    // console.log(e.target.value);
    setAge(Number(e.target.value));
  };

  const onCreditCardChange = (e) => {
    // console.log(e.target.value);
    setCreditCard(e.target.value);
  };

  const onOccupationSelect = (e) => {
    // console.log(e.target.value);
    setOccupation(e.target.value);
  };

  const onGenderChange = (e) => {
    // console.log(e.target.value);
    setGender(e.target.value);
  };

  const onBioChange = (e) => {
    console.log(e.target.value);
    setBio(e.target.value);
  };

  const onHobbiesChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.checked);

    setHobbies((state) => ({ ...state, [e.target.value]: e.target.checked }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(age);
    console.log(creditCard);
    console.log(gender);
    console.log(bio);
    console.log(occupation);
    console.log(hobbies);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React - Forms</h1>

        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="username">
              <span>Username</span>
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={onUsernameChange}
              />
            </label>
          </div>

          <div>
            <label htmlFor="age">
              <span>Age</span>
              <input
                type="number"
                name="age"
                id="age"
                value={age ?? ""}
                onChange={onAgeChange}
              />
            </label>
          </div>

          {age >= 18 && (
            <div>
              <label htmlFor="credit-card">
                <span>Credit Card</span>
                <input
                  type="text"
                  name="credit-card"
                  id="credit-card"
                  value={creditCard}
                  onChange={onCreditCardChange}
                />
              </label>
            </div>
          )}

          {/* Select */}
          <div>
            <label htmlFor="occupation">
              <span>Occupation</span>
              <select
                name="occupation"
                id="occupation"
                value={occupation}
                onChange={onOccupationSelect}
              >
                <option value="it">It</option>
                <option value="engineer">Engineer</option>
                <option value="design">Design</option>
              </select>
            </label>
          </div>

          {/* Radio buttons */}
          <div>
            <span>Radio buttons</span>
            <label htmlFor="male">
              Male
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={onGenderChange}
                checked={gender === "male"}
              />
            </label>
            <label htmlFor="female">
              Female
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={onGenderChange}
                checked={gender === "female"}
              />
            </label>
          </div>

          {/* Text Area */}
          <div>
            <label htmlFor="bio">
              <span>Bio</span>
              <textarea
                name="bio"
                id="bio"
                cols={30}
                rows={10}
                // readOnly={true}
                value={bio}
                onChange={onBioChange}
              ></textarea>
            </label>
          </div>

          {/* Check box */}
          <div>
            <span>Check box</span>
            <label htmlFor="hiking">
              hiking
              <input
                type="checkbox"
                name="hobbies"
                value="hiking"
                id="hiking"
                onChange={onHobbiesChange}
                checked={hobbies["hiking"] || false}
              />
            </label>
            <label htmlFor="reading">
              reading
              <input
                type="checkbox"
                name="hobbies"
                value="reading"
                id="reading"
                onChange={onHobbiesChange}
                checked={hobbies["reading"] || false}
              />
            </label>
            <label htmlFor="sports">sports</label>
            <input
              type="checkbox"
              name="hobbies"
              value="sports"
              id="sports"
              onChange={onHobbiesChange}
              checked={hobbies["sports"] || false}
            />
            <label htmlFor="gaming">gaming</label>
            <input
              type="checkbox"
              name="hobbies"
              value="gaming"
              id="gaming"
              onChange={onHobbiesChange}
              checked={hobbies["gaming"] || false}
            />
            <label htmlFor="coding">coding</label>
            <input
              type="checkbox"
              name="hobbies"
              value="coding"
              id="coding"
              onChange={onHobbiesChange}
              checked={hobbies["coding"] || false}
            />
          </div>

          {/* Submit button */}
          <div>
            <input type="submit" value="Send" />
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
