// all your JS code

var mixedMode = {
  name: "htmlmixed",
  scriptTypes: [{matches: /\/x-handlebars-template|\/x-mustache/i,
                 mode: null},
                {matches: /(text|application)\/(x-)?vb(a|script)/i,
                 mode: "vbscript"}]
};

function editor(id) {
  CodeMirror.fromTextArea(document.getElementById(id), {
    mode:  mixedMode,
    keyMap: "sublime",
    readOnly: true,
    lineNumbers: true,
    theme: "monokai"
  });
}

function editorCSS(id) {
  CodeMirror.fromTextArea(document.getElementById(id), {
    mode:  'text/css',
    keyMap: "sublime",
    readOnly: true,
    lineNumbers: true,
    theme: "monokai"
  });
}

function editorSCSS(id) {
  CodeMirror.fromTextArea(document.getElementById(id), {
    mode:  "text/x-scss",
    keyMap: "sublime",
    readOnly: true,
    lineNumbers: true,
    theme: "monokai"
  });
}

function killCM(id) {
    /*CodeMirror.fromTextArea(id.toTextArea());
*/
}


window.onload = function() {

        editor('grid');
        editor('alert');
        editor('botoes');
        editor('botoes1');
        editor('cards');
        editor('carousel');
        editor('forms');
        editor('forms1');
        editor('forms2');
        editor('forms3');
        editor('forms4');
        editor('forms5');
        editor('modal');
        editor('navbars');
        editor('navbars1');
        editor('popovers');
        editor('tooltips');
        editor('image');
        editor('image2');
        editorCSS('espac');
        editor('cores');


    };


    /*$('.modal').on('hidden.bs.modal', function () {
      killCM('cards');
    })*/
