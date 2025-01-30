import { Metadata } from "next";
import { Counter } from "./counter";

export const metadata: Metadata = {
  title: "my counter",
};

type Props = {};

const Page = (props: Props) => {
  return <Counter />;
};

export default Page;
