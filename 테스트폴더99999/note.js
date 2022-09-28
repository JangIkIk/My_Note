const posts = [
  {title: "Hello World", content: "Welcome to learning React!" },
  {title: "Installation", content: "You can install React via npm." },
];


function Blog() {
  const po = posts.map((data)=>{
    console.log(data.title);
    console.log(data.content);
  })

  return po;
}

Blog();