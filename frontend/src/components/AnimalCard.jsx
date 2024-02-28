function AnimalCard({ props, character }) {
  return (
    <>
      <div className="flex justify-center px-1 py-5">
        <div className="w-[200px] h-[200] rounded-md px-2 py-2 border-black-500 border-2">
          <div className="flex justify-center ">
            <img src={props} alt="" />
          </div>

          <div className="p-4 ">
            <button
              type="button"
              className="mt-4 rounded-sm bg-black mx-11 px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              {character}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimalCard;
