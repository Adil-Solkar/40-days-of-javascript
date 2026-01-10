console.log("Hello, tapaScript!");
console.log("Welcome to 40 Days of JavaScript!");
// document.write("Check the browser console for a message!");

/*
 * document.write() is considered deprecated because it blocks
 * the browser’s rendering process, hurts performance,
 * and behaves poorly when used after the page loads (it can overwrite the whole document).
 * It also conflicts with modern async loading techniques and we have safer, cleaner DOM manipulation alternatives.
 * In short: it’s a legacy feature that slows pages down and doesn’t fit modern web development.
 */

// script tag in head 
const heading = document.getElementById('main-heading')
console.log(heading) // output: null 

// script tag in body
console.log(heading) // <h1 id="main-heading"></h1>

/* Modern sites load scripts in non-blocking ways,
*  and async and defer are the two main tools for that.
*
* - Use defer for scripts that rely on DOM or other scripts (order matters).
* - Use async for independent scripts that can run whenever (order doesn’t matter).
*
*/