import Link from "next/link";

export default function HomePage() {
  return (
    <l1>
      <Link href="/news/something-new"> news1 </Link>
      <Link href="/news/something-new"> news3 </Link>
      <Link href="/news/something-new"> news2 </Link>
    </l1>
  );
}
