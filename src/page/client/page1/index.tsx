
import LinkButton from "../../../components/LinkButton";

const HomePage = () => {
  return (
    <div className="w-full h-[500px] bg-white">
        <div className="flex justify-center items-center color-gray text-[50px] max-w-[1200px] h-full m-auto">
            <LinkButton href="/page1">Go to Home</LinkButton>
        </div>
    </div>
  );
};

export default HomePage;
