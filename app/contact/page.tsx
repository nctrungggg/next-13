import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Next App",
  description: "Generated by create next app",
};
export interface ContactProps {}

export default function Contact(props: ContactProps) {
  return <div>Contact page! 123</div>;
}
