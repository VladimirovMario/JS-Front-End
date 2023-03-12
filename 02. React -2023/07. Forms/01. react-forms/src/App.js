import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [age, setAge] = useState();
  const [hobbies, setHobbies] = useState({});

  const [formValues, setFormValues] = useState({
    username: "Peter",
    creditCard: "",
    occupation: "engineer",
    gender: "female",
    bio: "",
  });

  const onAgeChange = (e) => {
    setAge(Number(e.target.value));
  };

  const onHobbiesChange = (e) => {
    setHobbies((state) => ({ ...state, [e.target.value]: e.target.checked }));
  };

  const onChangeHandler = (e) => {
    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(age);
    console.log(hobbies);
    console.log(formValues);
  };

  // useRef
  const ref = useRef();
  useEffect(() => {
    ref.current.value = formValues.username;
  }, [formValues.username]);

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>React - Forms</h1> */}

        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="username">
              <span>Username</span>
              <input
                type="text"
                name="username"
                id="username"
                value={formValues.username}
                onChange={onChangeHandler}
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
                  name="creditCard"
                  id="credit-card"
                  value={formValues.creditCard}
                  onChange={onChangeHandler}
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
                value={formValues.occupation}
                onChange={onChangeHandler}
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
                checked={formValues.gender === "male"}
                onChange={onChangeHandler}
              />
            </label>
            <label htmlFor="female">
              Female
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={formValues.gender === "female"}
                onChange={onChangeHandler}
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
                value={formValues.bio}
                onChange={onChangeHandler}
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

          <div>
            <label htmlFor="uncontrolled">
              <span>useRef Uncontrolled</span>
              <input
                type="text"
                name="uncontrolled"
                id="uncontrolled"
                ref={ref}
              />
            </label>
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
