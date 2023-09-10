import React, { useState } from "react";
import List from "./styles";
import { CardTodo } from "../../molecules";
import { Todos } from "../../../services/types/todo";
import { Input } from "../../atoms";
import { useRecoilValue } from "recoil";
import { loadingState } from "../../../recoils/Todo/atom";
import LoadingList from "./components/LoadingList";
import EmptyList from "./components/EmptyList";

interface Props {
    data: Todos[];
    selected: number;
    totalData: number;
    onSeleceted: (index: number) => void;
    onDeleted: (index: number) => void;
    searchValue: string;
    setSearch: (e: string) => void;
    setEdit: (e: string, index: number) => void;
    onClickEdit: () => void;
}
const ListTodo = ({
    data,
    selected,
    totalData,
    onSeleceted,
    onDeleted,
    searchValue,
    setSearch,
    setEdit,
    onClickEdit
}: Props) => {
    const [indexEdit, setIndexEdit] = useState<number | null>(null);
    const loading = useRecoilValue(loadingState);

    return (
        <List.Container>
            <List.Info.Container>
                <List.Info.ContainerTotal>
                    <List.Info.Text>
                        {'Total Data'}
                    </List.Info.Text>
                    <List.Info.ContainerValue>
                        <List.Info.TextValue>
                            {totalData}
                        </List.Info.TextValue>
                    </List.Info.ContainerValue>
                </List.Info.ContainerTotal>

                <Input 
                    variant={'default'}
                    placeholder={'Search Todo List'}
                    value={searchValue}
                    setValue={(e) => setSearch(e)}
                />

                <List.Info.ContainerComplete>
                    <List.Info.Text>
                        {'Total List Done'}
                    </List.Info.Text>
                    <List.Info.ContainerValue>
                        <List.Info.TextValue>
                            {selected} of {totalData}
                        </List.Info.TextValue>
                    </List.Info.ContainerValue>
                </List.Info.ContainerComplete>
            </List.Info.Container>
            {loading ? (
                <LoadingList/>
            ): data.length === 0 ? (
                <EmptyList/>
            ) : (
                <>
                    {data.map((data, index) => (
                        <CardTodo
                            isEdit={indexEdit === index}
                            setEdit={(e) => setEdit(e, index)}
                            onActionEdit={() => setIndexEdit(index)}
                            onClickEdit={() => {
                                onClickEdit();
                                setIndexEdit(null)
                            }}
                            key={index} 
                            active={data.completed} 
                            title={data.todo}
                            onSelect={() => onSeleceted(index)}
                            onDelete={() => onDeleted(index)}
                        />
                    ))}
                </>
            ) }
            
        </List.Container>
    )
}

export default ListTodo