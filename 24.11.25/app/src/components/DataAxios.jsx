import { useState, useEffect } from "react";
import axios from "axios";
function DownloadData() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => setData(response.data))
    }, [])
    return (
        <>
            <div>
                <ul>
                    {
                        data.map((el, index) => (
                            <li key={index}>
                                ID: {el.id}, Tytuł: {el.title} {el.completed === true ? "Zrobione" : "Nie zrobione"}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
export default DownloadData