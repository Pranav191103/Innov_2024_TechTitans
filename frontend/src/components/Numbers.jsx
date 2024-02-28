import Card from "./Card";

function Numbers() {
  return (
    <>
      <div className="flex w-64 ">
        <div className=""></div>
        <div className="flex justify-center h-[250px] m-10 mx-5 w-[50]">
          <Card props="1" />
          <Card props="2" />
          <Card props="3" />
          <Card props="4" />
          <Card props="5" />
          <Card props="6" />
        </div>
        <div className="flex justify-center h-[250px] m-10 mx-5 w-[50]">
          <Card props="7" />
          <Card props="8" />
          <Card props="9" />
          <Card props="10" />
          <Card props="11" />
          <Card props="12" />
        </div>
        <div className="flex justify-center h-[250px] m-10 mx-5 w-[50]">
          <Card props="13" />
          <Card props="14" />
          <Card props="15" />
          <Card props="16" />
          <Card props="17" />
          <Card props="18" />
        </div>
        <div className="flex justify-center h-[250px] m-10 mx-5 w-[50]">
          <Card props="19" />
          <Card props="20" />
          <Card props="21" />
          <Card props="22" />
          <Card props="23" />
          <Card props="24" />
        </div>
        <div className="flex justify-center h-[250px] m-10 mx-5 w-[50]">
          <Card props="25" />
          <Card props="26" />
          <Card props="27" />
          <Card props="28" />
          <Card props="29" />
          <Card props="30" />
        </div>
      </div>
    </>
  );
}

export default Numbers;
