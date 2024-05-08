import PageHeaders from "@/components/PageHeaders";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div>
      <PageHeaders
        h1Text={'Check out our pricing'}
        h2Text={'Our pricing is very simple'} />

      <div className="bg-white/20 text-white rounded-lg max-w-md mx-auto p-8 text-center shadow-lg">
        <h3 className="font-bold text-4xl text-white mb-2">Free</h3>
        <p className="text-lg mb-4">Enjoy basic features for free!</p>
        <button className="bg-black/20 transform active:scale-x-75 shadow-lg text-white px-6 py-2 rounded-full hover:shadow-lg  hover:-translate-y-1 transition duration-200">
        <Link href="/">Get Started</Link>
        </button>
      </div>
    </div>
  );
}
