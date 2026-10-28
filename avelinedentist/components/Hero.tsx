import Image from "next/image";

export default function () {
    return (
       <section id="hero">
            {/* Div qui contient les 2 colonnes */}
            <div className="grid grid-cols-2 py-10 bg-gray-50">
                {/* Colonne gauche */}
                <div className="flex flex-col items-center justify-center">
                    <div className="text-left space-y-6">
                        <p>For the CFO</p>
                        <h1 className="text-[48px] max-w-lg font-medium leading-tight">Recover more,spend less to collect,
                        and expand your margin.</h1>

                        <p className="max-w-lg font-light">Amperos augments in-house teams and replaces legacy vendors with
                        AI-native insurance collections — delivering better recovery at a fraction of the cost.
                        </p>

                        <div className="flex gap-6">
                            <button>See how it works</button>
                            <button>Contact me</button>
                        </div>
                        
                        
                    </div>
                </div>
                  

                {/* Colonne droite */}
                  <div className="px-10">
                    <Image
                        src="/1.png"
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