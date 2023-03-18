import { memo, useState } from "react";
import { CountPageProps } from "../../types";
import '../../App.css';
import { useNavigate } from "react-router-dom";



const CountPage = memo(function CountPage({ count, onClick }: CountPageProps) {
    return (
        <div>
            <h1>Count numbers</h1>
            <button onClick={onClick}>Count</button>
            <p>Count: {count}</p>
        </div>
    )
})

const CountPageMemoized = () => {
    const [count, setCount] = useState<number>(0);
    const navigate = useNavigate();

    const increase = () => setCount(count + 1);

    return (
        <div className="App-header">
            <CountPage count={count} onClick={increase} />
            <button onClick={() => navigate('/')}>Back</button>
        </div>
    )
}

export default CountPageMemoized;
