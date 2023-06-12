import Feeds from "@components/Feeds";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an AI-powered prompt generator that helps you get unstuck,
        write more, share creative prompts and have fun.
      </p>
      <Feeds/>
    </section>
  );
};

export default Home;
 