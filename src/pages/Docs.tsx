
import { JsonViewer } from "../components";
import { Armors, Creatures, Creature, EggTypes, Events, Resources, Statuses } from "../examples";
import { Endpoint } from "../types/types";

import { faShield, faPaw, faEgg, faCakeCandles, faBox, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

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
    const eggTypeEndpoints: Endpoint[] = [
        {
            data: JSON.stringify(EggTypes, null, 2) || '',
            endpoint: 'https://ark-api-pqh4.onrender.com/api/egg-types/',
            method: 'GET'
        }
    ]
    const eventEndpoints: Endpoint[] = [
        {
            data: JSON.stringify(Events, null, 2) || '',
            endpoint: 'https://ark-api-pqh4.onrender.com/api/events/',
            method: 'GET'
        }
    ]
    const resourceEndpoints: Endpoint[] = [
        {
            data: JSON.stringify(Resources, null, 2) || '',
            endpoint: 'https://ark-api-pqh4.onrender.com/api/resources/',
            method: 'GET'
        } 
    ]
    const statusEndpoints: Endpoint[] = [
        {
            data: JSON.stringify(Statuses, null, 2) || '',
            endpoint: 'https://ark-api-pqh4.onrender.com/api/statuses/',
            method: 'GET'
        }
    ]

    return (
        <main className="w-1/2 mx-auto mt-4">
            <h1 className="text-4xl text-light-green font-extrabold">Documentation</h1>
            <p>
                All endpoints only utilize the GET request method.
            </p>

            <section id="creatures">
                <JsonViewer section="Creatures" icon={faPaw} endpoints={creatureEndpoints}/>
            </section>

            <section id="armors">
                <JsonViewer section="Armor" icon={faShield} endpoints={armorEndpoints}/>
            </section>
            <section id="egg-types">
                <JsonViewer section="Egg Types" icon={faEgg} endpoints={eggTypeEndpoints} />
            </section>
            <section id="events">
                <JsonViewer section="Events" icon={faCakeCandles} endpoints={eventEndpoints} />
            </section>
            <section id="resources">
                <JsonViewer section="Resources" icon={faBox} endpoints={resourceEndpoints} />
            </section>
            <section id="statuses">
                <JsonViewer section="Status Effects" icon={faCircleExclamation} endpoints={statusEndpoints} />
            </section>
        </main>
    )
}