import InitialState from "@/src/redux/types/initialStates";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const typedUseSelector: TypedUseSelectorHook<InitialState> = useSelector;

function HomePage({ API_URL }) {
  const {
    authentication: {
      login: { loading },
    },
  } = typedUseSelector((state) => state);

  return (
    <div>
      Welcome to Next.js! {API_URL} and
      {loading}
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      API_URL: process.env.API_URL,
    },
  };
}

export default HomePage;
