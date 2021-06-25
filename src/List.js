import { useState } from "react";
import { Link } from "react-router-dom";
import useList from "./hooks/useList";

function List() {
  const [number, setNumber] = useState(0);
  // const fetcher = (a) => mainApi.get(a).then((res) => res.data);
  const { data, error } = useList();
  console.log(data, error?.response);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  //

  const click = () => {
    const newNumber = Math.random();
    setNumber(newNumber);
  };

  // render data
  return (
    <>
      <Link to="/about">About page</Link>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      <button onClick={click}>Click</button>
    </>
  );
}

export default List;
