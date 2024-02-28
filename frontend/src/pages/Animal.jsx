import AnimalCard from "../components/AnimalCard.jsx";

function Animal() {
  return (
    <div className="flex w-64 ">
      <div className=" ">
        <div className="flex justify-center h-[250px] m-10 mx-5 w-[50]">
          <AnimalCard
            props="https://www.hindustantimes.com/ht-img/img/2023/08/25/1600x900/international_dog_day_1692974397743_1692974414085.jpg"
            character="Dog"
          />
          <AnimalCard
            props="https://c02.purpledshub.com/uploads/sites/62/2022/09/GettyImages-200386624-001-d80a3ec.jpg"
            character="Fish"
          />
          <AnimalCard
            props="https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg"
            character="Cow"
          />
          <AnimalCard
            props="https://img.freepik.com/free-photo/cute-goat-grazing-green-meadow-generated-by-ai_188544-14284.jpg"
            character="Goat"
          />
          <AnimalCard
            props="https://www.collinsdictionary.com/images/full/deer_123016792.jpg"
            character="Deer"
          />
        </div>
      </div>
    </div>
  );
}
export default Animal;
