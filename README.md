# DWS Technical Challenge

This project is an implementation of the DWS Blog based on the provided designs.
The goal is to deliver a responsive, mobile-first interface while maintaining pixel-perfect fidelity to the layouts.

The assignment requested the use of any preferred CSS approach (SASS/SCSS, styled-components, or pure CSS), while avoiding UI frameworks such as Material or Tailwind, in order to showcase styling and layout skills.
Where the mobile and desktop designs presented conflicting patterns, decisions were made to maintain consistency, preserve usability, and ensure a coherent user experience. These choices are documented in the code and comments.

### Setup and installation

### Clone the repo

### Create .env file

```bash
VITE_BACKEND_URL=<backend url>
```

#### Install dependencies

```bash
npm install
```

#### Run

```bash
npm run dev
```

### Notes on design decisions

Some design elements in the mobile and desktop versions differed in structure or behavior.
In these cases, I aligned the implementation with a mobile-first approach and selected the pattern that provided the most consistent and usable experience across breakpoints.

Any adjustments or additions (such as providing expected interactions that were missing from the mockups) were made with the intention of staying faithful to the design philosophy while ensuring functional UI behavior.

#### Assumptions

- The number of category tags is treated as dynamic. The UI supports overflow via horizontal scrolling and hides the native scrollbar to maintain layout integrity. If no categories are provided, the section is not rendered.

- The background color of the card was not included in the given color palette. Used neutral.lightest instead.

- The border color of the card was not included in the given color palette. Used neutral.extraLight instead.

- The color of the dot in the card was not included in the given color palette. Used secondary.medium instead.

- The color of the text in the card was not included in the given color palette. Used neutral.darkest instead.

- Limited the card title to a maximum of two lines.

- The number of lines of the card content text is determined by the available height.

- Added a fallback for the author name. Used “Unknown author.”

- Since it wasn’t defined, added tablet and widescreen grid settings.

- The header’s vertical padding was not defined, so I used 12px.

- The Avatar size was not specified. Used 56px.

- The colors of the author name and date on the post details page were not defined. Used neutral.darkest and neutral.medium respectively.

- The author.profilePicture provided in the API includes transparent padding and uneven dimensions. To maintain consistent display, images are shown inside a circle with object-fit: cover; the original image file is not modified. For full accuracy, the source images would need to be adjusted directly, as CSS/JS alone cannot fully correct uneven padding in every case.

- The design files present the cards with a fixed width arranged in three columns. However, this setup does not hold on smaller screens, where the fixed width causes the layout to break into uneven column counts. To maintain visual consistency and avoid layout distortion, the card width becomes flexible below a certain breakpoint. This responsive behavior preserves the overall design intent while adapting the card distribution to the available screen space.

- The mobile filters were not explicit regarding which version to implement or how each version should behave. Because of this, instead of selecting one, I implemented a combined approach that maintains a good user experience.

- Some interaction details were not fully specified in the provided components, such as empty states, full user flows, or navigation behavior. To ensure a smooth experience, I made decisions based on common usability practices.

- Certain design elements did not adapt well to the available space on mobile; in those cases, I prioritized maintaining a usable and coherent layout without altering the overall visual intent.

- In the absence of clear instructions on how the modal should be closed or how the flow should behave, I adopted a standard interaction pattern to allow users to exit the filter selection interface.

- Since some details were undefined, I interpreted the design as faithfully as possible without compromising responsiveness or interaction clarity.
