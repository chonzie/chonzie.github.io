import Image from "next/image";


export default function Footer() {
  return (
  <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <p>© 2024 snow</p>
  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href="https://www.vietnamcoracle.com/ho-chi-minh-road-the-best-bits/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      aria-hidden
      src="/file.svg"
      alt="File icon"
      width={16}
      height={16}
    />
    Helpful Vietnam Coracle →
  </a>
    </footer>
);
}