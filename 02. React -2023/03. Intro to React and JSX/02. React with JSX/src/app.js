const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// const headingElement = React.createElement('h1', null, 'Hello from React');
// const secondHeadingElement = React.createElement('h2', null, 'Some slogan here');
// const headerElement = React.createElement('header', null, headingElement, secondHeadingElement);
// Use JSX Syntax

const headerElement = (
  <header className="header">
    <h1>Hello from React</h1>
    <h2>Some slogan here</h2>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        possimus rerum reiciendis amet obcaecati consequuntur illo consequatur!
        Rerum officiis pariatur quaerat modi nesciunt a illo, mollitia voluptas
        in repellendus veritatis?
      </p>
    </div>

    <img src="" alt="" />

  </header>
);

root.render(headerElement);
