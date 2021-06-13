$(document).ready(function(){
    // Draggable
    $( "#draggable" ).draggable();
    // Droppable
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
    // resizable
    $( "#resizable" ).resizable();
    $( "#accordion" ).accordion({
      collapsible: true
    });
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL"
   
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
    $( "#datepicker" ).datepicker();
    $( "#dialog" ).dialog();
    $( "#menu" ).menu();

    $( "#selectable" ).selectable();
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).click( function( event ) {
      event.preventDefault();
    } );
    $( "input" ).checkboxradio();
   














})