export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold">Car Details</h1>
      <p className="text-muted-foreground mt-2">Car slug: {slug}</p>
    </div>
  );
}
