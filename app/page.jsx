import Feeds from "@components/Feeds";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> Internet Trends</span>
      </h1>
      <p className="desc text-center">
        <span className="orange_gradient">TrendMania </span>
        is the number one platform to find and add the latest trends in the
        World. Create and share creative trends and have fun.
      </p>
      <Feeds />
    </section>
  );
};

export default Home;
