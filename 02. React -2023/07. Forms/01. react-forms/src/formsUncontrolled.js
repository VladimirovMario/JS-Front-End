import { useState } from "react";

import "./App.css";

function App() {
  const [username, setUsername] = useState("Peter");

  const onUsernameChange = (e) => {
    console.log("onUsernameChange", e.target.value);
  };

  // const onSubmitClick = (e) => {
  //   e.preventDefault()
  //   console.log(document.getElementById('username').value)
  // }

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const data = Object.fromEntries(formData);
    console.log(username, data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React - Forms</h1>

        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="Username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              defaultValue={username}
              onChange={onUsernameChange}
            />
          </div>

          <input
            type="submit"
            value="Send"
            //  onClick={onSubmitClick}
          />
        </form>
      </header>
    </div>
  );
}

export default App;
