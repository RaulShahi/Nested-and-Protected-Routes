import Form from "../components/Form/Form";
import { useSelector } from "react-redux";
import { Fragment } from "react";

const FormPage = ()=>{
    const {isAuthenticated} = useSelector(state => state.auth)
    return(
        <Fragment>
            {!isAuthenticated && <Form />}
            {isAuthenticated && <p>You can now acess full details about users and posts.</p> }

        </Fragment>
    )
};

export default FormPage; 