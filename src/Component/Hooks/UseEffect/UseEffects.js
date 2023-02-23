import useFetch from "../CustomHooks/useFetch";

function UseEffects() {
  const { Data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const loadingmsg = "Data is Loading";

  return (
    <div>
      {Data &&
        Data.map((data, index) => {
          return <li>{data.title}</li>;
        })}
      <p>{isLoading && loadingmsg}</p>
      <p>{error && error}</p>
    </div>
  );
}

export default UseEffects;
