import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchOpdb } from "../../modules/opdbManager";
import "./Searchbar.css"

export const Searchbar = () => {
    const [machines, setMachines] = useState([])

    const navigate = useNavigate()

    const handlekey = (event) => {
        if (event.target.value !== "" && event.key !== "Unidentified") {
            searchOpdb(event.target.value).then(apiData => setMachines(apiData))
        }
        // the if an item is selected from the datalist options, the event.key will be 'Unidentified'
        if (event.key === 'Unidentified') {
            var val = document.getElementById("searchInput").value;
            var opts = document.getElementById('pinballMachines').childNodes;
            for (var i = 0; i < opts.length; i++) {
                if (opts[i].value === val) {
                    // An item was selected from the list!
                    event.target.value = ""
                    event.target.blur()
                    setMachines([])
                    navigate(`/scores/game/${opts[i].id}`)
                }
            }
        }
    }

    return (
        <>
            <div className="searchHolder">
                <input className="searchBar" id="searchInput" type="text" list="pinballMachines" onKeyUp={handlekey} placeholder="search..." />
                <datalist id="pinballMachines">
                    {machines.map(machine =>
                        <option key={machine.id} id={machine.id}>{machine.text}</option>
                    )}
                </datalist>
            </div>
        </>
    )
}