(function(){
    "use strict";

    [].forEach.call(document.querySelectorAll('collapsible'), function(module){
        [].forEach.call(module.querySelectorAll('dt'), function(header){
            header.onclick = function() {
                header.classList.toggle('open');
                header.nextSibling.classList.toggle('open');
            };
        });
    });
})();
