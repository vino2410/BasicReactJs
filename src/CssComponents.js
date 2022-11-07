import './Cascade.css'

export let Table=()=>
{
    const Customize={
        borderRadius:'55px',
    }
    return(
        <>
        <table align='center' style={Customize}>
           <tbody>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Number</th>
            </tr>
           </tbody>
        </table>
        </>
    )
}