# DESIGN TIPs By Sajid (YouTube)

## Rule #1: "Good design is as little design as possible"

- Good design is as little design as possible ~ Dieter Rams (*German Industrial Designer*)

* It means focus on essential features and make them better and useful for the User.
* It also means less colors, words, and clutter on the screen.

### QUESTION_ #1: What is the key functionality or the main selling point of this website.

## Rule #2: Use the law of similarity and proximity to simplify the design.

* Use shapes, size, color, and space to group elements

- NB: Gestalt theory emphasizes that, the whole of something is greater than it parts.
- Design elements in groups (as a whole) before focusing on individuals elements (as parts).
- NB: The Design should be scanable in seconds.

* The law of similarity makes design better, consistent and easier to implement.
* The law of proximity gives a better understanding of layout and spacing.

## Rule #3: Elemnts need more spacing than you think.

* Users scan the whole UI before focusing on individual elements - so start with a lot of spacing and look at the design as a whole then start to remove it until u're happy with the results.
* Doing this manually becomes boring so a system must be set inplace.

## Rule #4: Use a Design System.
* For example:
- Spacing can use a multiply of 4 (4px, 8px, 16px, 32px, 64px, ...)
- Generally we use REM units for font-size and margins so the design can adopt the user's system
preference.
- Set these values as variables e.g. --margin-xxs: .25rem,...,  --margin-xxl: 125rem. 
- Have same procedure above for fonts and colors (almost always put them as root variables).
- Free Google fonts- Inter, Lexand, Open Sans, Source Sans 3, Work Sans, DM Sans.

* For Colors & Text:
- Refer to notes on tips_css_UI_color_palette.md

* Addition: 
- Avoid text align center especially for paragraphs and smaller text size. but (Justify left is better).
- Line height is inversely proportional to the font-size. 
 (Bigger font size needs smaller line height and smaller font-size needs greater line height for eligibility)

- Greater line height also acts as margin top on text elements so you don't have to assign spacing between all text elements.

### Designing Key Elements (Buttons/Links)

- You generally need 2 types of each, one for primary action and one for secondary action

 NB: Web Design is all about putting the right element at the right place with the right sizing.

## Rule #5: Hierarchy is everything.

* We need to emphasis certain elementson the page to help users navigate and find important action.

* To Do That: we can use size weight and color
 - This can be easily overdone so start small. (small changes results in big impact or overall design)

NB: To emphasize an element, ask urself, what's the firth thing the user will look for 
 [e.g: Title], sometimes to emphasize an element all u do is de-emphasis competing (sub) element.

NB: Good design is less design and almost alway more design results into an uglier design (few exception tough).

* Introduce depth to add some character, use color and shadows to elevate important elements

* Shadows can also be used to replace [solid borders]

* The closer something feels to the user the more it will attract their focus.

NB: 
- Lighter color or Bigger shadow = More Elevation
- Darker color or Inner shadow  = More depth
- You can use accent colors to highlight focus important element.
- One easy trick to add a bit of excitement is by replacing a solid color with a subtle gradient.
- Try using cards for Bland elements

### QUESTION: How do u get all these Ideas?
- Creativity as a process not a moment.

## Process for Creativity

### STEP #1: Learn the basics ( *Read: Atomic Desgin by Brad Frost and Refactoring UI by Adams Wathan /  Steve Schoger*)

### STEP #2: Find a source of inspiration 
- Visit top tier websites and study their style; check some amazing work on fignma community 

- Mobbin "for design inspiration for projects"

### STEP #3: Brainstorm some ideas from STEP #2

### STEP #4: Step away from the problem (!VERY IMPORTANT TO CREATIVITY)

### STEP #5: Don't fall in love with your idea
- Be open to ask friends, users for feedback or critics and adjust if necessary

NB: Creativity is not just a process, it's a state of mind.
