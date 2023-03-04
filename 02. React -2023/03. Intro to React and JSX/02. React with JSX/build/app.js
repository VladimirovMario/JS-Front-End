var rootElement = document.getElementById("root");
var root = ReactDOM.createRoot(rootElement);

// const headingElement = React.createElement('h1', null, 'Hello from React');
// const secondHeadingElement = React.createElement('h2', null, 'Some slogan here');
// const headerElement = React.createElement('header', null, headingElement, secondHeadingElement);
// Use JSX Syntax

var headerElement = React.createElement(
  "header",
  { className: "header" },
  React.createElement(
    "h1",
    null,
    "Hello from React"
  ),
  React.createElement(
    "h2",
    null,
    "Some slogan here"
  ),
  React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus rerum reiciendis amet obcaecati consequuntur illo consequatur! Rerum officiis pariatur quaerat modi nesciunt a illo, mollitia voluptas in repellendus veritatis?"
    )
  ),
  React.createElement("img", { src: "", alt: "" })
);

root.render(headerElement);