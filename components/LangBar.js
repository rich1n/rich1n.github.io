import Link from "next/link";
import { useRouter } from "next/router";

export default function LanguageBar() {
  const currentPath = useRouter().asPath;
  const { locale } = useRouter();
	const defaultLang = locale === 'es'

  return (
    <section className="text-sm">
      <Link href={currentPath} locale="es">
        <p className="underline hover:text-blue-500 duration-300 p-1">
          { defaultLang ? 'Español' : 'Spanish' }
        </p>
      </Link>
      <Link href={currentPath} locale="en">
        <p className="underline hover:text-blue-500 duration-300 p-1">
        { defaultLang ? 'Inglés' : 'English' }
        </p>
      </Link>
    </section>
  );
}
