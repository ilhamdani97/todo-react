import React, { useState } from "react";
import TodoLists from "./styles";
import { Button, FormAddList, ListTodo } from "../../components";
import Logo from '../../assets/images/Logo.png';
import { useRecoilState, useRecoilValue } from "recoil";
import { filteredTodoListState, loadingState, todoListFilterState, todoListState, todoListStatsState } from "../../recoils/Todo/atom";
import { getList } from "../../services/todo";
import { TodoListResponse, Todos } from "../../services/types/todo";
import ModalAssesment from "./Components/ModalAssesment";

const TodoList = () => {
    interface PropsEdit {
        index: number;
        value: string;
    }
    interface PropsAssigment {
        showModal: boolean;
        assigment: number;
    }
    const [todoName, setTodoName] = useState<string>('');
    const todoListData = useRecoilValue(filteredTodoListState);
    const [_, setLoading] = useRecoilState(loadingState);

    const [todoList, setTodoList] = useRecoilState(todoListState);
    const { totalList, totalCompletedTodoList } = useRecoilValue(todoListStatsState);
    const [search, setSearch] = useRecoilState(todoListFilterState);
    const [dataEdit, setDataEdit] = useState<PropsEdit | null>(null);
    const [assigment, setAssigment] = useState<PropsAssigment>({
        showModal: false,
        assigment: 1
    })

    const handleAddList = () => {
        const newList = [...todoList, {
            todo: todoName,
            completed: false
        }]

        setTodoList(newList);
        setTodoName("");
    };

    const handleRemoveList = (index: number) => {
        setLoading(true);

        let dataList = [...todoList];
        dataList.splice(index, 1);
        setTodoList(dataList);

        setTimeout(() => {
            setLoading(false);
        }, 800);
    }

    const handleCompleteList = (index: number) => {
        var dataList = [...todoList];
        const completeList = dataList.map((data, i) => {
            if (i === index) {
              return {...data, completed: !data.completed};
            }
          
            return data;
          });
        setTodoList(completeList);
    }

    const handleEditList = () => {
        setLoading(true);

        const editDatas = dataEdit;
        if(editDatas) {
            var dataList = [...todoList];
            const completeList = dataList.map((data, i) => {
                if (i === editDatas.index) {
                return {...data, todo: editDatas.value};
                }
            
                return data;
            });
            setTodoList(completeList);
        }

        setTimeout(() => {
            setLoading(false);
        }, 800)
    }

    const handleGenerateData = async () => {
        setLoading(true);
        const size = '5';
        let data: Todos [] =  [];
        const response = await getList(size) as TodoListResponse ;

        response.todos.map((datas) => {
            data.push({
                todo: datas.todo,
                completed: datas.completed
            })
        })

        setTodoList(data);
        setLoading(false);

    }
 
    return (
        <TodoLists.Container>
            <TodoLists.Header>
                <TodoLists.ImageHeader src={Logo}/>
            </TodoLists.Header>
            <TodoLists.Content>
                <FormAddList
                    onClickGenerate={handleGenerateData}
                    disableGenerate={todoListData.length > 0}
                    disable={!todoName}
                    value={todoName}
                    setValue={(value: string) => setTodoName(value)}
                    onSubmit={handleAddList}
                />
                
                <ListTodo 
                    searchValue={search}
                    setSearch={(e: string)=> setSearch(e)}
                    totalData={totalList}
                    data={todoListData} 
                    selected={totalCompletedTodoList} 
                    setEdit={(e:string, index: number) => setDataEdit({
                        index: index,
                        value: e
                    })}
                    onClickEdit={handleEditList}
                    onSeleceted={(index: number) => handleCompleteList(index)}
                    onDeleted={(index: number) => handleRemoveList(index)}
                />
            </TodoLists.Content>
            <TodoLists.Footer>
                <Button 
                    title={'ASSESMENTS 1'} 
                    mode={'default'} 
                    onClick={() => 
                        setAssigment({
                        assigment: 1,
                        showModal: true
                    })} 
                variant={'primary'} />
                <Button 
                    title={'ASSESMENTS 2'} 
                    mode={'default'} 
                    onClick={() => 
                        setAssigment({
                            assigment: 2,
                            showModal: true
                        })
                    } 
                variant={'primary'} />
                <Button 
                    title={'ASSESMENTS 3'} 
                    mode={'default'} 
                    onClick={() => 
                        setAssigment({
                            assigment: 3,
                            showModal: true
                        })
                    } 
                variant={'primary'} />
            </TodoLists.Footer>

            <ModalAssesment 
                showModal={assigment.showModal} 
                assigment={assigment.assigment}
                onClose={() => setAssigment({...assigment, showModal: false})}
            />
        </TodoLists.Container>
    )
}

export default TodoList;