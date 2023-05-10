
import { useState } from "react";

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <h2>Almaty, Kazakhstan</h2>
            <Panel
                title="About"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
            >
                With a population of anout 2 million, Almaty is
                Kazakhstan's largest city. From 1929 to 1997,
                is was its capital city.
            </Panel>

            <Panel
                title="Etymology"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
            >
                The name comes from <span lang="kk-KZ">arma</span>,
                the Kazakh word for "apple" and id often translated
                as "full of apples". In fact, the region surrounding
                Almaty is thought to be the ancestral home of the
                apple, and the wild <i lang="la">Malus siecersii</i>
                is considered a likely candidate for the ancestor
                of teh modern domestic apple.
            </Panel>        
        </>
    );
}

function Panel ({
    title,
    children,
    isActive,
    onShow
}) {
    return (
        <section className="panel">
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={onShow}>
                    Show
                </button>    
            )}
        </section>
    );
}