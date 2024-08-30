# Authentication and Authorization 🚀🔥

![Image](Authentication%20and%20Authorization.jpg)

## Topics

- What is Authentication ?
- Common Types of Authentication.
- What is Authorization ?
- Which Comes First, Authenication or Authorization ?
- Real-world example.

### What is Authentication ?

**Authentication** is the process of verifying the identity of a user or system before allowing access to a resource, application, or service. In the context of backend development, authentication ensures that only authorized users can access certain parts of an application, such as APIs or databases.

### Common Types of Authentication in Backend

1. **Password-Based Authentication**:

   - **Description**: Users provide a username and password combination to verify their identity.
   - **How it works**: The password is typically hashed and stored in a database. When a user logs in, the provided password is hashed and compared to the stored hash.
   - **Common Issues**: Vulnerable to brute-force attacks, phishing, and password reuse.

2. **Token-Based Authentication**:

   - **Description**: Users log in with credentials and receive a token, which they include in subsequent requests.
   - **How it works**: After successful login, the server generates a token (often a JSON Web Token, JWT) and sends it to the user. The token is stored client-side (usually in local storage or cookies) and is included in the Authorization header for future requests.
   - **Common Use Cases**: Commonly used in stateless APIs (RESTful services).
   - **Advantages**: Reduces server load by avoiding session management.

3. **Multi-Factor Authentication (MFA)**:

   - **Description**: Requires two or more verification factors to authenticate a user.
   - **How it works**: Combines something the user knows (e.g., password), something the user has (e.g., a smartphone app for a one-time code), and something the user is (e.g., biometric verification).
   - **Common Use Cases**: Used in highly secure systems such as online banking.

4. **OAuth (Open Authorization)**:

   - **Description**: A framework that allows third-party services to exchange information without exposing user credentials.
   - **How it works**: Instead of the user providing their credentials directly to the service, they authenticate via an identity provider (e.g., Google, Facebook), which then provides a token to the third-party service.
   - **Common Use Cases**: Used by applications that require access to user data from another service, like logging in with Google or Facebook.

5. **API Key Authentication**:

   - **Description**: Simple method where a unique key (API key) is included in requests to identify the client.
   - **How it works**: The server generates a unique key for each client, and the client includes this key in the request header. The server checks the key before processing the request.
   - **Common Use Cases**: Often used in public APIs where the key provides basic identification.

6. **SAML (Security Assertion Markup Language)**:

   - **Description**: An XML-based standard for exchanging authentication and authorization data between parties.
   - **How it works**: SAML allows a user to log in once and gain access to multiple services without re-entering credentials (Single Sign-On, SSO).
   - **Common Use Cases**: Enterprise applications that integrate with multiple services, such as internal employee portals.

7. **Biometric Authentication**:
   - **Description**: Uses physical characteristics like fingerprints, facial recognition, or retinal scans to authenticate users.
   - **How it works**: The biometric data is captured, processed, and compared with stored templates to verify identity.
   - **Common Use Cases**: High-security environments like mobile banking apps.

These authentication methods can be combined to enhance security, such as using both password-based authentication and MFA together.

**Authorization** is the process of determining whether a user or system has the right to access a specific resource or perform a particular action within an application. While **authentication** verifies the identity of a user, **authorization** defines what that authenticated user is allowed to do.

### Key Concepts in Authorization:

1. **Roles and Permissions**:

   - **Roles**: These are predefined sets of permissions that can be assigned to users. For example, a user might have the role of "Admin," "Editor," or "Viewer," each with different levels of access.
   - **Permissions**: These are specific actions or resources that a role or user is allowed to access. For example, permissions might include "read-only," "write," "delete," or "administer."

2. **Access Control Lists (ACLs)**:

   - An ACL is a table or list that specifies which users or system processes are granted access to objects (like files, directories, or resources) and what operations they are allowed to perform on those objects.
   - Example: An ACL might specify that User A can read and write a file, while User B can only read it.

3. **Role-Based Access Control (RBAC)**:

   - RBAC restricts access based on the roles assigned to users. Users are granted permissions to perform certain operations based on their roles.
   - Example: In a content management system, an "Admin" role might have permissions to create, edit, delete, and view content, while a "Viewer" role might only have permission to view content.

4. **Attribute-Based Access Control (ABAC)**:

   - ABAC considers various attributes (e.g., user attributes, resource attributes, environment conditions) in determining access rights.
   - Example: Access might be granted based on the user’s department, time of day, or location.

5. **Policy-Based Access Control**:

   - This approach uses policies (rules) to define what actions can be performed on resources and by whom. Policies are often written in a language like XACML (eXtensible Access Control Markup Language).
   - Example: A policy might state that only users from the "HR" department can access employee records.

6. **Discretionary Access Control (DAC)**:
   - In DAC, the owner of the resource (e.g., a file or database entry) has control over who can access it.
   - Example: A user who creates a document can decide who else can read or edit it.

### Authorization Flow:

1. **User Authentication**: The user first logs in and is authenticated.
2. **Authorization Check**: After authentication, the system checks the user's permissions or roles to determine what actions they can perform.
3. **Access Granted or Denied**: Based on the authorization check, the system either grants or denies access to the requested resource or action.

### Example:

- **Scenario**: An employee logs into a company's internal system.
  - **Authentication**: The system verifies the employee’s identity using their username and password.
  - **Authorization**: Once authenticated, the system checks if the employee has the necessary permissions to access the HR portal or modify a project file. If the employee is an "Admin," they might have full access; if they are a "Regular User," they might only have view-only access.

In summary, while authentication confirms who a user is, authorization controls what they are allowed to do within the system.

### Which Comes First, Authentication or Authorization ?

_Authentication and Authorization both relay on identity. As you cannot authorize a user or service before identifying them, authentication always comes before authorization._
