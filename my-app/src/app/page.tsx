import Link from "next/link";


const Home = () => {
  return (
    <div>
        <h1>Welcome Home</h1>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/products"}>Product</Link>
    </div>
  )
}

export default Home;
