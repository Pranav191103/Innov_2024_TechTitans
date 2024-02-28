import Card from "../components/FirstLevelCard.jsx";

function Alpha() {
  // let length = 25;
  // let cards = [];
  // for (let index = 0; index < length; index++) {
  //     cards.push(<Card key={index} />);
  // }

  return (
    <>
      <div className="flex w-64 ">
        <div className=""></div>
        <div className=" ">
          <div className="flex justify-center h-[250px] m-10 mx-5 w-[50]">
            <Card props="A" />
            <Card props="B" />
            <Card props="C" />
            <Card props="D" />
            <Card props="E" />
            <Card props="F" />
          </div>
          <div className="flex justify-center h-[250px] m-10 mx-5 w-[50]">
            <Card props="G" />
            <Card props="H" />
            <Card props="I" />
            <Card props="J" />
            <Card props="K" />
            <Card props="L" />
          </div>
          <div className="flex justify-center h-[250px] m-10 mx-5 w-[50]">
            <Card props="M" />
            <Card props="N" />
            <Card props="O" />
            <Card props="P" />
            <Card props="Q" />
            <Card props="R" />
          </div>
          <div className="flex justify-center h-[250px] m-10 mx-5 w-[50]">
            <Card props="S" />
            <Card props="T" />
            <Card props="U" />
            <Card props="V" />
            <Card props="X" />
            <Card props="Y" />
            <Card props="Z" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Alpha;
