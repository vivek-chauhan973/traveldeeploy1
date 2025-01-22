import Link from "next/link"

function CityCard({ cities, setOpenClose }) {
  return (
    <div>
      <div className="flex gap-3 text-sm p-1 mt-2 flex-wrap ">
        {cities?.map((item, i) =>
          <Link key={i} href={`/india/` + item?.url + "-tour-packages"}
            onClick={() => setOpenClose(false)}
          >
            {item?.name}
          </Link>)}
      </div>
    </div>
  )
}

export default CityCard