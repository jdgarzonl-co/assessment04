"use server";


export async function createContact(currentState, formData) {
  // console.log("Inside create contact, currentState:", currentState);
  // console.log("Inside create contact, formData: ", formData);

  const properties = {
    firstname: formData.get('firstname'),
    lastname: formData.get('lastname'),
    email: formData.get('email')
  }
  console.log(properties);

  // Using Fetch API
  const res = await fetch('https://sa-tech-assessment.replit.app/api/assessment/contacts', {
    method: 'POST',
    body: JSON.stringify({ properties }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

  const json = await res.json();
  console.log(json);


  return { message: JSON.stringify(json, null, 2) }



}