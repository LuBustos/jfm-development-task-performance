import { useMemo, useState } from 'react';
import '../../App.css';
import useNameList from '../../hooks/useNameList';
import { ListProps, NameListProps } from '../../types';
import { useNavigate } from 'react-router-dom';

const ListOfNames = ({ namesList }: NameListProps) => {
    return (<ul>
        {namesList.map((list: ListProps, index: number) => {
            return (
                <li key={index}>
                    <p key={list.id}>{list.name}</p>
                </li>
            )
        })}
    </ul>
    )
}
const Home = () => {
    const { addNameToList, handleList, name, namesList } = useNameList();
    const showListOfNames = useMemo(() => <ListOfNames namesList={namesList} />, [namesList])
    const navigate = useNavigate();

    const [showMessage, setShowMessage] = useState(false);
    const [Component, setComponent] = useState<() => JSX.Element>();

    const handleShowWelcomeMessage = async () => {
        setShowMessage(true);
        const message = await import('../../components/welcome/index');
        setComponent(() => message.default);
    }


    return (
        <div className="App-header">
            <div>
                {!showMessage ? <button onClick={handleShowWelcomeMessage}>Show welcome message</button> : null}
                {showMessage && Component ? <Component /> : null}
            </div>
            <div>
                <input onChange={handleList} value={name} style={{margin: 10}}/>
                <button onClick={() => addNameToList(name)}>Add </button>
                {showListOfNames}
            </div>
            <div>
                <button onClick={() => navigate("/count")}>Go to count page</button>
            </div>
        </div>
    )
}

export default Home;