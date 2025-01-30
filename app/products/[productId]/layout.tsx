import { PropsWithChildren } from "react";

export default function ProductDetailsLayout({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <h2>Featured products</h2>
    </>
  );
}
