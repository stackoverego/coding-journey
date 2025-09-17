# Backend API Documentation

## `/user/register` Endpoint

### Description

Registers a new user by creating a user with the provided information.

### HTTP Method
 
`POST`


### Request Body

The request body  should be  in JSON format and include the following fields:

- `fullname`(object):
    - `firstname`(string, required): User's first name (minimum 3 characters).
    - `lastname` (string, optional): User's last name (minimum 3 charachers).
  - `email`(string, required): User's email address (must be vaild email).
  - `password`(string, required): User's password (minimum 6 characters).


### Example Response 

- `object`(object):
    - `fullname`(object).
      - `firstname`(string): User's first name (minimum 3 characters).
      - `lastname` (string): User's last name (minimum 3 charachers).
  - `email`(string): User's email address (must be vaild email).
  - `password`(string): User's password (minimum 6 characters).

- `token` (string): JWT Token
