import { homeContentEn } from "@/locale/en/home";
import { homeContentEs } from "@/locale/es/home";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = () => {
    const newLocale = locale === "en" ? "es" : "en";
    router.push(router.pathname, router.pathname, { locale: newLocale });
  };

  const {
    navbar: { about, contact, cart, series },
  } = router.locale === "en" ? homeContentEn : homeContentEs
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white shadow-md">
      <div className="flex items-center space-x-4 cursor-pointer">
        <Link href="/" passHref>
          <Image src="/next.svg" alt="logo" width={50} height={50} />
        </Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/about">{about}</Link>
        </li>
        <li>
          <Link href="/contact">{contact}</Link>
        </li>
        <li>
          <Link href="/cart">{cart}</Link>
        </li>
        <li>
          <Link href="/series">{series}</Link>
        </li>
      </ul>
      <button
        onClick={changeLanguage}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        {locale === "en" ? "Español" : "English"}
      </button>
    </nav>
  );
}
