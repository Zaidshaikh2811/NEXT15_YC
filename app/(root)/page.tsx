import SearchForm from "../components/SearchForm";
import StartupCard from "../components/StartupCard";

export default async function Home({ searchParams }: {
  searchParams?: {
    query?: string
  }
}) {

  const query = (await searchParams)?.query



  const posts = [{
    _createdAt: new Date("2022-01-01"),
    Views: 55, author: { _id: 1, name: "name" },
    id: 1,
    title: "title",
    description: "description",
    image: "/image.jpg",
    category: "category"
  }]

  return (

    < >
      <section className="pink_container">

        <h1 className="heading">Pitch Your StartUp <br />Connect your enterperniour</h1>
        <p className="sub-heading !max-2-3xl">
          We are here to help you pitch your startup and connect with investors
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          All Startups
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: startUpCardType) => {
              return (<StartupCard key={post?.id} post={post} />
              )
            }
            )) : <p>No startups found</p>}
        </ul>
      </section>
    </>
  );
}

