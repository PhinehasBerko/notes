# THE BOX-MODEL
## Working with CSS Transforms, Overflow and Filters

### What Is Overflow in CSS, and How Does It Work?
- Overflow refer to the way element handle content that exceeds the size or borders of an element.

- Overflow is two-dimensional, the x-axis determines horizontal overflow, and the y-axis determines vertical overflow.

-  we can hide the overflow entirely with overflow-y: "hidden".
- some used values of overflow (overflow-y) are; 
  1. hidden: to hid the exceeding content entirely
  2. scroll: to make element scrollable to show exceeding content, independently of the page scroll
  3. NOTE: it is weird to use (overflow-x) for horizontal overflow as is not a common design decision.


### What Is the CSS Transform Property, and How Does It Work?
- The "transform" property is a powerful tool that allow you to modify the visual presentation of your webpage without affecting the layout of other element
<!-- How does it work -->
- It enable you to apply various transformation to elements such as rotating, scaling, skewing, moving(translating) them in 2D or 3D space.

- The translate function moves an element from its current position by 
  transform: translate(50px, 100px); //move 50px to right and 100px button.

- The rotate function rotates an element around a fixed point.

- The scale function allows you to change the size of an element
transform: scale(1.5, 2);

- You can combine multiply transformations transform: translate(50px, 50px) rotate(45deg) scale(1.5);

#### Here are some important accessibility concerns to keep in mind while using it.
1. Screen readers may not accurately convey transformed content.f you use transform to rearrange the visual order of elements, screen readers will still read the content in the original DOM order.

2. When using scale to resize text be cautious not to make it too small or too large. Extremely small text can be difficult to read while overly large text might overflow its container and become unreadable.

3. If you are using transform for animations effects, be mindful of users who are sensitive to motion. Excessive or rapid animations can cause discomfort or even trigger seizures for some people. Consider providing a way for users to reduce or turn off animations.

4. If you are using transform to hide or reveal content, make sure the content is still accessible to screen readers and keyboard navigation. Hidden content should be truly hidden such as by using display: none; or visibility: hidden;, rather than just being visually moved offscreen

5. When applying transform to interactive elements like buttons or links, ensure that the clickable area remains intuitive and easily targetable

6.  Always test your transformed elements with various assisted technologies and consider providing alternative ways to access information or functionality that might be affected by transforms.

## What Is the CSS Box Model, and How Does It Work?
- The CSS Box Model defines how HTML elements are structured and positioned on a webpage and   understanding this model will be able to control the size, spacing and appearance of the elements on your website.

- NOTE: In the CSS box model, every element is surrounded by a box. This box consists of four elements: the content area, the padding, the border, and the margin.

- The content area is the innermost part of the box. It's the space that contains the actual content of an element like text or images.

- The padding is the area immediately after the content area. It's the space between the content area and the border of an element.

- NB: The purpose of "padding" is to add space around the content to improve it's readability. 

- The border is the outer edge or outline of an element in the CSS box model. It's the visual boundary of the element.

NB: shorthand can be: border: 5px solid #345
or 
border-width: 2px 4px 7px 12px;
border-style: dashed solid solid dashed;
border-color: blue red green black;

- margin is the space outside the border of an element. It determines the distance between an element and other elements around it

HINT: These four components are essential for calculating the total width and height of an element

## What Is Margin Collapsing, and How Does It Work?
- Margin Collapsing is when the vertical margins overlap resulting in a single margin equals to the larger of the two margin.

- In CSS, when the vertical margins of two element is specified, they collapse into a single margin where the larger margin wins and therefore determines the margin between the two.
for example:
          .box1 {
            margin-top: 40px;
          }

          .box2 {
            margin-top: 10px;
          }
  - Instead of the total margin-top being 50px, it is reder 40px;

## What Is the Difference Between content-box and border-box?
- The box-sizing property can be set to either content-box or border-box to control how the width and height of elements are calculated.

- This property can be set on the universal selector (*) to apply to all the elements in the document:
* {
  box-sizing: border-box;
}

- In the content-box model, the width and height that you set for an element determine the dimensions of the content area, but they don't include the padding, border, or margin. 

- Use content-box when you need precise control over the content area. When you set width and height, you're only setting the size of the content itself.

- Border-box is different because the width and height you set include the element's content, padding, and border (but not its margin). 

- Use border-box when you want the element's total size to stay fixed even if padding or borders change — that's often helpful in responsive layouts

## What Is a CSS Reset, and What Are Some Common Examples?
- A CSS reset is a stylesheet that removes all or some of the default formatting that web browsers apply to HTML elements.

* {
  margin: 0;
  padding: 0;
}

some 3rd party tools are sanitize.css and normalize.css

## What Is the CSS Filter Property, and What Are Common Examples?
- The CSS filter property is a powerful tool that allows you to apply graphical effects to elements on a web page. 

- It's particularly useful for adjusting the visual presentation of images, backgrounds, and even text without modifying the original asset.

- The filter property can be used to create various effects, such as blurring, color shifting, and contrast adjustments.

- selector {                             img {
  filter: function(amount);      ===>       filter: blur(2px);
                                           }
}
- Here "function" represents the specific filter effect you want to apply, and amount is typically a value that determines the intensity of the effect.

- The blur function applies a Gaussian blur to the element, the amount is specified in pixels and represents the radius of the blur.

-  The blur effect can be useful for creating depth in your design or for obscuring parts of an image.

- The brightness function adjusts the brightness of the element.
- A value of 0% will make the element completely black, while values over 100% will increase the brightness.
img {
  filter: brightness(150%);
}

- This CSS rule increases the brightness of the image element by 50%. 
- Brightness adjustments can be used to make images pop or create a washed-out effect.

- The grayscale function converts the element to grayscale. 

- The amount is defined as a percentage, where 100% is completely grayscale and 0% leaves the image unchanged.

- img {
  filter: grayscale(100%);
}

- The sepia function applies a sepia tone to the element. Like grayscale, it uses a percentage value

- The hue-rotate function applies a hue rotation to the element
- The value is defined in degrees, and represents a rotation around the color circle.

- One of the most powerful aspects of the filter property is the ability to combine multiple effects. You can apply several filters to the same element by separating them with spaces

img {  
  filter: contrast(150%) brightness(110%) sepia(30%);  
}

- there are others available, such as contrast, invert, and saturate