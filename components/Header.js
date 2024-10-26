import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      {/* <div className="block w-12 h-12 mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" /> */}
        <img className="object-center w-4 h-5" src="../img/smpn1ngawi.png"/>
      <p className="text-2xl text-center dark:text-white">
        <Link href="/">
          {name}
        </Link>
      </p>
    </header>
  );
}
