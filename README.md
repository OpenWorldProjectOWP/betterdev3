# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

I started out confident with the html...right up until I realised I had no idea how to switch the visible container after the user submitted a rating. I started doing research and founds sources on star rating forms, submit buttons, react native builds, angular builds, next js builds, and all sorts of ways to make a working form...but really nothing for changing a display based off of an interaction on the page. That is, until I found a link that looked promising. When I clicked the link it took me to CodePen.io and it was THIS EXACT PROJECT. I couldn't believe it. So, I recycled the code from that site and used it in my own project. Since 90% of the code was the same reguardless I didn't change much. However, I took time experimenting with the classes, css, and JS functions to learn about the interactions and properties functionality within the document. This form of retro-engineering a project gave me insight into things that I didn't know, that I didn't know. Concepts that I didn't even know existed yet. I want to stress to everyone that I am well aware that I didn't build this site on my own, but keep in mind that the experience I gained just from doing the work to understand the source code I used to build this project provided growth I didn't know I needed and acted as a sort of documentation pertaining to the entire projects interactivity. To see a full rundown of my experience, what I learned, and where to find the source code that I used, continue reading below.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- Mobile-first workflow

### What I learned

This project has a lot of research put into it as well as recycled code from codepen. Looking at the project I understood how to make the layout and with the growth from the last challenge I was able to recognize how to get everything centered correctly. However, I was completely lost when it came to how I was going to get the entire layout to change after "submitting" a rating because I am unfamiliar with JavaScript and am very new to learning its capabilities. So, I was able to find this exact challenge published on CodePen and I used it as a template of sorts. By recycling the code from CodePen I was able to see how the elements, styles, and JS functions worked together. I decided to try to change some class names, adjust CSS, and try to match changes inside of the JS script so that I could see exactly what each function was accomplishing. With that approach, I learned how to use java to display a completely different layout and how to create a form layout without creating an actual form. I learned what :focus is in CSS and how it interacts with HTML.

Overall, I looked at this project as an opportunity to use my engineering background and implement a retro-engineering technique to learn about a technology that I know very little of and I truly believe it was the most insightful approach I could take with this challenge. Now I can expand on what I've seen here and use these concepts in future challenges.

Here are some code snippets that I spent the most time going over and learning their functionality.

Here I wanted to know what onclick was and what its value was communicating within the code. I learned that it communicates when a button has been pressed and released.

```html
<button onclick="submit()">Submit</button>
```

Here I learned about :focus and how it communicates that a trigger event, such as mouse click, has happened to an element and that through this communication I could use it like :hover to change styles to an element that was previously interacted with.

```css
ul li a:focus {
  background-color: #7a8696;
  color: white;
}
```

This is the entire JS file and I felt it was important to place here because I didn't understand a word of it going into this project. I understood the var assignments but everything after was new to me. For example, how forEach was speaking with the entire HTML document looking for a specific event to trigger or how submit() from the button in the HTML was used as a function to control the display of entire sections of code, were all mind-blowing to a newbie such as myself. The power behind JS is truly fascinating to discover.

```js
var second = document.getElementById("second");
var first = document.getElementById("first");
var opt = document.querySelectorAll(".option");
var selected;

opt.forEach(function (el) {
  el.onclick = function () {
    selected = this.innerHTML;
  };
});

function submit() {
  second.style.display = "flex";
  first.style.display = "none";
  document.getElementById("selected").innerHTML = `You selcted ${
    selected || "0"
  } out of 5`;
}
```

### Continued development

Moving forward I will continue to work through JS to be able to write these sorts of scripts on my own or atleast less direction. I plan on trying to implement more accurate usage of semantic elements so that the browser and search engine has more context with what is going on in the document. And of course, continue to try and write cleaner vanilla CSS.

### Useful resources

- CodePen.io was incredibly helpful and as I mentioned above, is where I found this exact challenge and it is what allowed me to ask the right questions for my growth.

## Author

- Website - [Open World Project](https://openworldproject.dev/)
- Frontend Mentor - [@OpenWorldProjectOWP](https://www.frontendmentor.io/profile/OpenWorldProjectOWP)
- Dev.to - [@OpenWorldProjectOWP](https://dev.to/openworldprojectowp)
- GitHub - [OpenWorldProject](https://github.com/OpenWorldProjectOWP)

## Acknowledgments

Shout out to [@A7med3bdulBaset](https://codepen.io/A7med3bdulBaset) on CodePen.io for putting out their code and enabling me to use it and learn from it.
