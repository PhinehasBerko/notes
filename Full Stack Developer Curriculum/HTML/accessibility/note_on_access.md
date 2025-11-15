# What Is Accessibility?
Accessibility involves creating products and services that everyone can use. 

- In the context of web development, it's making websites that everyone can understand and interact with, including people with visual, auditory, motor, and cognitive disabilities.

## Some examples of disabilities that can impact users' online experience include:

Blindness.
Low vision.
Color blindness.
Deafness.
Difficulty using keyboards, mice, or touchscreens.
Attention disorders
Memory issues.
Difficulty speaking or understanding spoken language.
Sensitivity to flashing lights.
...just a few;

### To help you create accessible websites, the World Wide Web Consortium, known as W3C, developed a set of international standards that you can follow to make your websites more accessible and easier to use for people with disabilities.
These standards are known as "The Web Content Accessibility Guidelines" (WCAG).

These guidelines are designed with four core principles in mind, known as POUR.

* #### P stands for Perceivable. 
Users must be able to perceive the information that you are presenting. For example, you can provide alternative text for images, so users who access your website with a screen reader can understand them.
* #### O stands for Operable. 
Users must be able to interact with the user interface. For example, you can make sure that all functionality is accessible through the keyboard too, not just the mouse.
* #### U stands for Understandable. 
Users must be able to understand the information. For example, you can avoid complex sentences and use simple language as much as possible.
* #### R stands for Robust. 
A wide range of browsers and other tools, including assistive technologies, must be able to interpret the content.

Using semantic HTML is very helpful for making your website compatible with different browsers and assistive technologies.

NB: If your content doesn't follow any one of these core principles, not everyone will be able to use your website.

#### Accessibility is essential for web development. By developing with inclusivity in mind, you can ensure that everyone can access and engage with your content, promote equality and create a better user experience for everyone around the world.

Accessibility is essential for web development. By developing with inclusivity in mind, you can ensure that everyone can access and engage with your content, promote equality and create a better user experience for everyone around the world.

## What Are Screen Readers, and Who Uses Them?

- Screen readers are assistive technology programs that help blind and visually impaired people use computers and mobile devices.

- Screen readers are not just tools for the blind and visually impaired to access computers and mobile devices.

- They empower these individuals to access education, work opportunities, and social media. This ensures digital inclusion and enhances their ability to participate fully in society.

There's a common misconception that screen readers are text-to-speech devices.

However, text-to-speech is just one of the features of a screen reader. Some screen readers even render the text to braille output instead of speech.

Apart from text-to-speech and braille output, other notable features of screen readers are navigation aids and web browsing assistance.

Screen reader programs are also not only made for the blind and visually impaired. Dyslexic individuals and people with cognitive disabilities also use screen readers. All the popular operating systems out there have screen readers built into them.

macOS and iOS both have VoiceOver built-in. You can turn it on on your computer by pressing CMD + F5. You can access it on iPhones through Settings.

Screen reader programs are also not only made for the blind and visually impaired. Dyslexic individuals and people with cognitive disabilities also use screen readers. All the popular operating systems out there have screen readers built into them.

macOS and iOS both have VoiceOver built-in. You can turn it on on your computer by pressing CMD + F5. You can access it on iPhones through Settings.

Windows computers have Narrator built-in. You can turn it on by pressing WIN + CTRL + ENTER. NonVisual Desktop Access (NVDA) and Job Access With Speech (JAWS) are also available for Windows computers. NVDA is free and open-source, while JAWS is paid.

Linux has Orca for the desktop environment and Speakup for the Linux terminal.

Android phones have TalkBack built-in. You can turn it on by accessing Settings > Special Function > Accessibility > Talkback.

This demonstrates empathy and a commitment to inclusivity, ensuring that all users can benefit from their work.

