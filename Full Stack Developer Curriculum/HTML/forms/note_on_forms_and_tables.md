# Forms
 ### HTML Form Elements and Attributes
* form element: used to create an HTML form for user input.
* action attribute: used to specify the URL where the form data should be sent.
* method attribute: used to specify the HTTP method to use when sending the form data. The most common methods are GET and POST.
## How Do Forms, Labels, and Inputs Work in HTML?
-The form element in HTML is used to gather information, such as names and email addresses.
<form action="url-goes-here">
  <!-- input elements go here -->
</form>
- The action attribute specifies where the form data will be sent upon submission. 
- To collect specific information, like names and email addresses, you would use the input element
- input elements are void elements and do not have closing tags. The type attribute defines the data type expected from the user.
<form action="">
  <label>
    Full Name:
    <input type="text" />
  </label>
</form>

- By nesting an input inside a label element, you create an implicit association between the label and the input field. 
- The term "implicit" refers to something that is understood or inferred without needing to be explicitly stated or defined with additional attributes or elements. 
- To explicitly associate a label with an input, you can use the for attribute. 

Here is an example of using the for attribute for an email address label.
<form action="">
  <label for="email"> Email Address: </label>
  <input type="email" id="email" />
</form>

-NB: When using an explicit association, the values for the for attribute and id need to be the same.

- ( 
    * The 'action' attribute is used to specify where the form data should be sent when the form is submitted.

    * The 'method' attribute is used to specify the HTTP method to use when sending the form data. The most common methods are GET and POST.

    * You can group related inputs together using the fieldset element.

    * When working with fieldset elements, it is common to use a caption to describe the group of inputs. You can use the legend element for this.
    <form action="/example-url">
=
        <fieldset>
            <legend>Personal Information</legend>
            <!-- inputs go inside here-->
        </fieldset>
    </form>

    * The for attribute on the label element should match the id attribute on the input element. This is known as an explicit association.
    * The name attribute is used to identify form data after it has been submitted to the server.

    * The value attribute is used to specify the value that will be sent to the server when the form is submitted.
)

## What Are the Different Types of Buttons, and When Should You Use Them?
- The button element is used to perform a particular action when it is activated.
<button>Start Game</button>
- Other examples of using the button element include submitting a form, showing a modal, or toggling a side menu open and closed. 
- The button element has a type attribute which controls the behavior of the button when it is activated
- Another possible value for the type attribute is the submit value
- The third possible value for the type attribute is the reset value.

- The third possible value for the type attribute is the reset value. Here is an example of a form element with reset and submit buttons.

- The input element also has a type attribute with the possible values of submit, reset, and button.

- The value attribute is used to show the button text.

### So, what is the difference between using the input and button elements?
- input elements are void elements, which means they cannot have child nodes, such as text, and can only have a start tag. 
- On the other hand, the button element offers more flexibility because you can nest text, images, and icons inside it.

## What Is Client-Side Form Validation in HTML Forms, and What Are Some Examples?
- When a user fills out a form on your website, it is important that they fill out all of the necessary information in the correct format. 
- HTML form controls, like inputs, have a lot of built-in validation that you can use to check for invalid data. 
- This will help ensure that the user fixes these mistakes before the information is submitted and processed by the server.

- The term "client-side" refers to everything that happens on the user's computer or device, like the part of a website or app you interact with directly. 
This includes the layout, design, and any interactive features.

- The term "server-side" refers to everything that happens on the server, the computer, or system, that hosts the website or app. 

- This includes processing data, running applications, and handling requests that come from the user's device.

- NB: While client-side validation is important, you also need server-side validation for added security. 
- Malicious users can bypass client-side checks, so robust server-side measures are essential.

- One common example of built-in form validation is to use the required attribute in inputs. 
- The required attribute specifies that the user needs to fill out that portion of the form before it gets submitted.
- Other forms of validation for email inputs are to use the minlength and maxlength attributes. 
- The minlength and maxlength attributes are used to set the minimum and maximum length in characters for the email input.

## What Are the Different Form States, and Why Are They Important?
- In HTML, form controls, like inputs, can be in different stages or conditions like a focused state, readonly state, or disabled state.

- The first state would be considered the default state
- The default state of an email address input is a blank input.
- When the user clicks on a form control or selects it with the keyboard's tab key, then that means it is in the focused state. 
- Another form state is the disabled state & This state shows users that an input cannot be focused or activated.
- Similar to the focused state, you can choose to add additional styles for the disabled state using CSS.
- Another type of form state is the readonly state

- NB: A key difference between the disabled state and readonly state is that readonly can be focused while the disabled state cannot.

-Understanding the different form states is important because they ensure a smooth user experience by providing clear feedback and guidance while handling errors.


## What Are HTML Tables Used For, and What Should They Not Be Used For?

- Sample table structure
<table>
  <thead>
    <tr>
      <th>The title of this table</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>First Row</th>
      <td>
        First Data Cell
      </td>
    </tr>
    <tr>
      <th>Second Row</th>
      <td>
        Second Data Cell
      </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>The footer of this table, which might contain date of publication, author credits, or other meta information.</th>
    </tr>
  </tfoot>
</table> 

- The data itself is always within a 'tr' – and within that tr element is a 'th' element with a header, and a 'td' element with data.

- Some websites will choose to use 'div's to build their own tables instead of using the more appropriate table element.

-While it is possible to display tabular data using generic div elements, it is still better to use the table element instead.

- Many years ago, developers might have used a table to position non-data elements on a webpage. This was never considered a best practice. 

- But you may encounter some codebases where tables are still used like this.

Nowadays, developers use CSS flexbox and grid to layout their designs


## What Is an HTML Validator, and How Can It Help You Debug Your Code?
An HTML validator is a tool that checks the validity of your HTML code against the standard HTML specifications. It helps you identify errors and warnings in your HTML code, ensuring your web pages are correctly structured and compliant with web standards.

Using an HTML validator benefits not only you and your future code reviews, but also anybody else going through your code, such as your teammates and open-source contributors.

The most widely accepted one is the w3.org markup validation service.

Another HTML validator that you can use is jsonformatter.org.

## How to Use the DOM Inspector and DevTools to Debug and Build Your Projects

- The process of finding and fixing these bugs is known as debugging.

- Two important tools to use would be the DOM inspector and developer tools.

- The DOM inspector allows you to inspect the HTML structure of the page you are on.

- The DOM stands for Document Object Model. It is a tree-like structure that represents the elements on a page.

- Devtools: a set of web developer tools built directly into the browser that helps you debug, profile, and analyze web pages.

- The developer tools allow you to inspect the HTML, CSS, and JavaScript of the page you are on.

-  A 404 page is an error page that appears when a user tries to access a webpage that doesn't exist on the server.

### When you open developer tools in Google Chrome, you'll see a number of tabs. 
- Elements tab => This tab shows you the HTML structure of the page you are on.
- Console tab => This tab shows you any errors that might be occurring on the page.
