import "./index.css";
import "antd/dist/antd.css";
import { Divider } from "antd";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import { useState } from "react";
import Context from "./context";

function App() {
  let RANDOM_USER_API = `https://randomuser.me/api/?results=100`;
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiURL, setApiURL] = useState(RANDOM_USER_API);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({
    keyword: "",
    gender: "",
    sortBy: "",
    sortOrder: "",
  });

  return (
    <>
      <Context.Provider
        value={{
          data,
          setData,
          columns,
          setColumns,
          loading,
          setLoading,
          apiURL,
          setApiURL,
          RANDOM_USER_API,
          setFilter,
          filter,
          currentPage,
          setCurrentPage,
        }}
      >
        {/* HEADER START*/}
        {/* SEARCH */}
        {/* FILTER */}
        <Navbar />
        {/* HEADER END*/}
        <Divider />
        {/* DATATABLE START*/}
        <Table />
        {/* DATATABLE END */}
      </Context.Provider>
    </>
  );
}

export default App;
