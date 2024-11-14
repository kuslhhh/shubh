import SearchForm from "@/components/SearchForm";
import StarupCard from "@/components/StarupCard";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {

  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {_id: 1, name: "kusha"},
      _id:1,
      description: "Something Intresting",
      image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robots"
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your Startup <br /> Connect with us</h1>

        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on pitches, and Get noticed in Virtual Competitions</p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Result for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <StarupCard key={post?._id} post={post} />
            ))
          ) : (
            <p>No posts found</p>
          )}
        </ul>
      </section>

    </>
  );
}
