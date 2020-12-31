import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../../redux/actions/users'
import Card from '../CardComponent/index'

const Users = () => {
    //Definição de uma dispatch
    const dispatch = useDispatch();
    //Get users from state, aqui ele pega apenas as states do user
    const users = useSelector(state => state.users.users);
    const loading = useSelector(state => state.users.loading);
    const error = useSelector(state => state.users.error);

    useEffect(() => {
        //Lembrar que tem que importar a action
        //Esse useEffect é para usar a função getUsers (passa um usuário simulando o retorno de uma API)
        dispatch(getUsers())
    }, [])

    return (
        <>
            {users.loading && <h1>Loading...</h1>}
            {users.length > 0 && users.map((user) => {
                return <Card user={user} key={user.id} />
            })}
            {users.length === 0 && !loading && <p>No users available!</p>}
            {error && !loading && <p>{error}</p>}
        </>
    )
}

export default Users;