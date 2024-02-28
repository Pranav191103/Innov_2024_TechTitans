import { useNavigate } from "react-router-dom";

function Levels() {
  const navigate = useNavigate();

  const handleLevelClick = (level) => {
    // Navigate to the corresponding level route
    navigate(`/level${level}`);
  };

  return (
    <div>
      <div className="flex justify-center my-5 grid-cols-3 px-10 ">
        <button
          onClick={() => handleLevelClick(0)}
          className="inline-flex items-center rounded-md shadow-md border-2 h-15 w-full bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-black/80"
        >
          Level 0: Learning Alphabets.
        </button>
      </div>
      <div className="flex justify-center my-5 grid-cols-3 px-10 ">
        <button
          onClick={() => handleLevelClick(1)}
          className="inline-flex items-center rounded-md shadow-md border-2 h-15 w-full bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-black/80"
        >
          Level 1: Learning Three letter Words.
        </button>
      </div>
      <div className="flex justify-center my-5 grid-cols-3 px-10 ">
        <button
          onClick={() => handleLevelClick(2)}
          className="inline-flex items-center rounded-md shadow-md border-2 h-15 w-full bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-black/80"
        >
          Level 2: Learning color and Shapes.
        </button>
      </div>
      <div className="flex justify-center my-5 grid-cols-3 px-10 ">
        <button
          onClick={() => handleLevelClick(3)}
          className="inline-flex items-center rounded-md shadow-md border-2 h-15 w-full bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-black/80"
        >
          Level 3: Learning Numbers.
        </button>
      </div>
      <div className="flex justify-center my-5 grid-cols-3 px-10 ">
        <button
          onClick={() => handleLevelClick(4)}
          className="inline-flex items-center rounded-md shadow-md border-2 h-15 w-full bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-black/80"
        >
          Level 4: Learning Animal names.
        </button>
      </div>
      <div className="flex justify-center my-5 grid-cols-3 px-10 ">
        <button
          onClick={() => handleLevelClick(5)}
          className="inline-flex items-center rounded-md shadow-md border-2 h-15 w-full bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-black/80"
        >
          Level 5: Learning Common Things.
        </button>
      </div>
      <div className="flex justify-center my-5 grid-cols-3 px-10 ">
        <button
          onClick={() => handleLevelClick(6)}
          className="inline-flex items-center rounded-md shadow-md border-2 h-15 w-full bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-black/80"
        >
          Level 6: Riddle
        </button>
      </div>
    </div>
  );
}

export default Levels;
