## Some helpful tips for General styling in CSS
body {
  width: 100%;
  height: 100vh;
  margin: 0;// helps to get rid of horizontal scroll-bars
  
}
 
- Remember that rem unit stands for root 'em', and is relative to the font size of the html element

<!-- stlying a checkbox -->

 <!-- 1st you target the checkbox element -->
 input[type="checkbox"] {
  disp
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background-color: rgb(167, 192, 192);
  border: 1px solid hsl(230, 60%, 60%);
  display: inline-grid;
  place-content: center;
  transition: all 0.2s ease;

 }

 <!-- 2nd you target the :checked pseudo-class -->
 input[type="checkbox"]:checked {
  background-color: #23fe56;
  color: #fff;
 }
 <!-- 3rd you create the  checkmark using the ::after pseudo-element -->
 input[type="checkbox"]::after {
  content: "✔️";
  transform: scale(0);
  transition: transform 0.2s ease;
 }

 <!-- 4th you target the :checked + ::after to show the checkmark when clicked-->
input[type="checkbox"]:checked::after {
  transform: scale(1);
 }