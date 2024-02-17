import { redirect } from "react-router-dom";
import {
  createContact,
  getContact,
  getContacts,
  updateContact,
} from "../contact";

export async function getContactsData() {
  const contacts = await getContacts();
  return { contacts };
}

export async function createContactsData() {
  const contact = await createContact();
  return { contact };
}

export async function getContactsId({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}

export async function EditContact({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}
