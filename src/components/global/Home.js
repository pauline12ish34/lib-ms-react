import React from "react";

import { Link } from "react-router-dom";
import AuthorList from "../AuthorList";

const Home = () => {
  return (
    <div>
<AuthorList/>

      <div>
        <Link
          to="/add-author"
          className=" w-64 text-lg py-5 bg-gray-800 text-slate-50 border border-white rounded-lg hover:bg-gray-600"
        >
          GestStarted
        </Link>
      </div>

    </div>
  );
};

export default Home;
