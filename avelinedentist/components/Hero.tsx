import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen text-white">

        {/* Couche 1 : l'image de fond */}
        <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        sizes=""
        />

        {/* Couche 2 : le voile sombre en dégradé */}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent" />


       {/* Couche 3 : le contenu */}
        <div className="relative z-10 px-10 py-30">
            <p className="text-sm"><span>→</span> When the result matters.</p>
            <h1 className="text-[72px] max-w-3xl font-medium">Trusted legal help when it matters most.</h1>

            <ul className="text-lg flex flex-col gap-3 mt-10">
                <li>• Senior lawyers on every case</li>
                <li>• Proven results in court</li>
                <li>• Clear fees, no surprises</li>
            </ul>


            <div className="mt-10 flex flex-wrap gap-3">
                <a
                    href="#contact"
                    className="rounded-full bg-neutral-200 px-6 py-4 text-black transition-colors hover:bg-white"
                >
                    Book a consultation
                </a>
                <a
                    href="#services"
                    className="rounded-full bg-white/10 px-6 py-4 backdrop-blur transition-colors hover:bg-white/20"
                >
                    See our services
                </a>
            </div>
        </div>

    </section>
  );
}