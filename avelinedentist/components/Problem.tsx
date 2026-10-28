export default function Problem() {
    return (
        <section id="problem">
            {/* Div qui contient les 2 colonnes */}
            <div className="grid grid-cols-3">

                {/* Colonne de gauche */}
                <div className="p-20">
                    <h2 className="text-xl">THE PROBLEM</h2>
                    <p className="text-[48px] font-medium">Your pain points</p>
                </div>

                {/* Colonne de droite */}
                <div className="grid grid-cols-2 col-span-2 p-20 space-y-10 space-x-10">
                    {/* Element 1 */}
                    <div className="flex gap-7">
                        <img className="w-20 h-20" src="/2.webp" alt="" />
                        <div>
                            <h3 className="text-[20px]">Denial rate is too high</h3>
                            <p className="font-light">Denied claims either require costly and time-intensive manual work, or drive write-offs impacting your bottom line.</p>
                        </div>
                    </div>

                    {/* Element 2 */}
                    <div className="flex gap-7">
                        <img className="w-20 h-20" src="/3.webp" alt="" />
                        <div>
                            <h3 className="text-[20px]">AR write-offs keep growing</h3>
                            <p>Your backlog grows every month, and without capacity to work it, it becomes written off revenue.</p>
                        </div>
                    </div>


                    {/* Element 3 */}
                    <div className="flex gap-7">
                        <img className="w-20 h-20" src="/4.webp" alt="" />
                        <div>
                            <h3 className="text-[20px]">Days in AR keeps climbing</h3>
                            <p>Understaffing or undertraining is leading to growing AR days, dragging cash collections.</p>
                        </div>
                    </div>
                
                    {/* Element 4 */}
                    <div className="flex gap-7">
                        <img className="w-20 h-20" src="/5.webp" alt="" />
                        <div>
                            <h3 className="text-[20px]">Cost to collect is compressing margin</h3>
                            <p>Growing labor and vendor costs are ballooning your RCM costs, which in turn squeeze your operating margins.</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}