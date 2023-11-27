# Project Title: InfoMerge

## Overview

What is your app? Brief description in a couple of sentences.

InfoMerge is a dynamic media aggregation platform offering a streamlined and curated news experience. By consolidating various forms of media such as articles, videos, and social media content, InfoMerge provides a central hub for insightful and impactful stories.

### Problem

Why is your app needed? Background information around any pain points or other reasons.

In an era of information overload, finding a central source for diverse, media-agnostic news is challenging. InfoMerge addresses the need for a unified platform that aggregates various content types into a cohesive narrative, making it easier to stay informed.

### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

Initially, InfoMerge will serve colleagues and friends seeking a straightforward, no-frills news digest. In V2, the platform will expand to allow users to curate and manage their own aggregation feeds, thus democratizing news curation.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

- An admin-only form (similar to instock) for manipulating the database and the articles displayed on the public facing page.
- A server backend for form submission processing and content delivery.
- A public-facing news website displaying content curated by the admin.

## Implementation

The following are some mockup design sketches that also outline the steps in which we will be building out the website.

![News Website Page Outline](/assets/readme-images/news%20website%20page%20.jpg)

![form outline](/assets/readme-images/form%20page%20.jpg)

![database table list in admin view](/assets/readme-images/./database%20table%20page%20.jpg)

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

- Next.js for front-end & back-end.
- Typescript
- React and Tailwind for Front-End.
- Node.js/Express for the backend.
- Vercel for deployment and hosting.

### APIs

List any external sources of data that will be used in your app.

- YouTube SDK for embedding videos.
- Twitter SDK for automating tweets when new news segements are created.
- Potential integration with ChatGPT for content bias analysis.

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

**Admin page:**

- Submission Form: For posting or editing news content to update the database.
- View Feedback Page: To see user responses and suggestions.

**Public Website page:**

- News Feed: The main page displaying aggregated content.
- Feedback Form: For public users to submit their feedback.

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

The design will mirror the simplicity of Drudge Report, with modern touches for a millennial audience.

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.

The backend will manage data related to news posts, including metadata like titles, sources, categories, and media type.

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

Endpoints will include:

- POST /api/news for creating news items.
- GET /api/news for listing news items.
- PUT /api/news/:id for updating news items.
- DELETE /api/news/:id for removing news items.

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

Yes, a basic Auth for accessing the admin webpage to the form that manpulates the database for displaying content on the public webpage

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

V1:

- Develop the admin website with basic content management capabilities.
- Implement editing functionalities for news posts.
- Create an archive system for the admin side.
- Set up basic API endpoints for content management.
- Launch a minimal viable public-facing website to display content.
