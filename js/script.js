function pressed(e) {
    // Has the enter key been pressed?
    if ( (window.event ? event.keyCode : e.which) == 13 && !e.shiftKey) { 
        // If it has been so, manually submit the <form>
        document.forms[0].submit();
        document.forms[0].reset();
    }
}