## 2. Deployment Phase
In this phase, the code is built and deployed. The system converts React files into browser-compatible files (HTML, CSS, JavaScript) and deploys them on Amazon EC2 instances. Deployment tasks are pulled from the Amazon SQS queue to automate the process.

### Steps:
1. **Build Production Server**: Convert React files into browser-compatible files.
2. **Pull Deployments from SQS**: Retrieve deployment tasks from the Amazon SQS queue.
3. **Deploy on EC2 Instances**: Automatically deploy the production build on Amazon EC2 instances. Utilize EC2 with Auto Scaling and AWS Fargate for efficient deployment and scaling.
   
 <img width="925" alt="Screenshot 2024-07-28 at 5 28 32 PM" src="https://github.com/user-attachments/assets/7f97a7af-1d56-4324-b475-ebdcfbb3f9eb">
