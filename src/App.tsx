import useAsync from "@/hooks/useAsync";

function App() {
  const { status, value, error } = useAsync(getMessages, {}, true);

  if (!error) {
    console.log(status);
    console.log(value);
  }

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;

/**
 * @description async function for getting messages from server
 * @returns the api response if successful; else empty object
 */
const getMessages = async () => {
  const response = await fetch(`/api`, {
    method: "GET",
  });

  if (response.ok) {
    return (await response.json()) as [];
  }
};
