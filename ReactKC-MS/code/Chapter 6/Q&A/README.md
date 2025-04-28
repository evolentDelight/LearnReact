### My Answers

1. With which language are styles for React components defined?
   A: CSS
2. Which important difference, compared to projects without React, has to be kept in mind when it comes to assigning classes to elements?
   A: In html, elements are assigned classes with the keyword `class=`. In React or JSX, it must be `className=`
3. How can styles be assigned dynamically and conditionally?
   A: By conditionally assigning a variable with class names( in string).
4. What does "Scoping" mean in the context of styling?
   A: "Scoping" means keeping the CSS style within the context of a single JavaScript or JSX file.
5. How could styles be scoped to components? Briefly explain at least one concept that helps with scoping.
   A: CSS Modules can be used(comes with Vite). This is done by importing a -name-.module.css into a JS or JSX file and the styles would be scoped using this technology. During the build process, the classnames within the modules are transformed to unique class names that does not clash with any other class names defined elsewhere.
   Ex: `import classes from ./example.module.css`
   `<p className={classes.red}>`
