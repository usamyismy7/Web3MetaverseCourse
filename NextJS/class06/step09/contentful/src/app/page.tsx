import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

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
  console.log(blogs);
  return (
    <div className="max-w-2xl m-6 mx-auto">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div>
        {blogs.items.map((item: any) => (
          <>
            <div>{item.fields.name}</div>
            <div>{documentToReactComponents(item.fields.description)}</div>
            <div>
              {blogs.includes.Asset.map((asset: any) => (
                <div key={item.fields.image.sys.id}>
                  {item.fields.image.sys.id == asset.sys.id ? (
                    <Image
                      src={"https:" + asset.fields.file.url}
                      alt=""
                      width="400"
                      height="400"
                    />
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
            </div>
            <div>{documentToReactComponents(item.fields.description2)}</div>
            <div>
              {blogs.includes.Asset.map((asset: any) => (
                <div key={item.fields.image2[0].sys.id}>
                  {item.fields.image2.map((img2: any) => (
                    <div key={img2.sys.id}>
                      {img2.sys.id == asset.sys.id ? (
                        <Image
                          src={"https:" + asset.fields.file.url}
                          alt=""
                          width="400"
                          height="400"
                        />
                      ) : (
                        <div></div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

{
  /* when a single image is returned */
}
{
  /* <Image src={data} alt="Trees" width={500} height={500} /> */
}

{
  /* when an array of images is returned */
}
{
  /* {data.sys.map(async (item: any, index: any) => {
          let image: any = await getImage(item.id);
          console.log(image);
          return (
            <div key={index}>
              <Image src={image} alt="Trees" width={500} height={500} />
            </div>
          );
        })} */
}
{
  /* let image2Path: any = item.fields.image2;
          let image2: any = await getImage(image2Path.sys.id);
          console.log(image2);
              <Image src={image2} alt="Foods" width={500} height={500} /> */
}
