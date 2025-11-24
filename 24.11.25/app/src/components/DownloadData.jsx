import { useState, useEffect } from "react";
function DownloadData() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(response => setData(response))
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