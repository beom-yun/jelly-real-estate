export default function PropertyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <h1>Property Detail for id {params.id}</h1>;
}
