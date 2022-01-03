import { isArray } from "lodash";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import useList from "./hooks/useList";

function List() {
  // const fetcher = (a) => mainApi.get(a).then((res) => res.data);
  const { data, error, isValidating, mutate } = useList();
  console.log(data, error?.response, isValidating);

  const click = () => {
    mutate(
      "getProducts",
      [
        ...data,
        {
          id: "21",
          name: "name 21",
          price: 195,
          status: false,
        },
      ],
      false
    );
  };

  const render = useMemo(() => {
    if (isValidating) return <div>loading...</div>;
    if (isArray(data) && data.length > 0) {
      return data.map((item) => <div key={item.id}>{item.name}</div>);
    }
    if (error) return <div>failed to load</div>;
    return null;
  }, [data, error, isValidating]);

  // render data
  return (
    <>
      <Link to="/about">About page</Link>

      {render}

      <button onClick={click}>Click</button>
    </>
  );
}

export default List;
