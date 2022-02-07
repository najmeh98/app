const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Profile() {
  const { error, data } = useSWR("http://localhost:4000/list", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div> loading...</div>;

  //render data

  return <div>hello {data.name}</div>;
}
