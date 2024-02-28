// Home.js
import React from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
const language = [
  {
    image:
      "https://imgs.search.brave.com/eL7S_7fRP9Fp7k4EDRZRGld8jcN82xLEnv5jx4pMfQE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMzU5MTQy/OS81MjQ2L2kvNDUw/L2RlcG9zaXRwaG90/b3NfNTI0NjI3MDEt/c3RvY2stcGhvdG8t/cGVvcGxlLWFuZC1l/bmdsaXNoLWNvbmNl/cHQuanBn",
    name: "English",
    state: "start learning", // Case adjusted to match Card component
  },
  {
    image:
      "https://imgs.search.brave.com/JeAbbd-LsomAKT_5XTFDQH6Sw6OCz7BJqAOZRAt9ns4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA0/NDExOTk0Ni9waG90/by9sZWFybi1oaW5k/aS1lZHVjYXRpb24t/YW5kLWJ1c2luZXNz/LWJhY2tncm91bmQu/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9SlFacW9U/TmpiMjdaNU05MVJ2/RF9FYUs4cXR6MUll/MUlPRzlRSFZlV2Rh/WT0",
    name: "Hindi ",
    state: "coming soon",
  },
  {
    image:
      "https://t3.ftcdn.net/jpg/01/93/32/82/240_F_193328228_1YaCRqvQrumfStWKu1Z91lSDYr5vJPZB.jpg",
    name: "Punjabi",
    state: "coming soon",
  },
  {
    image:
      "https://imgs.search.brave.com/uuvhQ7VGa-PM3YP3umKtAq-mPLRt8FiXNWE6SapqU0g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/MDQzMDY4L3Bob3Rv/L2l0YWx5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1TSVJD/aWtmLVEwV2VEWE42/QndCa0RmVDU1OXFS/T3lSRE9LSXVINDF1/ZExjPQ",
    name: "Italian",
    state: "coming soon",
  },
  {
    image:
      "https://c8.alamy.com/comp/2TAY9Y3/marathi-language-classic-background-marathi-is-a-official-language-in-indian-state-maharashtra-2TAY9Y3.jpg",
    name: "Marathi",
    state: "coming soon",
  },
  {
    image:
      "https://imgs.search.brave.com/ya99TbGzINrFr_of543Xd5bm_3bfMoLJmDpbZ6skSJo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMDM1/MC8xMDcwMS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzEwNzAxMzEz/Ni1zdG9jay1waG90/by1sZWFybi1zcGFu/aXNoLWNvbmNlcHQu/anBn",
    name: "spanish",
    state: "coming soon",
  },
];

const Home = () => {
  const { _id } = useParams();
  return (
    <div className="grid grid-cols-3 justify-center p-16 gap-10">
      {language.map((card, index) => (
        <Card
          key={index}
          name={card.name}
          image={card.image}
          state={card.state}
          user={_id}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
        />
      ))}
    </div>
  );
};

export default Home;
