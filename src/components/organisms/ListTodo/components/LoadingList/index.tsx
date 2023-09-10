import React from "react";
import Loading from "../../../../molecules/CardTodo/Loading";

const LoadingList = () => {
    return (
        <>
          {Array.from({length: 5}, (_, i) => (
            <Loading key={i}/>
          ))}
        </>
    )
}

export default LoadingList;