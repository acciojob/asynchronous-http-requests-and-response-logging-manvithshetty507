//your JS code here. If required.
const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

for(let url of urls) {
	const response = fetch(url)
		.then((res) => res.json())
		.then((data) => console.log(data))
}