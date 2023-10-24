import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Prompt Manager
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> Share & Discover AI Prompts</span>
      </h1>
      <p className="desc text-center">
        Prompt Manager is a community-driven platform for sharing and discovering AI prompts.
      </p>

      <Feed />

    </section>
  )
}

export default Home