import React from 'react'
import { Table } from 'reactstrap';

export default function UserTable(props) {
    let rows = [];
    for (let index = 0; index < props.data.length; index++) {
        rows.push(<><td>{index + 1}</td>
        <td>{props.data[index].fname}</td>
        <td>{props.data[index].lname}</td>
        <td>{props.data[index].emailid}</td>
        <td>{props.data[index].mobileno}</td>
        <td>{props.data[index].gender}</td>
        <td>{props.data[index].language.join(',')}</td>
        <td>{props.data[index].location}</td>
        <td className="actiontd" onClick={(evt) => props.editclicked(index)}>Güncelle</td>
        <td className="actiontd" onClick={(evt) => props.deleteclicked(index)}>Sil</td></>);
    }

    return (
        <div>
            <Table responsive bordered size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>İsim</th>
                        <th>Soyisim</th>
                        <th>Mail</th>
                        <th>Telefon Numarası</th>
                        <th>Cinsiyet</th>
                        <th>Dil</th>
                        
                        <th colSpan="2">İşlem</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((item, ind) => {
                        return <tr key={ind}>{item}</tr>;
                    })}
                </tbody>
            </Table>
        </div>
    )
}
