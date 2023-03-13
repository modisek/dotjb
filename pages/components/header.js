import Link from "next/link";

export default function Header() {
  return (
    <div>
      <nav>
        <ul>
          <Link href="/">home</Link>
          <Link href="/components/search">search</Link>
        </ul>
      </nav>
    </div>
  );
}
