export async function getServerSideProps({ res }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/getallblogs?selectType=blog`
  );
  const travelresponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/getallblogs?selectType=travel-guide`
  );
  const newsresponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/getallblogs?selectType=news`
  );
  const packageresponse=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/package/get-packages`);
  const carpackageresponse=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cars/package/get-packages`);
  const stateresponse=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/public/states`);
  const citiesresponse=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/public/get-cities`);
  const categoryresponse=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/public/get-category`);
  const package1=await packageresponse.json()
  const carpackage1=await carpackageresponse.json()
  const states=await stateresponse.json();
  const cities=await citiesresponse.json();
  const news = await newsresponse.json();
  const travel = await travelresponse.json();
  const post=await response.json();
  const category=await categoryresponse.json();
  const fields = post?.data
  ?.filter((post) => post.title && post.updatedAt)
  .map((post) => ({
    loc: `${process.env.NEXT_PUBLIC_BASE_URL}/travel/blog/${encodeURIComponent(post.title.replace(/\s+/g, "-"))}`,
    lastmod: new Date(post.updatedAt).toISOString(),
  }));
  const newsfields = news?.data
    ?.filter((post) => post.title && post.updatedAt)
    .map((post) => ({
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/travel/news/${encodeURIComponent(post.title.replace(/\s+/g, "-"))}`,
      lastmod: new Date(post.updatedAt).toISOString(),
    }));

  const travelfields = travel?.data
    ?.filter((post) => post.title && post.updatedAt)
    .map((post) => ({
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/travel/travel-guide/${encodeURIComponent(post.title.replace(/\s+/g, "-"))}`,
      lastmod: new Date(post.updatedAt).toISOString(),
    }));
    const packagefields = package1?.packages
    ?.filter((post) => post.url && post.updatedAt)
    .map((post) => ({
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/package/${encodeURIComponent(post.url)}`,
      lastmod: new Date(post.updatedAt).toISOString(),
    }));
    const carpackagefields = carpackage1?.packages
    ?.filter((post) => post.url && post.updatedAt)
    .map((post) => ({
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/car-rental/${post?.location?.url}/${encodeURIComponent(post.pageUrl
      )}`,
      lastmod: new Date(post.updatedAt).toISOString(),
    }));
    const statesfields = states?.states
    ?.filter((post) => post.url && post.updatedAt)
    .map((post) => ({
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/${post?.country?.url}/${encodeURIComponent(post.pageUrl)}`,
      lastmod: new Date(post.updatedAt).toISOString(),
    }));
    const citiesfields = cities
    ?.filter((post) => post.url && post.updatedAt)
    .map((post) => ({
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/india/${encodeURIComponent(post.url)}-tour-packages`,
      lastmod: new Date(post.updatedAt).toISOString(),
    }));
    const carcitiesfields = cities
    ?.filter((post) => post.url && post.updatedAt)
    .map((post) => ({
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/car-rental/${encodeURIComponent(post.url)}-car-hire`,
      lastmod: new Date(post.updatedAt).toISOString(),
    }));
    const categoryfields = category?.category
    ?.filter((post) => post.category && post.updatedAt)
    .map((post) => ({
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/speciality-tours/${encodeURIComponent(post.category)}-tour-packages`,
      lastmod: new Date(post.updatedAt).toISOString(),
    }));
    const staticUrl=[
      {
        loc:`${process.env.NEXT_PUBLIC_BASE_URL}/speciality-tours`,
        lastmod: new Date().toISOString(),
      },
      {
        loc:`${process.env.NEXT_PUBLIC_BASE_URL}/india`,
        lastmod: new Date().toISOString(),
      },
      {
        loc:`${process.env.NEXT_PUBLIC_BASE_URL}/travel/blog`,
        lastmod: new Date().toISOString(),
      },
      {
        loc:`${process.env.NEXT_PUBLIC_BASE_URL}/travel/travel-guide`,
        lastmod: new Date().toISOString(),
      },
      {
        loc:`${process.env.NEXT_PUBLIC_BASE_URL}/travel/news`,
        lastmod: new Date().toISOString(),
      }
    ]
  const sitemapData=[...staticUrl,...travelfields,...newsfields,...fields,...packagefields,...statesfields,...citiesfields,...categoryfields,...carcitiesfields,...carpackagefields];
  const sitemap = generateSitemap(sitemapData);

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
}

const generateSitemap = (fields) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${fields
      .map(
        (field) => `
      <url>
        <loc>${field.loc}</loc>
        <lastmod>${field.lastmod}</lastmod>
      </url>`
      )
      .join("")}
  </urlset>`;
};

export default function Sitemap() {} // Required but does nothing
