import { Author, Controllers, Counter, Options, Title } from "./Components";

const App = () => {

  return (
    <div id="app">
      {/* title section  */}
      <Title />
      {/* options section  */}
      <Options />
      {/* counter section  */}
      <Counter />
      {/* controllers section  */}
      <Controllers />
      {/* author section  */}
      <Author />
    </div>
  );
};

export default App;
