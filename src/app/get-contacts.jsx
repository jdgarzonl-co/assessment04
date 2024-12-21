


export default async function GetContacts() {
  const data = await fetch('https://sa-tech-assessment.replit.app/api/assessment/contacts/')
  const contacts = await data.json()
  console.log("Total contacts retrieved: " + contacts.total)
  return (
    <>
      <h1>Get Contacts Component</h1>
      <table>
        <thead>
          <tr>
            <th>firstname</th>
            <th>lastname</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.results.map((contact, i) => (
              <tr key={i}>
                <td>{contact.properties.firstname}</td>
                <td>{contact.properties.lastname}</td>
                <td>{contact.properties.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}