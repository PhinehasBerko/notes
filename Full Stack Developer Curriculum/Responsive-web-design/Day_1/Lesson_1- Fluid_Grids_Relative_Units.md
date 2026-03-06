# Fluid Grids & Relative Units
    Fluid  Grid is a css layout method where element are dynamically resize based on the user's device. It is essential because it make dynamic layout accessible on both wider and smaller devices from smart phones to 4k screen.

2. What are relative unit?
    these relative (%, rem, em, vh, vw, vmin, vmax)

    where
    % => almost always for width and padding;
    rem & em => almost always for font-size and margin;
    vh & vw => almost always for hero or (full-width) section;

 - Use rem for global, consistent spacing.
 - Use em for component‑internal spacing that should scale with the component’s font size.

## Common Pitfalls & Pro Tips
* Don't over-use "vw" for typography - it can become too small or large. Combine with clamp () for safe fluid typography:
    font-size: clamp(1rem, 4vw, 3rem);

* Always set box-sizing: border-box - it makes width include padding and border, so your percentages behave predictably. 

