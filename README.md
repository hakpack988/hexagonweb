> [!warning]
** Do not include the following in the final export for Github Repositiory.**
   - [here](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) You can find how Github handles the basic markdown for the *readme* files.
   -  Learn how to to customize ng-bootstrap [here](https://medium.com/@jackortico/how-to-customize-bootstrap-styles-and-variables-when-using-ng-bootstrap-9df293ae903d).
---


# The Yard SDC
The front-end development project for The Yard Sports Development.
Integrated with [Exercise.com](https://www.exercise.com)

---

## Initializing Dev Environment

1. This project is using [Angular](https://www.angular.io) framework as a single-page application, and the **Angular CLI** so include all prerequisites required.

2. [Node Package Manager](https://www.npmjs.com) (NPM) is used in the application to retrieve plugins and components that are essential to the application running properly. To install all dependent packages, use `$ npm install` or alternatively `$ npm i` for the shorthand. This might take a minute. [Node](https://nodejs.org/en) is a dependency for NPM.

4. To run a temporary dev server, use the Angular CLI command `$ ng serve`, or host a local server using `$ ng serve --host 0.0.0.0` and connect with other devices on the network using the host machine's IPV4 address.

---
   
## Dependencies Overview

Packages are installed via npm, but here is a general overview, description, and version no. of required NPM packages

- **bootstrap** (v5.3) - basic CSS framework
- **ng-bootstrap** (v14.1.1) - angular implentation of the above into usable components
- **gsap** (v11.3.5) - js animation plugin (mainly used for scrolltriggers)
- **ng-icons/iconoir** (v25.0.1) - site-wide icons
- **firebase** (v9) - Hosting and data management
- **@angular/fire** (v7.5.0) - native angular implenentation of firebase

---
# Design System 
<sub>Simplified</sub>

#### Color
| Name              | scss variable | \#hex     | Use                                          |
| ----------------- | ------------- | --------- | -------------------------------------------- |
| *Yard Green*      | $yPrimary     | `#2F4939` | Primary Green - Backgrounds, CTA, and Icons  |
| *Green Saturated* | $yGreen       | `#07550F` | Secondary Saturated Green                    |
| *Bright Green*    | $yBrightgreen | `#269C63` | Hovers and secondary states on Primary Green |
| *White*           | $yWhite       | `#FFFFFF` | General White Neutral                        | 
| *Off White*       | $yOffwhite    | `#F0F3F6` | Main Neutral used for background and buttons on dark bg                                        |
| *Grey*            | $yGrey        | `#828282` |     Used for cards and boxes on top of white for contrast                                          |
| *Off Black*       | $yOffblack    | `#2D2D2D` |                           Main Black Neutral used for text generally.                 |
| *Black*           | $yBlack       | `#000000` |            Used in certain cases for outlines and text                                  |
| *Orange*          | $yOrange      | `#D07F4B` |            Used for membership and pops of color across site                                  |

