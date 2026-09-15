import Link from 'next/link';
export default function HomePage() {
	return (
		<div className="flex flex-col items-center p-24">
			<span className="text-5xl">Hola Mundo</span>

			<Link href="/about">About page</Link>
		</div>
	);
}
