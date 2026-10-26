import Image from "next/image";

export default function () {
    return (
       <section id="hero">
            <div className="grid grid-cols-2 py-10">
                {/* Colonne gauche */}
                  <div className="text-left pl-20">

                    <h1 className="text-5xl">Your Mind Deserves a Safe Space to Breathe</h1>

                  </div>

                {/* Colonne droite */}
                  <div className="px-10">
                    <Image
                        src="/hero.png"
                        alt="#"
                        width={600}
                        height={500}
                        className="h-155 w-full rounded-2xl"
                    />
                  </div>
            </div>
       </section>
    );
}