import React from 'react';

function tablebody({tableData}) {
    function dateFormat(date) {
        const dateArray = date.split("-")
        const year = dateArray[0]
        const month = dateArray[1]
        const dayArray = dateArray[2].split("T")
        const day = dayArray[0]
        const formatDate = [month,day,year].join("-")
        return formatDate;
    }
    return(<tbody>
        {tableData[0] !== undefined ?
        (tableData.map(({picture,name,phone,email,dob})=>{
            return(<tr><td><img src={picture.thumbnail}></img></td>
            <td><img src={picture.thumbnail}></img></td>
            <td>{name.first}{name.last}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{dateFormat(dob.date)}</td>

            </tr>)
        })):(<></>)

        }
    </tbody>)
}

export default tablebody;