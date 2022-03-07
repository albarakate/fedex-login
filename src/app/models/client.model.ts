export interface ClientModel {
  _id?: string; // Not manadatory - retrieved after the API call
  firstName: string; // First name
  lastName: string; // Last name
  email: string; // Email
  passEncrypted?: string; // Encrypted password (not in the scope but we never POST a clear password)
}
