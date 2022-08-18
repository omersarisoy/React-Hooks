import React, { useState } from 'react'

const ReducerHookwithState = () => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchDog = () => {
        setLoading(true);
        setError("");
        setData("");

        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((res) => {
                setLoading(false);
                setData(res.message);
            })
            .catch(() => {
                setLoading(false);
                setError("Error fetching data");
            });
    };

  return (
    <div>
        <button onClick={fetchDog} disabled={loading}>
            Fetch Dog
        </button>
        {data && (
            <div>
                <img src={data} alt="random dog"/>
            </div>
        )}
        {error && <p>{error}</p>}
    </div>
  )
}

export default ReducerHookwithState