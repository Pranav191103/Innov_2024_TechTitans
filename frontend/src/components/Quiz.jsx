function Quiz() {
  return (
    <>
      {/* <div className="flex justify-start w-[95%] border-2 mx-10 py-5 my-5 grid-cols-3 px-10 "> */}
      <div className="mx-10 my-10">
        <h1 className="font-bold text-2xl w-[300px]">Q1.What is Your Name?</h1>
        <div className="mx-5">
          <h2>A.</h2>
          <h2>B.</h2>
          <h2>C.</h2>
          <h2>D.</h2>
          <br></br>
          <input type="text" placeholder="Enter Your Answer" />
          <hr></hr>
        </div>
      </div>
    </>
  );
}
export default Quiz;
