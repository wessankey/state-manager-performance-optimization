import { GlobalState } from "./GlobalState";
import { LocalState } from "./LocalState";

function App() {
  return (
    <div className="flex justify-center items-center mt-16">
      <div className="w-3/4 ">
        <div>
          <h2 className="text-2xl font-bold mb-3">React State</h2>
          <LocalState />
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-3">Global State</h2>
          <GlobalState />
        </div>
      </div>
    </div>
  );
}

export default App;
