
import { Data, Endpoint } from "../types/types";

export const JsonViewer: React.FC<Data> = ({section, endpoints}: Data) => {

    return (
        <>
            <h3 className="text-2xl">{section}</h3>
            {
                endpoints.map((endpoint: Endpoint) => (
                    <>
                        <p>Method: {endpoint.method}</p>
                        <p>Endpoint: {endpoint.endpoint}</p>
                        <div className="bg-dark-2 text-dark-3 rounded-sm p-5 h-96 overflow-scroll overflow-x-auto">
                            <p className="m-0 whitespace-pre-line json">{endpoint.data}</p>
                        </div>
                    </>
                ))
            }
        </>
    )
}