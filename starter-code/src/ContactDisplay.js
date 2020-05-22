import React from 'react';

const ContactDisplay = ( {contacts , deleteContact} ) => {
    // console.log('contacts', contacts)
    const contactRows = contacts.length ? (
            contacts.map( contact => {
                return (
                    <tr key={contact.id}>
                       <td>
                            <img src={contact.pictureUrl} alt='contactPic'/>
                            
                        </td>
                       <td>{contact.name}</td>
                       <td>{contact.popularity}</td>
                       <td>
                        <button onClick={ () => {deleteContact(contact.id)}}>Delete</button>
                       </td>
                    </tr>
                )
            })
        ) :
        (
            <tr>No contact in the list</tr>
        )

    return (
            <table >
                <thead>
                    <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {contactRows}
                </tbody>
            </table>
 
    )


}

export default ContactDisplay