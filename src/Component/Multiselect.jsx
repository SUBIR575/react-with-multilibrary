import React, { useState, useEffect } from "react";
import Select from "react-select";
import { motion } from "framer-motion";
const Multiselect = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [data, setData] = useState([{ value: "one", label: "two" }]);
  const handleChange = (e) => {
    setData(e);
  };
  console.log({ data });
  useEffect(() => {
    fetch("https://fakerestapi.azurewebsites.net/api/v1/Activities", {
      method: "get",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        style={{ height: "100vh", backgroundColor: "#D3D3D3" }}
      >
        <Select
          defaultValue={data}
          isMulti
          name="colors"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleChange}
        />
      </motion.div>
    </>
  );
};

export default Multiselect;
