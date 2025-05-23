import './App.css';

// returns JSX, React's blend of HTML and JavaScript
// JSX is a syntax extension for JavaScript that looks similar to XML or HTML
// It allows you to write HTML-like code within JavaScript, making it easier to create and manipulate UI components
// JSX is not required to use React, but it is commonly used because it makes the code more readable and easier to understand
// JSX is transformed into JavaScript function calls by a compiler (like Babel) before being executed in the browser
// The code below is a simple React component that returns a div with the text "Hello Weird"
// The component is defined as a function that returns JSX
// The component is then exported so it can be used in other parts of the application
// The component is named "App" and is the main component of the application
function App() { 
  const salutation = <h1>Hello</h1>;
  const name = <h1>Weird</h1>;
  // enclose multi-line JSX in parentheses
  const greeting = (
    <div>
      {salutation}
      {name}
    </div>
  );
  return (
    <div className="App">
      {greeting}
    </div>
  );
}

export default App;
