1. How can Refs help with handling user input in forms?
   A: Refs can access inputs in DOM that are outside of the React render cycles without needing any state hooks and rendering. This eliminates any performance impacting rendering.
2. What is an uncontrolled component?
   A: It is a component that React does not have direct control of its DOM state.
3. What is a controlled component?
   A: It is a component wher eReact controls its UI state.
4. When should you not use Refs?
   A: Refs should not be used when you require behaviors that manipulate the DOM. Anything that would require a re-rendering should not be part of Refs.
5. What's the main idea behind portals?
   A: The main idea of portals is to inject UI/UX components any where, as long as you provide the injection point such as an `id` of an element.
