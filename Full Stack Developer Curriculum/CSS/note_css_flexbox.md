# CSS FlexBox

## What Is CSS Flexbox, and When Should You Use It?

- CSS flexbox is a one-dimensional layout model that allows you to arrange elements in rows and columns within a container.

- We refer to flexbox as a one-dimensional layout model because it focuses on arranging elements along a single axis at a time. 

- The axis can be either horizontal or vertical.
### There are two key concepts that you should know about before you start working with flexbox: flex container and flex item.

- A flex container is an HTML element with a flex layout.

-  You can arrange and align elements in various ways within a flex container. 

- To make an HTML element a flex container, you need to add display: flex to its CSS styles.

- Flex items are the direct children of a flex container.

- These elements can be arranged and aligned within a flex container based on its properties. They can also shrink or expand to fit the available space.

- By default, a flex container will be a block-level element, so the container itself will be on its own row relative to other elements and containers.

-  Flex properties determine how flex items will be arranged, resized, and distributed within the flex container. 

- Some of the most commonly used ones are flex-direction, justify-content, align-items, and flex-wrap.

- Every flex container has two axes:

   > The main axis.
   > The cross axis.

- The orientation of these axes determines how different properties will affect the layout and distribution of the flex items. 

- By default, the main axis of a flex container is horizontal and the cross axis is vertical. 

- Flex items are arranged in the direction of the main axis.

- The cross axis is perpendicular to the main axis.

- The flex-direction property sets the direction of the main axis. 

- The default value of flex-direction is row, which places all the flex items on the same row, in the direction of your browser's default language (left to right or right to left):

- If you want to align the flex items vertically instead, you just need to set flex-direction to column in the flex container. This will change the direction of the main axis:

## What Are Some Common Flex Properties, and How Do They Work?

- flex-wrap -> This property determines how flex items are wrapped within a flex container to fit the available space.

- flex-wrap can take three possible values: nowrap, wrap, and wrap-reverse. 

- nowrap is the default value—flex items won't be wrapped onto a new line, even if their width exceeds the container's width.

