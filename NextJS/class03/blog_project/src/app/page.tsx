import Hero from "@/components/custom/Hero";
import Blog from "@/components/custom/Blog";
import Footer from "@/components/custom/Footer";
// import Book from "@/components/Book";

export default async function Home() {
  //   const res = await fetch("https://simple-books-api.glitch.me/books/", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await res.json();
  //   console.log(data);

  return (
    <>
      {/* {data.map((item: any) => (
        <Book
          key={item.id}
          name={item.name}
          type={item.type}
          available={item.available ? "Available" : "Not Available"}
        />
      ))} */}
      <Hero />
      <Blog />
      <Footer />
    </>
  );
}
