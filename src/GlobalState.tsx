import { useStore } from "./store";

export function GlobalState() {
  const increment = useStore((state) => state.increment);

  return (
    <div>
      <ControlPanel increment={increment} />
      <div className="mt-3 border-2 border-gray-400 rounded-md flex justify-center gap-5 p-6">
        <ExpensiveComponent id="component1" />
        <ExpensiveComponent id="component2" />
        <ExpensiveComponent id="component3" />
      </div>
    </div>
  );
}

function ControlPanel({ increment }: { increment: (id: string) => void }) {
  return (
    <div className="border-2 border-gray-400 p-3 rounded-md flex justify-center gap-5">
      <button
        className="bg-violet-700 text-white px-4 py-2 rounded-md mr-2 hover:bg-violet-800"
        onClick={() => increment("component1")}
      >
        Increment 1
      </button>

      <button
        className="bg-violet-700 text-white px-4 py-2 rounded-md mr-2 hover:bg-violet-800"
        onClick={() => increment("component2")}
      >
        Increment 2
      </button>

      <button
        className="bg-violet-700 text-white px-4 py-2 rounded-md mr-2 hover:bg-violet-800"
        onClick={() => increment("component3")}
      >
        Increment 3
      </button>
    </div>
  );
}

function ExpensiveComponent({ id }: { id: string }) {
  const data = useStore((state) => {
    if (id === "component1") return state.component1;
    if (id === "component2") return state.component2;
    if (id === "component3") return state.component3;
  });

  console.log("render:", id);

  return (
    <div className=" p-7 rounded-md bg-orange-200">
      <div>{id}</div>
      <div className="font-bold">Value: {data}</div>
    </div>
  );
}
