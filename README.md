# PAWS & SNAPS

![Mockup image](docs/readme/pawsandsnapsmockup.png)








🚀 [Deployed Frontend Site](https://paws-and-snaps-clh3-e70gcplq7-sarimol-adampuraths-projects.vercel.app/)  
💻 [Deployed API](https://paws-snaps-api-1.onrender.com/)  
🔗 [API Repo](https://github.com/sari-rahul/paws-snaps-api)

- [Paws&Snaps](#paws&snaps)
   * [About](#about)
   * [UX](#ux)
      + [1. Strategy](#1-strategy)
         - [User Stories](#user-stories)
      + [2. Scope](#2-scope)
      + [3. Structure](#3-structure)
      + [4. Skeleton](#4-skeleton)
         - [Wireframes](#wireframes)
      + [5. Surface](#5-surface)
   * [Features](#features)
      + [Components](#components)
         - [Asset/Spinner](#assetspinner)
         - [Avatar  ](#avatar)
         - [MoreDropdown & ProfileEdit Dropdown](#moredropdown-profileedit-dropdown)
         - [Navbar](#navbar)
      + [Pages](#pages)
         - [About / Landing](#about-landing)
         - [Sign up](#sign-up)
         - [Sign in](#sign-in)
         - [Create an Article](#create-an-article)
         - [Edit an Article](#edit-an-article)
         - [Delete an Article](#delete-an-article)
         - [View an Article](#view-an-article)
         - [Article pages](#article-pages)
         - [Comment ](#comment)
         - [Profile](#profile)
         - [Edit Profile](#edit-profile)
         - [PageNotFound](#pagenotfound)
      + [Future Features](#future-features)
   * [Technologies Used](#technologies-used)
      + [Languages](#languages)
      + [Frameworks, Libraries & Tools](#frameworks-libraries-tools)
   * [Resources](#resources)
   * [Testing & Validation](#testing-validation)
   * [Bugs](#bugs)
      + [Unfixed Bugs](#unfixed-bugs)
   * [Project Setup and Initial Deployment](#project-setup-and-initial-deployment)
      + [Create a new app in Heroku.](#create-a-new-app-in-heroku)
   * [Forking the GitHub Repository](#forking-the-github-repository)
   * [Making a Local Clone](#making-a-local-clone)
   * [Credits](#credits)
      + [Images](#images)
      + [Code](#code)
      + [Acknowledgements](#acknowledgements)

## About

Paws & Snaps is a dedicated platform for pet lovers and enthusiasts, offering a vibrant space to share stories, tips, and experiences related to our furry friends. Inspired by the unconditional love and joy that pets bring to our lives, Paws & Snaps aims to foster a supportive community where pet owners can connect, learn, and celebrate the bond with their beloved companions.

Key Features:

-   Blogging Platform: Share your pet-related stories, adventures, and insights through engaging blog posts enriched with photos.
-   Interactive Community: Connect with fellow pet lovers through likes, comments, and sharing posts, creating a dynamic and interactive environment.
-   Search and Discovery: Explore a wide range of pet-related topics, from training tips to heartwarming rescue stories, using intuitive search and discovery tools.
-   Personalized Profiles: Customize your profile to showcase your pets, interests, and contributions to the community, fostering connections with like-minded individuals.

[Back to top](#paws&snaps)

## UX

The five planes of Website Design were followed in the creation of this project.

### 1. Strategy

Our strategy is to develop a blogging website tailored for pet lovers and enthusiasts, providing a platform where they can share their experiences, stories, and insights related to their beloved pets. With a focus on fostering a sense of community and connection among pet owners, Paws & Snaps aims to be a go-to destination for all things pets.

Key Features:

-   Pet-Centric Blogging: Users can create and share blog posts centered around their pets, including stories, tips, advice, and humorous anecdotes, creating a vibrant and diverse collection of content.

-   Interactive Features: To encourage engagement, users have the option to include photos, videos, and interactive elements in their blog posts, making the content more visually appealing and immersive.

-   Search and Discovery: Users can easily search for blog posts by pet type, topic, or author, allowing them to discover new and relevant content that aligns with their interests and preferences.

-   User Profiles: Each user has a personalized profile where they can showcase their pets, manage their blog posts, and connect with other pet owners through comments.

By focusing on these key features, Paws & Snaps aims to create a vibrant and inclusive online community where pet lovers can come together to share their passion, experiences, and knowledge, ultimately enriching the lives of both pets and their owners.


[Back to top](#paws&snaps)

#### User Stories

For more details on the user stories go to the [projects KANBAN board](docs/readme/pawsandsnapskanbanboard.png)

**First Sprint**

Create an account & Login
- Landing Page
- Navbar
- Create Account
- Log in
- Log out
- Remain logged in

**Second Sprint**

Creating Articles
- Create Article
- View Article
- Update a Article
- Delete Article
- Search Article

**Third Sprint**

Profile pages
- Edit Profile
- Change Password
- User Profiles

**Fourth Sprint**

Comment on a Article
- View comments
- Edit a Comment
- Delete a Comment

General
- Responsive site.
- Simple user navigation.
- 404 page.

[Back to top](#paws&snaps)

### 2. Scope

- Purpose:

Paws & Snaps aims to serve as a comprehensive blogging platform catering specifically to the needs and interests of pet owners and enthusiasts. The platform provides a space where users can share their pet-related experiences, stories, and insights, fostering a sense of community and connection among pet lovers worldwide.

-   Target Audience:

The primary target audience for Paws & Snaps includes:

Pet owners: Individuals who own pets and are passionate about sharing their experiences, tips, and advice related to pet care, training, health, and lifestyle.
Pet enthusiasts: People who have a keen interest in pets and enjoy reading and engaging with pet-related content, even if they do not currently own a pet themselves.
Animal lovers: Individuals who are passionate about animals and enjoy learning about different types of pets, breeds, and animal welfare issues.

-   Core Functionalities:

User Registration and Profile Creation: Users can register on the platform and create personalized profiles, including information about themselves and their pets.
Blog Post Creation and Publishing: Users can create and publish blog posts centered around their pets, including text, images, videos, and interactive elements.
Commenting and Engagement: Users can engage with other users' blog posts through comments, likes, and follows, fostering interaction and community building.
Search and Discovery: Users can easily search for pet-related content by keyword, category, or author, allowing for seamless content discovery and exploration.

### 3. Structure

For the database schema visit the [Backend API Repo](https://github.com/sari-rahul/paws-snaps-api)

![Sitemap](docs/readme/pawsandsnaps_layout.png)
The sitemap was made using [Lucid Chart](https://lucid.app/)


[Back to top](#paws&snaps)

### 4. Skeleton

#### Wireframes

![Landing page wireframe](docs/wireframes/landingpage.png)
![Signup wireframe](docs/wireframes/signuppage.png)
![Login wireframe](docs/wireframes/signinpage.png)
![Introduction wireframe](docs/wireframes/introductionpage.png)
![Articles Home Page wireframe on large screens](docs/wireframes/newspagelargescreen.png)
![Articles Home Page wireframe on medium screens](docs/wireframes/newspagemedscreen.png)
![Articles Home Page wireframe on small screens](docs/wireframes/newspagesmallscreen.png)

![Create article wireframe](docs/wireframes/articlecreatepage.png)
![Article page wireframe](docs/wireframes/articlepage.png)
![Profile wireframe](docs/wireframes/profilepagelargescreen.png)


[Figma](https://www.figma.com/templates/web-design-inspiration/) was used to create the wireframes.


[Back to top](#paws&snaps)

### 5. Surface

Color and themes for Paws & Snaps were carefully selected to evoke a sense of warmth, playfulness, and love for pets. The primary colors used in the theme are black and pink, with accents of white to provide contrast and balance. The theme revolves around a prominent paw print design with a heart inside it, symbolizing the deep bond between pets and their owners.

![Color Palette](docs/readme/colorpallete.png)
The color palette for Paws & Snaps includes the following colors:

Black (#000000): Represents elegance, sophistication, and the timeless bond between humans and animals.
Pink (#FF69B4): Symbolizes love, affection, and the joy that pets bring into our lives.
White (#FFFFFF): Provides contrast and balance, creating a clean and modern aesthetic.

Fonts play a crucial role in shaping the visual identity of Paws & Snaps, reflecting the platform's personality and values. For Paws & Snaps, two distinct fonts were selected to create a harmonious and engaging user experience.

![oswald font](docs/readme/oswaldfont.png)

Oswald:

Purpose: Oswald is utilized for headings, titles, and other prominent text elements throughout the platform. Its bold and modern appearance conveys a sense of strength, reliability, and professionalism.
Characteristics: Oswald is a sans-serif font with clean lines and geometric shapes, making it highly legible and suitable for display purposes.
Attributes: Its condensed letterforms and ample spacing provide visual impact and readability, ensuring that important information stands out effectively.

![devanagri font](docs/readme/devanagrifont.png)

Anek Devnagri:

Purpose: Anek Devnagri is employed for body text, paragraphs, and other smaller text elements, offering a balanced and cohesive typographic hierarchy.
Characteristics: Anek Devnagri is a versatile Devanagari script font that combines traditional elements with modern design sensibilities. It reflects the cultural richness and diversity associated with pet ownership.
Attributes: With its clear and legible letterforms, Anek Devnagri enhances readability across various devices and screen sizes, fostering a seamless reading experience for users who prefer Devanagari script.
By integrating Oswald and Anek Devnagri into the design of Paws & Snaps, the platform achieves a harmonious blend of contemporary aesthetics and cultural inclusivity. These fonts contribute to a visually appealing and accessible interface that resonates with the diverse audience of pet lovers and enthusiasts.

[Back to top](#paws&snaps)

## Features

### Components

#### Asset/Spinner

![spinner](docs/readme/pawsandsnaps_spinner.png)

This component has 2 uses and has been used a number of times throughout the site.
- Display a loading icon when fetching data from the API
- Display an image with text, this was used on the create a highlight form for the upload image, when there are no highlights to display on the highlights page

The props are:
- spinner: if passed in a loading animation will be displayed
- src: url for an image
- message: text to go with the image

[Back to top](#paws&snaps)

#### Avatar  

![avatar](docs/readme/avatar.png)

The avatar component is used throughout the site for users avatar and their username. It take the following props:
- src: a link to the image url
- height: default set to 45px
- text: Text displayed in the image is not shown. Default is set to avatar

[Back to top](#paws&snaps)

#### MoreDropdown & ProfileEdit Dropdown

![dropdown menu](docs/readme/editarticeldropdownmenu.png)

The components are shown as 3 dots when a user is able to make changed to something, like an article, comment or their profile. Clicking on the dots will show a dropdown menu with options for the user.

MoreDropdown options:
- Edit an Article
- Delete an Article

ProfileEditDropdown
- Edit profile
- Edit username
- Change password

[Back to top](#paws&snaps)


#### Navbar

The navbar is displayed on every page on the site, but will show different options for a logged in user to a non logged in user as well as on mobile and desktop devices.

**Desktop - signed in**

![navbar on desktop for a signed in user](docs/readme/signedin-navbar.png
)

A signed in user will see the options to:
- Start here to visit the home page
- News to see all the Articles
- Add an Article
- Sign out
- Visit their profile via the avatar

**Desktop - signed out**

![navbar on desktop for a non signed in user](docs/readme/signedout-navbar.png)

A user who is not signed in will see the following options:
- Sign in
- Sign up

**Mobile - signed in**

Users on a mobile device will have the same options but via a hamburger menu

![nav bar on mobile for a signed in user](docs/readme/mobile-signedin-navbar.png)

**Mobile - signed out**

![nav bar on a mobile device for a non signed in user](docs/readme/mobile-signedout-navbar.png)


[Back to top](#paws&snaps)


#### Footer

The signed in user will be able to see a footer component containing social media icons, logo and affiliate disclosure. It will be displayed in a column on small screen.
![footer on large screens](docs/readme/footerlargescreen.png)
![footer on small screens](docs/readme/footersmallscreen.png)

#### Copyright
The copyright container is displayed throughout the website to all users.

![Copyright bar](docs/readme/copyright.png)


### Pages

#### About / Landing

![landing page](docs/readme/landingpage.png)

The first page a user sees when navigating to the site is the landing page with:
- Information on the site
- Links to sign up sign in for users who are not logged in

[Back to top](#paws&snaps)

#### Sign up

![sign up page](docs/readme/signup.png)


This page is accessible for non signed in users via the navbar. For all user it displays:

- A sign up form at the center

[Back to top](#paws&snaps)

#### Sign in

![sign in page](docs/readme/signin.png)


This page is accessible for non signed in users via the navbar. For all  users it displays:

- A sign in form at the center

[Back to top](#paws&snaps)

#### Create an Article

![create an article-image and title](docs/readme/addarticleform1.png)
![create an article-editor and buttons](docs/readme/addarticleform2.png)

A logged in user will be able to create an article from the navbar and will be taken to a form with the options to add the following things to their article:

- Image: add an image from the users device
- Title
- Content
- Category: a dropdown list of predefined categories

The date and Time will be automatically added.

React Quill Editor is used to enter the article which provides the ability to add headings of different sizes, use font styles like Bold, Italics and Underlined , Bullet points and numbers and attach links to words.


[Back to top](#paws&snaps)

#### Edit an Article

![edit an article dropdown menu](docs/readme/editarticeldropdownmenu.png)

![edit an article form](docs/readme/prepopulatedarticleeditform.png)

A user can edit one of their highlights via the dropdown menu in the article page. They are taken to a pre-populated article form containing the details of the highlight that can  be modified.


[Back to top](#paws&snaps)

#### Delete an Article

![deleting an Article](docs/readme/editarticeldropdownmenu.png)

From the dropdown menu on a users Article they also have the option to delete the Article. Clicking on this will remove it from the site and the database then redirect the user to their last page.

[Back to top](#paws&snaps)


#### View an Article

![viewing an Article](docs/readme/viewanarticle.png)

Once an Article has been created it will show up on the news page and profile page. From those pages the image  will take a user to a page for the article containing more details and any comments.

The Article page will show the following information:
- Author
- Date
- Title
- Image
- Content
- Comments

[Back to top](#paws&snaps)

#### Comment 

![add a comment](docs/readme/comments.png)

A signed in user can add a comment to an article from the Article detail page. The comment will be displayed under the Article and can be edited or deleted by the author via the dropdown menu. Comments are displayed newest to oldest from top to bottom and have an infinite scroll component so users don't have to click to a new page to view more comments.
The owner of the article cannot comment on his own article.


[Back to top](#paws&snaps)

#### Profile

![profile-detail](docs/readme/profiledetailsection.png)
![profile-articles](docs/readme/articlesectioninprofile.png)

Each user has a profile page that they can access from the navbar, accessing a different users profile can be done by clicking on their avatar from one of their articles or comments. The users profile contains the following information:

- Username
- Profile image
- A bio
- Links to their facebook, Instagram and Linked-in
- Their Articles

[Back to top](#paws&snaps)

#### Edit Profile

![edit a profile](docs/readme/profileeditbutton.png)

A user can edit their own profile by clicking on the edit button at the top of their profile. The following things can be added or changed:

![edit a profile form](docs/readme/editprofileform.png)

- Username
- Bio
- Links to social media accounts
- Profile image
- Password

**Change Username**

![change username](docs/readme/usernamechange.png)

**Change Password**

![change password](docs/readme/passwordchange.png)

#### PageNotFound

![404 page](docs/readme/404error.png)

If a user navigated to an invalid url a custom 404 page will be displayed

#### No results Page

![no results found](docs/readme/noresultsfound.png)
If the user searches for a user or article which does not exists a no result found page will be displayed.

#### Empty folder Page
![empty folder page](docs/readme/pawsandsnaps_noarticle.png)

If a user has no article in their profile an empty folder page will be displayed

[Back to top](#paws&snaps)

### Future Features


[Back to top](#paws&snaps)

## Technologies Used

### Languages

- HTML
- CSS
- JavaScript

### Frameworks, Libraries & Tools

- [Django Rest Framework](https://www.django-rest-framework.org/) - Backend API
- [React](https://react.dev/) - Library for JS
- [React Bootstrap](https://react-bootstrap-v4.netlify.app/) - CSS libraby
- [Canva](https://www.canva.com/en_gb/) - Wire-frame and design
- [GitPod](https://gitpod.io/workspaces) - Virtual IDE
- [GitHub](https://github.com/) - Repo hosting
- [Heroku](https://dashboard.heroku.com/apps) - Deployment
- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Fonts
- [LucidChart](https://lucid.app/) - Development of flowchart
- [Chrome Dev Tools](https://developer.chrome.com/docs/devtools) - Development and bug fixing
- [Favicon.io](https://favicon.io/favicon-converter/) - Favicon conversion
- [React Router](https://v5.reactrouter.com/web/guides/quick-start) - Dynamic routing
- [React Quill]()-for editing the article.
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) - for instant loading and infinite scrolling
- [Axios](https://github.com/axios/axios) - Promise-based HTTP requests
- [Adobe Color](https://color.adobe.com/) - Color Palette
- [Am I Responsive?](https://ui.dev/amiresponsive) - Multi-device mockup

Validation:
- [WC3 Validator](https://validator.w3.org/) - validate the html
- [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) - validate the css
- [ESLint](https://eslint.org/) - validate JS code
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - validate performance, accessibility, best practice and SEO

[Back to top](#paws&snaps)


## Resources

- Code Institute Moments walkthrough
- React Bootstrap Docs
- Stack Overflow
- Slack Community

[Back to top](#paws&snaps)

## Testing & Validation

For details on testing and validation view the dedicated [testing.md](./TESTING.md) file.

## Bugs




### Unfixed Bugs


[Back to top](#paws&snaps)

## Project Setup and Initial Deployment

- Create a new repository in GitHub.

- Create new workspace by clicking `Gitpod` button.

- Once workspace has loaded, run terminal command to create React app.  
```
npx create-react-app . --use-npm
```

- To install Bootstrap, run terminal command  
```
npm install react-bootstrap@1.6.3 bootstrap@4.6.0
```

- To run the app type the command  
```
nvm install 16 && use 16
```  
then  
```
npm start
```  

- Once the app is installed, run terminal command npm start to check app is working. Browser should open with the spinning React logo on a dark blue background.


[Back to top](#paws&snaps)

### Create a new app in Heroku.

- Go to `Settings` and ensure that heroku/nodejs buildpack is present. If it is not, click on `Add Buildpack`, select `nodejs` and save changes.
- Click on the `Deploy` tab and go to `Deployment Method`. Click on `GitHub`.
- Go to `App connected to GitHub` and search for the relevant repository. Select that repository and click `Connect`.
- Go to `Manual Deploy` section and click `Deploy Branch`. Click on `build logs` to monitor build and ensure deployment is successful. Build is complete when log states `Build succeeded!`.
- Click `Open App` button to view newly deployed app.


[Back to top](#paws&snaps)

## Forking the GitHub Repository

- Go to the GitHub repository
- Click on `Fork` button in top right corner
- You will then have a copy of the repository in your own GitHub account.


[Back to top](#paws&snaps)


## Making a Local Clone

- Go to the GitHub repository
- Click the `Code` button above the list of files
- Highlight the `HTTPS` button to clone with HTTPS and copy the link
- Open the command line interface on your local computer
- Change the current working directory to the one where you want the cloned directory
- Type git clone and paste the URL from the clipboard
```
git clone https://github.com/sari-rahul/Pawfect-Pics
```
- Press Enter to create your local clone


[Back to top](#paws&snaps)


## Credits

### Articles
The article were taken from different online blogs like Puppy leeks and Pet Blog.

### Design
The design of this website was inspired from two website namely [PuppyLeaks](https://www.puppyleaks.com/blog/) and [PetBook](https://www.petbook.de/)

### Code
This project was inspired by the Code Institute moments walkthrough project. I have added the code for the front-end to fit functionality and the backend modules have been changed as per needs.

### Acknowledgements
* My Mentor Jubril Akolade for his advice and guidance throughout the project.
* Mimmi Stokkvinnan for testing this project.
* Tutors at Code institute for their support.

[Back to top](#paws&snaps)
