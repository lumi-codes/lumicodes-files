<script>
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
