import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = await params;
  const title = await new Promise((res) =>
    setTimeout(() => {
      res(`iphone ${productId}`);
    }, 100)
  );
  return {
    title: `Product ${title}`,
  };
};

export default async function Page({ params }: Props) {
  const productId = (await params).productId;
  return <div>Details about product {productId}</div>;
}
