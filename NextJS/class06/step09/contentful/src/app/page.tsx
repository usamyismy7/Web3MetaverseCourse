import { Inter } from "next/font/google";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const inter = Inter({ subsets: ["latin"] });

async function getBlogs() {
  const res = await fetch(
    "https://cdn.contentful.com/spaces/mgexi50d4de6/environments/master/entries?access_token=vY4OYXJkBw72mUIeAuCg0_5WF2HG4edqQchTFNfykVU",
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export default async function App() {
  const blogs = await getBlogs();
  const items = blogs.items || []; // check if 'items' exists in the response
  return (
    <div className="max-w-2xl m-6 mx-auto">
      <ul>
        {items.map((item: any) => (
          <li key={item.sys.id}>
            <h2>{item.fields.title}</h2>
            {/* <p>{item.fields.description}</p> */}
            {documentToReactComponents(item.fields.description)}
          </li>
        ))}
      </ul>
    </div>
  );
}
