import { BottomWarning } from "../components/BottomWarning";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";

export const Home = () => {
    return (
      <div>
        <Heading label={'Sterling Seths'}></Heading>
        <SubHeading label={'Facilitates P2P transactions with initial dummy balances.'}></SubHeading>
        <BottomWarning label={"Join the elites,"} buttonText={"Sign up"} to={"/signup"}></BottomWarning>
        <span className='text-md font-medium'>
        </span>
      </div>
    );
  };
  
  export default Home;