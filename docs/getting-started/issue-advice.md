---
sidebar_position: 1
---
# How to create good issues


Creating well-defined issues is essential for obtaining accurate and helpful suggestions from Code Autopilot. This section provides guidelines on crafting effective issues that communicate your tasks clearly to the AI.

Creating issues for autopilot is similar to creating issues for humans.
Providing detailed information on your issues will result in better suggestions from the bot.

You should spend a few minutes making sure that your task is descriptive and issue to understand for someone that is not familiar with your code.

:::note

At this moment, autopilot is not able to read images or follow links that you add to the description

:::

## Guidelines

- **Be Descriptive**: Provide as much detail as possible to describe the task at hand.
- **Use Clear Language**: Avoid jargon and ensure your description is easy to understand, even for individuals not familiar with your code.
- **Provide Context**: If the task relates to existing code or features, provide relevant context to help Autopilot understand the bigger picture.
- **Invoke autopilot**: Make sure you mention `@autopilot` so that Autopilot knows it should work on that issue. 


## Example 1 - OAuth task

### Issue Title
Implement OAuth 2.0 Authentication

### Description

**What**: 
Implement OAuth 2.0 authentication to allow users to log in using their Google accounts.

**Why**:
This will provide a more user-friendly login experience and potentially increase sign-up rates.

**How**:
1. Set up a project on the Google Developer Console and configure the OAuth 2.0 credentials.
2. Utilize a library such as Passport.js to integrate OAuth 2.0 authentication in our Node.js application.
3. Ensure that the authentication flow works seamlessly and securely, adhering to best practices.

**Invoke Autopilot**:
@autopilot


## Example 2 - Billing task

### Issue Title
Implement a Robust Billing System

### Description

**What**:
Develop and integrate a billing system to handle user subscriptions and payments.

**Why**:
This will automate the payment processing, making it easier for users to subscribe and for us to manage subscriptions.

**How**:
1. Evaluate and select a suitable billing platform or library such as Stripe.
2. Design the billing system to handle different subscription tiers, one-time payments, and recurring charges.
3. Ensure the system complies with security standards and regulations, such as PCI DSS.

**Invoke Autopilot**:
@autopilot
