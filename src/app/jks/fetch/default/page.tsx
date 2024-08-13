import CodeSnippet from "@/component/JKS/misc/CodeSnippet/CodeSnippet";

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page() {
  const data = await getData();
  const code = `
    async function getData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      return res.json();
    }
  `
  return (
    <div>
      <h1>Data Fetching Example</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <CodeSnippet codeString={code} />
    </div>
  );
}