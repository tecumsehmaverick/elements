/*

  Table of Contents
  -----

*/
(function(){
    "use strict";

    var html = '', level = 0,
        navigation = document.createElement('nav'),
        // The placeholder can be element, like `document.body` for instance
        placeholder = document.getElementsByClassName('navigation')[0];

    [].forEach.call(document.querySelectorAll('h1, h2, h3, h4, h5, h6'), function(header){
        if (header.id && header.id !== 'undefined') {
            /*
                Build Navigation markup
            */
            var current = header.tagName.substring(1);

            if (current > level) {
                html += '<ul class="level-' + current + '">';
            } else if (current === level) {
                html += '</li>';
            } else {
                html += '</li></ul></li>';
            }
            html += '<li class="level-' + current + '"><a href="#' + header.id + '">' + header.innerText + '</a>';
            level = current;

            /*
                Add anchor to all header with proper id
            */
            var anchor = document.createElement('a');

            anchor.href = '#' + header.id;
            anchor.innerHTML = header.innerHTML;
            header.innerHTML = '';
            header.appendChild(anchor);
        }
    });

    html += '</li></ul>';
    navigation.innerHTML = html;
    // This appends the navigation in the placeholder
    placeholder.insertBefore(navigation,placeholder.firstChild);
})();
