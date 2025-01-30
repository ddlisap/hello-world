export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <div>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </div>
    );
  } else if (slug?.length === 1) {
    return <div>Viewing docs for feature {slug[0]}</div>;
  }

  return <div>docs home page</div>;
}
