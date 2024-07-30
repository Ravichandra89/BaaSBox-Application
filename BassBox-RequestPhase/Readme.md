## 3. Request Phase
In this phase, the system handles user requests based on their geographical location and serves the appropriate HTML, CSS, and JavaScript build files from AWS S3.
### Steps:
1. **Receive User Request**: Get the request from the user, including their geographical location and user ID.
2. **Determine Geographical Area**: Identify the user's geographical area.
3. **Serve Build Files**: Serve the corresponding HTML, CSS, and JavaScript files from AWS S3 based on the user ID and geographical area.

<img width="1179" alt="Screenshot 2024-07-28 at 5 36 28 PM" src="https://github.com/user-attachments/assets/fc4cd887-e88c-4f92-935a-47e9d396f0cf">