import React,{ useState } from "react";
import { ListProps } from "../types";

function useNameList(){
    const [namesList, setNamesList] = useState<ListProps[]>([]);
    const [name, setName] = useState<string>("")

    const addNameToList = (value:string) => {
        setNamesList([
            ...namesList,
            { id: namesList.length + 1, name: value }
        ])

        setName("");
    }

    const handleList = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    return {name,namesList,handleList,addNameToList}

}

export default useNameList;