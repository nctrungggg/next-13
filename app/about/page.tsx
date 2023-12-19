"use client";

import { useRouter } from "next/navigation";

export interface AboutProps {}

export default function About(props: AboutProps) {
  const router = useRouter();

  const click = () => {
    console.log("render");
    router.push("/");
  };

  return (
    <div>
      About page!
      <button onClick={click}>Back</button>
      <button onClick={click}>Back</button>
      <button onClick={click}>Back</button>
      <button onClick={click}>Back</button>
    </div>
  );
}
