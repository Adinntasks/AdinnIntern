# Responsive Navbar Project

This project is a demonstration of a responsive navigation bar built with React and Vite. It also includes other components like a main content area and a footer.

## Technologies Used

*   React
*   Vite
*   CSS (for styling)

## Running the Project

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Run the development server:
    ```bash
    npm run dev
    ```



## Card Notch Implementation

The project cards feature a decorative notch at the bottom, implemented using CSS pseudo-elements. This creates a unique visual effect that adds depth and character to the card design.

### How It Works

The notch is created using the `::after` pseudo-element on the [`.project-card`](src/projects.css:84) class:

```css
/* Card Notch - src/projects.css:96-111 */
.project-card::after {
  content: '';
  position: absolute;
  bottom: -20px;           /* Extends below the card */
  left: 50%;               /* Centers horizontally */
  transform: translateX(-50%);  /* Perfect centering */
  width: 100px;            /* Notch width */
  height: 60px;            /* Notch height */
  background: #35f2ec;     /* Matches page background */
  border-top: none;        /* No top border */
  border-radius: 50px 50px 0 0;  /* Rounded top corners */
  z-index: 2;              /* Above card content */
  opacity: 1;
  transition: opacity 0.3s ease;
}
```

### Key Features

1. **Pseudo-element Approach**: Uses `::after` to create the notch without additional HTML markup
2. **Absolute Positioning**: Positioned at the bottom center of the card
3. **Background Color Match**: The notch background (`#35f2ec`) matches the page background, creating a "cut-out" effect
4. **Rounded Corners**: `border-radius: 50px 50px 0 0` creates a smooth, pill-shaped top
5. **Smooth Transitions**: Includes opacity transition for potential hover effects
6. **Z-index Layering**: Ensures the notch appears above other card content

### Visual Effect

The notch creates the illusion of a physical tab or handle at the bottom of each card, making the cards appear more interactive and tactile. The matching background color makes it look like a cutout in the card itself.

### Customization

To modify the notch appearance:
- **Size**: Adjust `width` and `height` values
- **Position**: Modify `bottom` value to change vertical placement
- **Shape**: Change `border-radius` for different corner styles
- **Color**: Update `background` to match your design theme

