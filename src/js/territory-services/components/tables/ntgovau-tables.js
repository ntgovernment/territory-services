$(document).ready(function() {    
    // Set 5 milliseconds timeout to catch dynamic tables produced from SQUIZ
    // Set default tables to bootstrap default table styles
    setTimeout(function(){
        
        $(".ntg-body table").each( function() {
            
            if (!$(this).hasClass("table")) {
                $(this).addClass("table").wrap('<div class="table-responsive">');
            } 
            
            else {
             //
            }

        });
        
    }, 5);
    
});