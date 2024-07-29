export default function Header() {
  return (
    <div className="w-full border">
      <div className="container mx-auto flex flex-row">
        <div className="w-full md:basis-3/4 lg:basis-3/4 p-4">01</div>
        <div className="hidden lg:block md:block basis-2/4 p-4 ">02</div>
      </div>
    </div>
  );
}
