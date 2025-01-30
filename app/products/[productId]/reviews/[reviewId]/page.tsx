import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) {
  const { productId, reviewId } = await params;

  if (+reviewId > 1000) notFound();

  return (
    <div>
      Review {reviewId} for product {productId}
    </div>
  );
}
