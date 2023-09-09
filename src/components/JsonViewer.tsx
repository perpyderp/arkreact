
import { Data, Endpoint } from "../types/types";

export const JsonViewer: React.FC<Data> = ({section, endpoints}: Data) => {

    return (
        <>
            <h3 id={section + ""} className="text-3xl mt-5">{section}</h3>
            {
                endpoints.map((endpoint: Endpoint, index: number) => (
                    <div key={index}>
                        <h4 className="text-lg mt-3">Method: {endpoint.method}</h4>
                        <h4 className="text-lg">Endpoint: {endpoint.endpoint}</h4>
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