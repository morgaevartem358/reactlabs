import React from 'react';
import { connect } from 'react-redux';
import { removeCharacter } from './actions';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.characterData.map((row) => {
        return (
            <tr key={row.id}>
                <td>{row.firstname}</td>
                <td>{row.lastname}</td>
                <td>{row.email}</td>
                <td><button onClick={() => props.removeCharacter(row.id)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const TableList = (props) => {
    const { characterData, removeCharacter } = props;
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
}

const mapStateToProps = (state) => {
    return{
        characterData: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        removeCharacter: (id) => dispatch(removeCharacter(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (TableList);