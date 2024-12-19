import Image from "next/image";

export default function Page() {
  return (
    <main className="flex">
      <header></header>
      <Image
        className=""
        src={"/fun-me.jpg"}
        alt="daniel echevarria thinking"
        width={3060}
        height={4080}
      />
      <p>About</p>
    </main>
  );
}
