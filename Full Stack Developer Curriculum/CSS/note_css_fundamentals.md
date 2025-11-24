# Lists, Links, CSS Background and Borders Review

## How Do You Space List Items Using margin or line-height?
Margins can be used to create space between list items by applying margin properties to the li elements. This method allows you to control the spacing outside each list item, effectively increasing or decreasing the gap between them.
The line-height property adjusts the vertical spacing between lines of text within a single list item.

To control the spacing between individual list items, you would use margin or padding properties instead.

## How Do the Different list-style Properties Work?
- the list-style property allows you to customize how list items are displayed.

- The list-style property is actually a shorthand for three other properties:
* list-style-type
*list-style-position
*list-style-image

For unordered lists, you can choose from several bullet styles, such as discs, circles, or squares.

For ordered lists, you can use different numbering systems, like decimal, Roman numerals, or even alphabetical characters.

The list-style-type property is the most commonly used of the three, as it directly affects the appearance of the bullet or numbering style in your lists.

The list-style-position property controls the position of the bullet or number in relation to the list item’s content. There are two values you can use: inside and outside.

When you use the value outside, the bullet or number appears outside the content, which is the default behavior.

And, when you use the value inside, the bullet or number appears inside the content, which may cause the text to wrap and align with the bullet or number.

The list-style-position property can be useful when you want to control the alignment of the list content, especially in situations where you have multiple lines of text in a single list item.

The list-style-image property allows you to use an image as the bullet point for your list items. This can be useful for adding a unique visual style to your lists.

When using list-style-image, make sure the image you choose is small and appropriate for the design of your webpage. If the image is too large or complex, it can make the list harder to read.

You can combine the three properties – list-style-type, list-style-position, and list-style-image – into a single list-style shorthand property.

## Why Are Default Link Styles Important for Usability on the Web?
The primary purpose of default link styles is to provide clear visual cues that help users distinguish between interactive and non-interactive elements on a webpage.

This distinction is fundamental to creating an intuitive and user-friendly browsing experience.

## How Do You Style the Different Link States?
- There are different states of a link, including link, visited, hover, focus, and active
- Styling these different link states is crucial for usability and accessibility, as it provides visual cues about the current state of the link. 
- Additionally, clear link states enhance the overall user experience by providing immediate feedback on user interactions, reducing confusion and improving the site's navigability.

-These states can be styled using something called pseudo-classes in CSS.

- A pseudo-class is a keyword added to a selector that specifies a special state of the selected element.
* The :link pseudo-class styles unvisited links, indicating that they are clickable.

* :visited styles links that have already been visited or clicked, helping users track which links they have clicked before. 

* :hover changes the link's style when the user hovers over it, providing a visual cue that the link is interactive.

* :focus adds styles around the link when it is focused, such as when navigating with a keyboard, or enhancing accessibility.

* :active changes the link's styles while the link is being clicked, providing immediate feedback to the user that their action is being registered. 

## How Do Background Image Size, Repeat, Position, and Attachment Work?
- If you want to set the size for the background image, you can use the background-size property.

-You can use "contain" to scale the image as large as possible without cropping or stretching or  use the 'cover' value, then the background image will scale to cover the entire body element while maintaining its aspect ratio.

-By default, background images repeat both horizontally and vertically to fill the entire element. However, you can control this behavior.

- You can use the background-repeat property with the value set to no-repeat

- The background-position property allows you to set where in the element the background image appears. You can use keywords like top, bottom, left, right, and center, or specific pixel or percentage values

- Lastly, background-attachment determines whether the background image scrolls with the content or remains fixed when the page is scrolled. scroll are the (default) but can be changed to fixed;

## What Is a Background Gradient, and How Does It Work?
- A background gradient in CSS is a smooth transition between two or more colors that can be applied to the background of an element

- There are two main types of gradients in CSS: linear gradients and radial gradients.

 basic syntax:

background: linear-gradient(direction, color-stop1, color-stop2, ...);

or 

background: radial-gradient(shape size at position, color-stop1, color-stop2, ...)

the shape specifies the shape of gradient which could be circle or ellipse.

The size determines the size of the gradient's ending shape which could be closest-side, closest-corner, farthest-side, farthest-corner, contain, or cover.

example:
.radial-gradient{
  background: radial-gradient(circle closest-side at center, red, yellow 50%, green);
  height: 60vh;
}
- The closest-side keyword makes the gradient's ending shape fit the closest side of the element.

## What Are Some Accessibility Considerations for Backgrounds?
- One of the primary accessibility concerns related to backgrounds is ensuring that there is sufficient contrast between the background and the text.

- Contrast refers to the difference in lightness or darkness between two colors. Sufficient contrast between the background color and the text color is essential for readability.

- Another consideration is avoiding placing text over busy or complex backgrounds, such as images or gradients with multiple colors. 

- Background music or auto-playing videos can be distracting for some users, particularly those with cognitive disabilities. If you include background audio, always provide a way for users to mute or pause the audio.

## What Are the Different Ways You Can Add Borders Around Images?
- The most straightforward way to add a border to an image is by using the border property. This property is a shorthand that allows you to set the width, style, and color of the border all at once.
eg; img {
  border: 2px solid red;
}
- Another way to create a border effect is by using the outline property. While similar to border, outline doesn't affect the element's dimensions or layout:
img {
  outline: 3px solid gold;
}