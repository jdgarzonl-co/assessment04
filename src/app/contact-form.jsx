"use client";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { createContact } from "./server-side";

const initialState = {
  message: "Contact creation responses will appear here.",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Add
    </button>
  );
}

export function AddContact() {
  const [state, formAction] = useActionState(createContact, initialState);

  return (
    <>
      <h1>Add Contact Component</h1>
      <form action={formAction}>

        <div>
          <label >First name:
            <input type="text" name="firstname" required></input>
          </label>
        </div>
        <div>
          <label htmlFor="lastname">Last name:
            <input type="text" name="lastname" required></input>
          </label>
        </div>
        <div>
          <label htmlFor="email">Email address:
            <input type="email" name="email" required></input>
          </label>
        </div>

        <SubmitButton />
      </form >
      <code>

          {
            state.message
          }


      </code>
    </>
  );
}