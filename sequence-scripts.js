		<script defer>
/****************************** 
    RECENT TOPICS
*******************************/
$("#recent-topics").appendTo("#recentPostsTopics");
$(document).ready(function(){

/****************************** 
    TOGGLE COLOR MODE
    By Timelapse
*******************************/
var button = document.getElementById("toggleColor");
var htmlElement = document.getElementsByTagName("html")[0];

/** 1. Determine the icon based on the color scheme chosen **/
function modeSelect() {
    var iconElement = button.querySelector("i");

    if (htmlElement.classList.contains("lightMode")) {
        iconElement.textContent = 'dark_mode';
        localStorage.setItem("mode", "lightMode");
    } else {
        iconElement.textContent = 'light_mode';
        localStorage.setItem("mode", "darkMode");
    }
}

/** 2. Select the last color scheme chosen by the user or default to dark mode **/
if (typeof Storage !== "undefined" && localStorage.getItem("mode") !== null) {
    htmlElement.classList = localStorage.getItem("mode");
    modeSelect();
} else {
    htmlElement.classList = "lightMode";
    modeSelect();
}

/** 3. Toggle between Light & Dark Mode **/
button.addEventListener("click", function() {
    if (htmlElement.classList.contains("lightMode")) {
        htmlElement.classList.remove("lightMode");
        htmlElement.classList.add("darkMode");
        modeSelect();
    } else {
        htmlElement.classList.add("lightMode");
        htmlElement.classList.remove("darkMode");
        modeSelect();
    }
});

		});

/****************************** 
    ADDING ELEMENTS
*******************************/
$(document).ready(function(){$(".topic-title").wrapInner("<b></b>"),$(".maintitle").wrapInner("<h2 class='gradient'></h2>"),$(".pformstrip").wrapInner("<pformwrap></pformwrap>"),$("#recent-topics").appendTo("#recent-topics-clip"),$(".postdetails b").addClass("gradient")}),buttonsName=function(e){var t=$(".cat.star-tab input:radio"),n=$(".cat.star-tab input:radio:checked"),o;"prev"==e?o=t.index(n)-1:o=t.index(n)+1,o>=t.size()&&(o=0),t.eq(o).click(),!1};$(".postdetails").html(function(e,t){return t.replace(",","")});


/****************************** 
    FORUM ROW TAB TRANSITIONS
*******************************/
document.addEventListener('DOMContentLoaded', function () {
  const starTabContainer = document.querySelector('.star-tab');

  if (starTabContainer) {
    const radioButtons = starTabContainer.querySelectorAll('.cat-3 input[type="radio"]');
    const leftColumn = starTabContainer.querySelector('.sq-rc-slide');
    const rightColumn = starTabContainer.querySelector('.forum-tabstyle .star-pics-inner');
    const starButtons = starTabContainer.querySelectorAll('.star-button');
    const totalTabs = radioButtons.length;

    // Calculate initial negative margin for the right column
    const initialRightMargin = -665 * (totalTabs - 1);

    // Set initial state
    leftColumn.style.marginTop = '0';
    rightColumn.style.marginTop = `${initialRightMargin}px`;

    // Generate a random 2-digit number
    const getRandomNumber = () => Math.floor(Math.random() * 90 + 10);

    // Apply random numbers to starcat and labelstarcat
    document.querySelectorAll('[id^="starcat"]').forEach(element => {
      const randomNum1 = getRandomNumber();
      const randomNum2 = getRandomNumber();
      const randomNum3 = getRandomNumber();
      element.id = `starcat-${randomNum1}-${randomNum2}-${randomNum3}`;
    });

    document.querySelectorAll('[id^="labelstarcat"]').forEach(element => {
      const randomNum1 = getRandomNumber();
      const randomNum2 = getRandomNumber();
      const randomNum3 = getRandomNumber();
      element.id = `labelstarcat-${randomNum1}-${randomNum2}-${randomNum3}`;
    });

    radioButtons.forEach((radioButton, index) => {
      radioButton.addEventListener('change', () => {
        const checkedTabIndex = index + 3;

        leftColumn.style.marginTop = `-${665 * (checkedTabIndex - 3)}px`;
        rightColumn.style.marginTop = `${initialRightMargin + 665 * (checkedTabIndex - 3)}px`;

        // Hide/show first and last star-buttons
        starButtons[0].style.display = checkedTabIndex === 3 ? 'none' : 'flex';
        starButtons[starButtons.length - 1].style.display = checkedTabIndex === totalTabs + 2 ? 'none' : 'flex';
      });
    });

    // Initial hiding of the first star-button
    starButtons[0].style.display = 'none';
  }
});

/****************************** 
    FORUM ROW ARROWS
*******************************/

