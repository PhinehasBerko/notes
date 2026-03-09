# Lesson 2: Flexible Images & Media

## The Foundation of Responsive Image
The golden rule for any image or media element:

img {
  max-width: 100%;
  height: auto;
}

max-width: 100% ensures the image never exceeds its containing element's width.

height: auto maintains the image's natural aspect ratio when the width changes.

## Handling Background Images
For CSS background images, use background-size:

background-size: cover – scales the image to cover the entire element (may crop).

background-size: contain – scales the image to fit entirely within the element (may leave empty space).

background-size: 50% auto – percentages relative to the element's size

## The object-fit Property for <img> and <video>

Sometimes you want an image to fill a fixed-size box without distorting. object-fit works like background-size but for replaced elements (images, videos).

* cover: image covers the box, cropping if necessary.

* contain: image fits entirely, possibly leaving letterboxing.

* fill: stretches image to fill box (may distort).

NB: scale-down: behaves like none or contain, whichever gives a smaller image.

## Responsive Images: Serving the Right File
You also need to send an image file that's appropriately sized for the device. 
There are two main approaches:
A: srcset for Resolution Switching
B: <picture> for Art Direction

### A: srcset for Resolution Switching

The srcset attribute lets you provide multiple image files, and the browser chooses the best one based on screen resolution and viewport width.
<img srcset="small.jpg 500w,
             medium.jpg 1000w,
             large.jpg 1500w"
     sizes="(max-width: 600px) 500px,
            (max-width: 1200px) 1000px,
            1500px"
     src="fallback.jpg"
     alt="Responsive image">

* 500w, 1000w tell the browser the actual width of each image file.

* sizes describes the width the image will occupy in the layout under different conditions.

* The browser combines this information to download the most appropriate file.

### Simpler: density descriptors (1x, 2x) for retina displays
<img srcset="image-1x.jpg 1x, image-2x.jpg 2x" src="image-1x.jpg" alt="...">

### B: <picture> for Art Direction

When you want to show a completely different image (different crop, different aspect ratio) at different screen sizes, use the <picture> element.

<picture>
  <source media="(max-width: 600px)" srcset="hero-crop-mobile.jpg">
  <source media="(max-width: 1200px)" srcset="hero-crop-tablet.jpg">
  <img src="hero-crop-desktop.jpg" alt="Hero image">
</picture>

The browser picks the first matching <source> and uses its srcset. Always include an <img> as a fallback.

## Modern Formats with Fallback

You can also use <picture> to serve next‑gen formats like WebP while providing a JPEG fallback:

<picture>
  <source type="image/webp" srcset="image.webp">
  <source type="image/jpeg" srcset="image.jpg">
  <img src="image.jpg" alt="...">
</picture>

## Responsive Video and Iframes

Embedded media (YouTube videos, maps) often come as fixed‑width iframes. To make them fluid, wrap them in a container with a padding trick, or use the modern aspect-ratio property.

## Performance Tips

* Compress images – Use tools like ImageOptim, Squoosh, or build‑time plugins.

* Use modern formats – WebP often gives 25–35% smaller files than JPEG.

* Lazy load – Add loading="lazy" to images below the fold.
<img src="image.jpg" width="800" height="600" alt="..." loading="lazy">

* Set dimensions – Include width and height attributes to prevent layout shifts (CLS). Even with ma x-width: 100%, the browser reserves the correct space if dimensions are set.


## Common Pitfalls to Avoid
* Forgetting height: auto – causes distorted images when width changes.

* Using width: 100% without max-width – can blow up tiny images.

* Not providing responsive images – mobile users download huge files.

* Ignoring aspect ratio when using object-fit: cover – the image may crop unexpectedly, so ensure the container's dimensions match the expected aspect ratio if cropping is undesirable.

* Overlooking the <picture> element for art direction – sometimes you need to show a different composition on mobile