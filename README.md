# DSC Portal

## General Components

- Card
- ProjectCard
- SeectionHeading

## How to Start the Project

To start the project, follow these steps:

1. **Start the Root Project:**

   Navigate to the root folder and run:

   ```bash
   npm start
   ```

2. **Start the Frontend:**

   Navigate to the frontend folder and run:

   ```bash
   cd src/frontend
   bun run dev
   ```

3. **Start the Backend:**

   Navigate to the backend folder and run:

   ```bash
   cd src/backend
   node server.js
   ```

This will start both the frontend and backend servers, allowing you to work on the project.

## Stages of Development

This project is being developed in a phased manner to ensure incremental improvements and feature additions. Below are the details of each stage:

### Stage 1: Basic Structure and Admin Page

**Objectives:**

- Establish the foundational structure of the website.
- Create an admin page with essential management functionalities.

#### **Features:**

**Homepage:**

- Display the club name, logo, and tagline.
- Basic navigation bar with links to Home, About Us, Events, and Contact Us.
- Static sections for:
  - About Us: Information about the club.
  - Contact Us: Email, phone number, or other contact details.

**Admin Page:**

- Login system for secure access.
- Permissions for Admin:
  - Add/remove members.
  - Create and manage events with the ability to set a registration start date.
  - Edit homepage content dynamically.

**Database Setup:**

- Set up a database to store members, events, and admin credentials.
- Example collections/tables:
  - `members`: Stores details of all members.
  - `events`: Stores details of events (title, description, date, and registration start date).

#### **Outcome:**

- A functioning static website with admin control for managing core elements.

### Stage 1.5: SEO Optimization

#### **Objectives:**

- Optimize the website for search engines without using server-side rendering (e.g., Next.js).

#### **Features:**

**Dynamic Metadata:**

- Use `react-helmet` to manage `<title>` and `<meta>` tags for each page dynamically.
- Add Open Graph (OG) tags and Twitter cards for social media sharing.

#### **Sitemap and Robots.txt:**

- Generate and serve a `sitemap.xml` file to help search engines index the website.
- Create a `robots.txt` file to manage crawler permissions.

#### **Image Optimization:**

- Use meaningful alt text for all images.
- Compress images and lazy load them where applicable.

#### **Performance Monitoring:**

- Use tools like Google Lighthouse to identify and fix SEO issues.

#### **Outcome:**

- The website becomes more discoverable on search engines and shares optimally on social media.

### Stage 2: Event Registration System

#### **Objectives:**

- Enable users to register for club events.
- Allow admins to manage events and view participant data.

#### **Features:**

#### **Event Listing:**

- Display upcoming and past events dynamically.
- Include details such as date, time, venue, and description.

#### **Event Registration:**

- Implement a registration form with fields like:
  - Name, email, phone number, and custom event-specific fields.
- Send confirmation emails upon successful registration.

#### **Admin Enhancements:**

- View, approve, or reject participant registrations.
- Export participant lists (e.g., as CSV).

#### **Database Integration:**

- Store participant details securely in the database.
- Relate registrations to their respective events.

#### **Outcome:**

- A fully functional event registration system with admin control.

### Stage 3: Member Pages and Permissions

#### **Objectives:**

- Provide personalized profile pages for members.
- Implement role-based access for managing content.

#### **Features:**

#### **Member Profiles:**

- Each member has a dedicated profile page with:
  - Name, photo, bio, role in the club, and achievements.
- Admin can add/edit/remove members.
- Members can update their own profiles (pending admin approval).

#### **Content Management System:**

- Allow authenticated users to add/remove content like blog posts, photos, or event highlights.
- Version control for changes to avoid accidental overwrites.

#### **Role-Based Access:**

- **Admin:** Full access to all functionalities.
- **Members:** Limited permissions for updating profiles and suggesting content.
- **Guests:** Read-only access to public content.

#### **Authentication System:**

- Enhance security with role-based authentication and authorization.

#### **Outcome:**

- A dynamic, interactive platform for members, admins, and users.

## Development Stack

#### **Frontend:**

