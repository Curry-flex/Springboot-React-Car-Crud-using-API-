import { useNavigate } from "react-router-dom";
import { Component } from "react/cjs/react.development";


export const withRouter=(component)=>{
    const Wrapper =(props)=>{
        const navigate = useNavigate();

        return(
            <Component
            navigate={navigate}
            {...props}
            />
            );
    };

    return Wrapper;
}