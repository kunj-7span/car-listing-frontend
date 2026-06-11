import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <img src="logo.png" alt="Car" className="w-40" />
      <h1 className="text-5xl font-bold ">SahiCar</h1>
      <p className="text-sm text-gray-500 font-semibold">Find your right car</p>
      <div className="flex items-center justify-center space-x-4  mt-4">
        <Button>Search</Button>
        <Button>Compare</Button>
        <Button >Explore</Button>
      </div>
    </div>
  );
}
