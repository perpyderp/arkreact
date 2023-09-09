
import { JsonViewer } from "../components";
import { Armors, Creatures, Creature } from "../examples";
import { Endpoint } from "../types/types";

export const Docs: React.FC = () => {

    const creatureEndpoints: Endpoint[] = [
        {
            data: JSON.stringify(Creatures, null, 2) || '',
            endpoint: 'https://ark-api-pqh4.onrender.com/api/creatures/',
            method: 'GET'
        },
        {
            data: JSON.stringify(Creature, null, 2) || '',
            endpoint: 'https://ark-api-pqh4.onrender.com/api/creatures/Giganotosaurus',
            method: 'GET'
        }
    ]
    const armorEndpoints: Endpoint[] = [
        {
            data: JSON.stringify(Armors, null, 2) || '',
            endpoint: 'https://ark-api-pqh4.onrender.com/api/armors/',
            method: 'GET'
        }
    ]

    return (
        <main className="w-1/2 mx-auto mt-4">
            <h1 className="text-4xl">Documentation</h1>
            <p>
                All endpoints only utilize the GET request method.
            </p>

            <section id="creatures">
                <JsonViewer section="Creatures" endpoints={creatureEndpoints}/>
            </section>

            <section id="armors">
                <JsonViewer section="Armor" endpoints={armorEndpoints}/>
            </section>
        </main>
    )
}