export interface NameListProps {
    namesList: ListProps[]
}

export interface ListProps {
    id: number,
    name: string | undefined,
}

export interface HookListProps {
    interfaceType: ListProps
}

export interface CountPageProps {
    count: number;
    onClick: () => void;
}