import { useState } from "react";

export function LocalState() {
  const [component1Count, setComponent1Count] = useState(0);
  const [component2Count, setComponent2Count] = useState(0);
  const [component3Count, setComponent3Count] = useState(0);

  const updateComponentData = (componentId: string) => {
    switch (componentId) {
      case "component1":
        setComponent1Count((prev: number) => prev + 1);
        break;
      case "component2":
        setComponent2Count((prev: number) => prev + 1);
        break;
      case "component3":
        setComponent3Count((prev: number) => prev + 1);
        break;
    }
  };

  return (
    <div>
      <ControlPanel increment={updateComponentData} />
      <div className="mt-3 border-2 border-gray-400 rounded-md flex justify-center gap-5 p-6">
        <ExpensiveComponent id="component1" data={component1Count} />
        <ExpensiveComponent id="component2" data={component2Count} />
        <ExpensiveComponent id="component3" data={component3Count} />
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

function ExpensiveComponent({ id, data }: { id: string; data: number }) {
  console.log("render:", id);

  return (
    <div className=" p-7 rounded-md bg-orange-200">
      <div>{id}</div>
      <div className="font-bold">Value: {data}</div>
    </div>
  );
}
