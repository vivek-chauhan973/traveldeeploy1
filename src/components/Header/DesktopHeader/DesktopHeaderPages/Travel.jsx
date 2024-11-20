import React from "react";
import Link from "next/link";

const Travel = () => {

  return (
    <div className="flex min-w-[200px] px-4 pb-3 h-auto bg-gray-100 mt-3 rounded-b-lg">
      <div className="ml-5 mt-1 object-contain">
        <div className="flex flex-col pt-2">
          <a className="text-para font-semibold mb-2" href="/travel/blog">
            Blog
          </a>
          <a className="text-para font-semibold mb-2" href="/travel/travel-guide">
           Travel Guide
          </a>
          <a className="text-para font-semibold mb-2" href="/travel/news">
           News
          </a>
        </div>
      </div>
    </div>
  );
};

export default Travel;
