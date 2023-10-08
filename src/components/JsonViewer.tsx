
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Data, Endpoint } from "../types/types";

export const JsonViewer: React.FC<Data> = ({section, icon, endpoints}: Data) => {

    return (
        <>
            <h3 id={section + ""} className="text-3xl mt-5 text-light-green font-extrabold">{section}<FontAwesomeIcon className="ml-3" icon={icon}/></h3>
            {
                endpoints.map((endpoint: Endpoint, index: number) => (
                    <div key={index}>
                        <h4 className="text-lg mt-3 font-semibold tracking-widest">Method: <span className="text-light-green-2 font-semibold">{endpoint.method}</span></h4>
                        <h4 className="text-lg"><span className="font-semibold tracking-widest">Endpoint: </span>{endpoint.endpoint}</h4>
                        <div className="bg-dark-2 text-dark-3 rounded-xl py-5 px-7 h-96 overflow-scroll overflow-x-auto">
                            <pre>
                                <samp>
                                    {endpoint.data}
                                </samp>
                            </pre>
                        </div>
                    </div>
                ))
            }
        </>
    )
}