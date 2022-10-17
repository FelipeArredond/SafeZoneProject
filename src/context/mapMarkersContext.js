import { createContext, useState } from "react";

export const mapMarkersContext = createContext()

export default function MapMarkerProvider({children}){

    const [showMarker, setShowMarker] = useState(false);
    
    return <mapMarkersContext.Provider value={{showMarker,setShowMarker}}>{children}</mapMarkersContext.Provider>

}