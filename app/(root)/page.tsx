import SearchForm from "../components/SearchForm";

export default async function Home({ searchParams }: {
  searchParams?: {
    query?: string
  }
}) {

  const query = (await searchParams)?.query
  return (

    < >
      <section className="pink_container">

        <h1 className="heading">Pitch Your StartUp <br />Connect your enterperniour</h1>
        <p className="sub-heading !max-2-3xl">
          We are here to help you pitch your startup and connect with investors
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}