$(document).ready(function() {const e=$(".cat-3.star-tab"),t=$("<div class='star-button-hold'></div>"),n=$("<div class='star-button' onclick=\"buttonsName('prev');\"><i class='material-symbols-outlined'>navigate_before</i></div>"),o=$("<div class='star-button' onclick=\"buttonsName('next');\"><i class='material-symbols-outlined'>navigate_next</i></div>");t.append(n,o),e.append(t)});


/****************************** 
	SUBFORUM DROPDOWN
*******************************/
$('.subforums:not(:empty)').append('<select><option>Subforums</option></select>');$('.subforums a.tooltip').each(function() {var $t = $(this);$t.siblings('select').append('<option href="' + $t.attr('href') + '">' + $t.text() + '</option>');$t.remove();});$(document).on('change', '.subforums select', function() {window.location = $('option:selected', this).attr('href')});


/****************************** 
POSTING PAGE - ACTIVEUSERSTRIP
*******************************/
$("#firstWord").html(function(){var t=$(this).text().trim().split(" "),r=t.shift();return(t.length>0?"<b>"+r+"</b> ":r)+t.join(" ")}),$(".activeuserstrip").html(function(t,r){return r.replace("topic","topic<p>")}),$("body#SF .darkrow2").html(function(t,r){return r.replace("topics","topics<p>")}),$("body#SF .darkrow2").html(function(t,r){return r.replace("forum","forum<p>")}),$(".activeuserstrip").html(function(t,r){return r.replace(" | ","<b>♡</b>").replace(" | ","<b>♥</b>")});

/****************************** 
ADD .GRADIENT
*******************************/
function addGradientClass(e){let t=window.getComputedStyle(e),a=t.color,d=t.textShadow;(a.includes("rgb(var(--gbg1))")||a.includes("rgb(var(--gbg2))"))&&"none"!==d&&e.classList.add("gradient")}const elementsToCheck=document.querySelectorAll(".checkGradient");elementsToCheck.forEach(e=>{addGradientClass(e)});


/****************************** 
RESIZABLE TEXT
*******************************/
function changeTextSize(e){let t=localStorage.getItem("textSize")||"16";t=parseFloat(t);let i=t+e;document.body.style.fontSize=i+"px";localStorage.setItem("textSize",i)}window.onload=function(){let e=localStorage.getItem("textSize");e&&(document.body.style.fontSize=e+"px")};


/****************************** 
UCP/TABLE STYLING
*******************************/
$(document).ready(function() {
    $("#ucpmenu").closest("table").attr("id", "ucptable");
    $("#modcp-menu").closest("table").attr("id", "modcp-table");
    $("form[name='sForm'] .tableborder:first-child").attr("id", "search-keywords");
    $("form[name='sForm'] .tableborder:last-child").attr("id", "search-options");
    $(".act-rep .maintitle:contains(Rep)").parent().attr("id", "reputation");
    $(".act-usergroups .maintitle:contains(List of Usergroups)").parent().attr("id", "usergroups");
    $(".act-usergroups .maintitle:contains(Create a usergroup)").parent().attr("id", "usergroups");
    $(".act-usergroups .maintitle:contains(Member List)").parent().attr("id", "usergroups");
    $(".act-usergroups .maintitle:contains(Editing Group)").parent().attr("id", "usergroups");
    $("#usergroups").prev().prev().attr("id", "usergroups-manage");
    $(".act-daffiliates table[style='width:100%']").attr("id", "affcp-table");
    $("#affiliates-table > tbody > tr > td:first-child").attr("id", "affcp-menu");
    $("#affiliates-table > tbody > tr > td:last-child").attr("id", "affcp-content");
    $(".act-ST #innerwrapper > table:first-of-type").attr("id", "topic-actions-top");
    $("a:contains(Topic Options)").closest("table").attr("id", "topic-actions-bottom");
});
</script>




<script>
/****************************** 
MEMBER GROUP COLORS
*******************************/
    // Select all span elements with class starting with 'group-'
    const spans = document.querySelectorAll('span[class^="group-"]');

    // Loop through each span element
    spans.forEach(span => {
        // Get the parent <a> element
        const parentAnchor = span.parentNode;

        // Get all classes of the span element
        const spanClasses = span.className.split(' ');

        // Loop through each class of the span element
        spanClasses.forEach(className => {
            // Check if the class starts with 'group-'
            if (className.startsWith('group-')) {
                // Add the class to the parent <a> element
                parentAnchor.classList.add(className);

                // Remove the class from the span element
                span.classList.remove(className);
            }
        });
    });
</script>

<script>
/****************************** 
PLACEHOLDER IMAGES
*******************************/
    // Get all elements with the class "replaceable-img"
    var replaceableImages = document.querySelectorAll('.replaceable-img');

    // Loop through each replaceable image
    replaceableImages.forEach(function(image) {
        // Check if the src attribute contains "<i>No Information</i>"
        if (image.src.includes("<i>No Information</i>")) {
            // Replace the image source with your desired image URL
            image.src = "https://placehold.co/100";
        }
    });
</script>