- React.js for building a dynamic user interface.
- React Helmet for managing metadata.

#### **Backend:**

- Node.js and Express.js for handling server-side logic.
- MongoDB for storing data.

#### **Tools:**

- Figma for designing mockups.
- Git for version control.
- Lighthouse for performance and SEO audits.

#### **Hosting:**

- Azure virtual machines for deployment.

---

# Extra

## Steps to Add SEO in React

React is a client-side library, so its default behavior isn't SEO-friendly since the content is rendered dynamically. However, you can optimize SEO with the following steps:

1. Use the React Helmet Library

React Helmet allows you to dynamically manage the document head (e.g., <title>, <meta> tags) for better SEO.
Steps:

Install React Helmet:

```bash
npm install react-helmet
```

Use React Helmet in Components:

Import and add metadata specific to each page/component.

```jsx
import { Helmet } from 'react-helmet';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Your Club Name - Homepage</title>
        <meta
          name='description'
          content='Welcome to Your Club Name! Explore events, members, and more.'
        />
        <meta name='keywords' content='Club, Events, College, Membership' />
        <link rel='canonical' href='https://yourclubname.com/' />
      </Helmet>
      <h1>Welcome to Your Club</h1>
    </>
  );
}

export default HomePage;
```

    Dynamic Titles and Descriptions: Update titles and descriptions dynamically based on props or state to make them unique for each page.

2. Add Open Graph and Twitter Meta Tags

These tags make your pages shareable on platforms like Facebook and Twitter.
Example Tags:

```jsx
<Helmet>
  <meta property='og:title' content='Your Club Name - Join Now!' />
  <meta
    property='og:description'
    content='Join the most active club on campus!'
  />
  <meta property='og:image' content='https://yourclubname.com/og-image.jpg' />
  <meta property='og:url' content='https://yourclubname.com/' />
  <meta name='twitter:card' content='summary_large_image' />
</Helmet>
```

3. Use Static Content for Key Pages

Ensure the most important content (like the homepage) is visible in the initial HTML even before JavaScript runs.
Avoid rendering everything dynamically; use preloaded states or placeholders to display content.

4. Optimize Routes for SEO

Use clean URLs with descriptive paths:

```jsx
   /events/upcoming
   /about-us
   /join
```

Use a library like react-router-dom for navigation and ensure proper metadata for each route.

5. Create an XML Sitemap

An XML sitemap helps search engines understand your website structure.
Steps:

Install Sitemap Generator (optional):

```bash
npm install react-router-sitemap
```

Generate Sitemap:
Use a script to generate a sitemap.xml file that includes all your routes.

```js
const router = [
  { path: '/', name: 'Home' },
  { path: '/events', name: 'Events' },
  { path: '/contact', name: 'Contact Us' },
];
```

Save the sitemap.xml in your public folder for search engines to find.

6. Add Robots.txt

Allow or disallow crawlers to index certain pages.
Steps:

Create a robots.txt file in the public folder:

```bash
User-agent: \*
Allow: /
Disallow: /admin
Sitemap: https://yourclubname.com/sitemap.xml
```

Ensure sensitive pages (e.g., admin panel) are restricted.

7. Optimize Images and Metadata

   Add Alt Text: Ensure all images have meaningful alt attributes.
   Use Compressed Images: Optimize images with tools like TinyPNG or WebP formats.
   Lazy Load Images: Use libraries like react-lazyload to improve performance.

8. Use Google Search Console

   Verify your website ownership with Google Search Console.
   Submit your sitemap.xml to help search engines index your pages faster.

9. Monitor Performance

   Use tools like Lighthouse or GTmetrix to check SEO scores.
   Optimize based on their recommendations.

---

# References:

1. UI
   1. [Content Manager](https://dribbble.com/shots/21350223-Connect-PMS-Configuration)
   2. [List](https://dribbble.com/tags/community-platform)
   3. [Homepage](https://dribbble.com/shots/22611851-Dimension-dev-Re-Design)
   4. [Homepage 2](https://dribbble.com/shots/21221092-3D-printing-website-hero-landing-page-design)
