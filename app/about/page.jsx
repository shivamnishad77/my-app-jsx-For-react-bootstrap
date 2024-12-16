import Image from "next/image";
import cards from "@/components/BasicCards"

export default function Home() {
  return (
   <div>
    <h1 className="text-8xl">This is About page</h1>
    <cards />
   </div>
  );
}
