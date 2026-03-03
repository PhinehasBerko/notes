# CSS Positioning Review

## Working With Floats

Definition: Floats are used to remove an element from its normal flow on the page and position it either on the left or right side of its container. When this happens, the text will wrap around that floated content.

float: left;
float: right;

*Clearing Floats*: The clear property is used to determine if an element needs to be moved below the floated content. When you have multiple floated elements stacked next to each other, there could be issues with overlap and collapsing in the layouts. So a clearfix hack was created to fix this issue.
For example;
<link rel="stylesheet" href="styles.css">
<div class="clearfix">
  <div class="box left">Left</div>
  <div class="box right">Right</div>
</div>
.box {
  width: 100px;
  height: 60px;
  color: white;
  text-align: center;
  line-height: 60px;
}

.left {
  float: left;
  background: teal;
}

.right {
  float: right;
  background: purple;
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

## Static, Relative and Absolute Positioning

*Static Positioning*: This is the normal flow for the document. Elements are positioned from top to bottom and left to right one after another.

*Relative Positioning*: This allows you to use the top, left, right and bottom properties to position the element within the normal document flow. You can also use relative positioning to make elements overlap with other elements on the page.

*Absolute Positioning*: This allows you to take an element out of the normal document flow, making it behave independently from other elements.

## Fixed and Sticky Positioning

*Fixed Positioning*: When an element is positioned with position: fixed, it is removed from the normal document flow and placed relative to the viewport, meaning it stays in the same position even when the user scrolls. This is often used for elements like headers or navigation bars that need to remain visible at all times.

*Sticky Positioning*: This type of positioning will act as a hybrid between *relative and fixed* positioning. Initially, the element behaves as though it's positioned relatively, staying within the flow of the document. However, once the user scrolls the element past a certain point, it "sticks" to the viewport (usually the top) and behaves as though it is fixed. This is great for creating elements like sticky navigation bars, which only become fixed once the user scrolls to a certain position.

## Working With the z-index Property

Definition: The z-index property in CSS is used to control the vertical stacking order of positioned elements that overlap on the page.
