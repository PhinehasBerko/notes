## Some Best Practices for Styling Text Inputs
- As with all text elements you need to ensure the styles you apply to the text input are accessible
- This means the font needs to be adequately sized and
- The color needs to have sufficient contrast with the background.
- The placeholder, however, shouldn't be forgotten when styling
- You should allow the user to modify the input For example, if it's a text area you should not remove the ability to resize it. The input should also scale accordingly when the user zooms the page.
- When the user's text does not pass the input validation there is a visual indicator that shows there is something wrong.

## When Should You Use appearance: none to Deal with Issues Styling Search Inputs and Checkboxes?

** when to use appearance: none to address styling issues for search input, checkboxes and radio buttons.
-  use appearance: none to hide aspects of the default element by browser and build your own instead.

- This appearance: none CSS property gives you complete control over the styling, but it does come with some things to look out for. 

- The default interactive components of input elements include features such as focus and error indicators which you will need to ensure aren't lost.

- Creating consistent cross-platform styling is a great reason to use this property. 
- You can also use it to ensure that tap targets on a mobile device are large enough or that the colors of a checkbox have enough contrast.

## Common Issues When Styling Special Input Elements

- some of the common issues when trying to style special input elements like the datetime-local and color inputs.
- These special types of inputs rely on complex pseudo-elements to create things like the date and color pickers
- One challenge is that, because the default styling depends entirely on the browser, CSS that makes the picker look right in one browser may produce a very different result in another

- Consider the date selector; there are a lot of moving parts here and the complex structure of the pseudo-element might pose a significant challenge in applying styling to the right areas.

* For these reasons many developers rely on JavaScript libraries or custom components entirely instead of using the browser's built-in components.

