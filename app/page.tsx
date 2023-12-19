import Link from "next/link";

export default function Home() {
  return (
    <div className="text-3xl font-bold">
      HELLO WOLRD
      <Link className="inline-block ml-4" href={"/about"}>
        Go to Hello
      </Link>
    </div>
  );
}
