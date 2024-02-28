import { Link } from "react-routerLink";
function Levels() {
  return (
    <>
      <div className="flex justify-center my-5 grid-cols-3 px-10 ">
        <Link
          type="button"
          className="inline-flex items-center rounded-md shadow-md border-2 h-15 w-full bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-black/80"
        >
          Level 0: Learning Alphabets.
        </Link>
      </div>
      <div className="flex justify-center my-5 grid-cols-3 px-10 ">
        <Link
          type="button"
          className="inline-flex items-center rounded-md shadow-md border-2 h-15 w-full bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-black/80"
        >
          Level 1: Learning Two letter Words.
        </Link>
      </div>
      <div className="flex justify-center my-5 grid-cols-3 px-10 ">
        <Link
          type="button"
          className="inline-flex items-center rounded-md shadow-md border-2 h-15 w-full bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-black/80"
        >
          Level 2: Learning Three letter Words.
        </Link>
      </div>
      <div className="flex justify-center my-5 grid-cols-3 px-10 ">
        <Link
          type="button"
          className="inline-flex items-center rounded-md shadow-md border-2 h-15 w-full bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-black/80"
        >
          Level 3: Learning color and Shapes.
        </Link>
      </div>
      <div className="flex justify-center my-5 grid-cols-3 px-10 ">
        <Link
          type="button"
          className="inline-flex items-center rounded-md shadow-md border-2 h-15 w-full bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-black/80"
        >
          Level 4: Learning Numbers.
        </Link>
      </div>
      <div className="flex justify-center my-5 grid-cols-3 px-10 ">
        <Link
          type="button"
          className="inline-flex items-center rounded-md shadow-md border-2 h-15 w-full bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-black/80"
        >
          Level 5: Learning Animal names.
        </Link>
      </div>

      <div className="flex justify-center my-5 grid-cols-3 px-10 ">
        <Link
          type="button"
          className="inline-flex items-center rounded-md shadow-md border-2 h-15 w-full bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-black/80"
        >
          Level 6: Learning Common Things.
        </Link>
      </div>
    </>
  );
}
export default Levels;