## How Does Proper Heading Level Structure Affect Accessibility?
- Proper use of headings creates a visual hierarchy for users to navigate and understand your web page. 
- Using a logical heading hierarchy allows screen reader users to understand the structure of your content and navigate your content quickly. 
- Creating appropriate heading text that accurately describes the content that follows helps everyone find the information they need on your site.
#### NB:As an additional benefit, well-formed headings may also improve the SEO of your site.

###  How you can make your web projects friendly for people who use assistive technologies by using headings correctly.

-  Headings, ranging from h1 to h6, create a navigational structure for screen reader users.
- It is also necessary to make heading texts clear and descriptive.

### Here are some key practices to follow to use headings properly:
- Use headings in a hierarchy that reflects clear organization. 

<-- For example, the page title should be an h1, major sections should be introduced with h2 headings, subsections with h3 , and so on, down to h6.

- Don't skip from h1 to h3, or from h2 to h4, and so on.

- Use clear and descriptive text that summarizes the content that follows each heading.

- Don't use a heading in isolation – some content must follow the heading.

- Don't use a heading in isolation – some content must follow the heading.

- Use appropriate headings where necessary instead of formatting text to look like headings.

- Each page should have a single h1 element representing the main topic or title.

## What Are Best Practices for Tables and Accessibility?

### How you can create accessible tables that everyone can understand?
1. The first best practice that we will cover is using table caption. 
  - With the <caption> element, you can write the caption (or title) of a table, so users, especially those who use assistive technologies, can quickly understand the table's purpose and content

2. Now let's talk about row and column headers
  - Headers are special cells, typically found at the start of a row or column, that describe the type of data stored in the row or column. 
  - You can define a row or column header with the table header element, <th>

for cell width, it's recommended to avoid using fixed values. You should use relative values instead, like percentages. Also, try to avoid defining cell height. This will allow users to adjust the text size to fit their needs.

And finally, you should let the browser determine the table width whenever possible, to reduce the need for horizontal scrolling.

HTML tables are essential for presenting structured data in an accessible and understandable format. By following these accessibility guidelines, you can create tables that are easy to understand for everyone.

- NB: The scope attribute determines if a header is a row header or a column header.
- The scope attribute has four possible values
-  The two you will use most often are col for column and row for row.
<table>
    <caption> My Table caption </caption>
    <thead>
    <!-- Inside the thead lies the table header<th> -->
        <tr>
            <th>My</th>
            <th>Table</th>
            <th>Caption</>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="col">Br</th>
            <td scope="row">1</td>
            <td>2</td>
        </tr>
    </tbody>
</table>

##  Why Is It Important for Inputs to Have an Associated Label?
- Labels on input fields might seem like small details, but they play a crucial role in making forms easier for everyone to use.

- Labels help people with disabilities, make forms more user-friendly for everyone, and ultimately improve form conversion rates.

- Screen readers often rely on labels to describe the purpose of input fields.

- The for attribute of the label element is associated with the id of the input element. This connection allows screen readers to announce the label when the input is in a focused state, allowing screen reader users to understand the purpose of the input.

- Associating labels with all input fields also benefits SEO.

- With proper labels, search engines will understand the page content better, leading to a positive impact on the page search rankings.

- But it is important to understand that you're making content for humans, not search engines. So, you should make sure the labels are as clear and descriptive as possible.


## What Is the Purpose of WAI-ARIA, and How Does It Work?
- WAI-ARIA stands for Web Accessibility Initiative - Accessible Rich Internet Applications. 
  <> It's a specification that enhances accessibility for dynamic content and UI (User Interface) components.

- Note that WCAG and WAI-ARIA are not the same. WCAG provides general guidelines for web accessibility, while WAI-ARIA offers specific rules for making dynamic and interactive content accessible for users of assistive technologies.

- So, the primary purpose of WAI-ARIA is to improve accessibility for dynamic content and UI components that do not have native HTML equivalents.

- WAI-ARIA works by introducing a set of attributes you can add to HTML elements to provide additional semantic information. These attributes are categorized into roles, states, and properties.

- ARIA role defines the purpose of an element within a website or web app.