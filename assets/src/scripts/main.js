/*

  Table of Contents
  -----

*/
(function(){
    "use strict";

    var data = [],
        html = '',
        slice = Array.prototype.slice,
        navigation = document.querySelectorAll('.navigation')[0];

    [].forEach.call(document.querySelectorAll('section'), function(section){
        data.push({
            'filename': section.dataset.filename,
            'h1': section.querySelectorAll('h1'),
            'h2': section.querySelectorAll('h2')
        });
    });

    html += '<ul>';

    data.forEach(function(obj){
        var h1 = slice.call(obj.h1),
            h2 = slice.call(obj.h2);
        
        h1.forEach(function(node) {
            html += '<li><a href="#' + node.id + '">' + node.innerHTML + '</a>';
        });

        if (h2.length > 0) {
            html += '<ul>';

            h2.forEach(function(node) {
                html += '<li><a href="#' + node.id + '">' + node.innerHTML + '</a></li>';
            });

            html += '</ul>';
        }

        html += '</li>';
    });

    html += '</ul>';

    navigation.innerHTML = html;

/*
      function toArray(obj) {
        var array = new Array(obj.length);
        for (var i = 0; i < obj.length; i++)
          array[i] = obj[i];
        return array;
      }

      function createAnchorElem (headingElem) {
        var elem = document.createElement('a');
        elem.href = '#' + headingElem.id;
        elem.innerHTML = headingElem.innerHTML;

        return elem;
      }

      function addAnchor (headingElem) {
        var id = headingElem.id;
        if (!id) { return; }

        var anchorElem = createAnchorElem(headingElem);
        headingElem.innerHTML = '';
        headingElem.appendChild(anchorElem);
      }

      var ToC = document.createElement('div');
      var sections = document.getElementsByTagName('section');
      sections = toArray(sections);

      var tocHtml = "<nav role='navigation' class='table-of-contents'><strong>Table of Contents</strong><ul>";

      tocHtml += sections.map(function(section) {
        var headerOne = section.getElementsByTagName('h1');
        headerOne = toArray(headerOne);

        var sectionHtml = "<li><a href='#" + headerOne[0].id + "'>" + headerOne[0].innerHTML + "</a>";
        addAnchor(headerOne[0]);

        var headersTwo = section.getElementsByTagName('h2');
        headersTwo = toArray(headersTwo);

        if (headersTwo.length > 0) {
          sectionHtml += "<ul>";
          sectionHtml += headersTwo.map(function(h2) {
            addAnchor(h2);
            return "<li><a href='#" + h2.id + "'>" + h2.innerHTML + "</a>";;
          }).join('\n');
          sectionHtml += "</ul>";
        }

        sectionHtml += "</li>";
        return sectionHtml;
      }).join('\n');

      ToC.id = 'table-of-contents';
      ToC.innerHTML = tocHtml;

      var tocPosition = document.querySelectorAll('nav')[0];
      tocPosition.appendChild(ToC);*/
})();
