require.config({
  baseUrl: chrome.extension.getURL('/lib/')
});


var scripts = [
                'jquery',
                'codeblock/vendor/ace/ace',
                'codeblock/vendor/ace/theme-dawn',
                'codeblock/vendor/ace/mode-javascript',
                'codeblock/vendor/jquery-textrange',
                'codeblock/js/linked-editor'
              ];



require(scripts, function($) {
  setup_view();


  $('pre').on('click', function (e) {
    currRunCodeType = $(this).parent()[0].className.split(' ')[1].split('-')[1];; //#QUICK-HACK
    currRunCodeText = $(this).text().replace(/&nbsp;/g, ' '); //#QUICK-HACK
    currRunCodeParent = $(this).parent()[0]; //#QUICK-HACK

    var height = $(this).height();
    $(this).css('height', (height + 50) + 'px');
    $(this).codeblock();
    $(this).unbind();
  });
  
  $('.codeblock-console-run').on('click', function (e) {
    currRunCodeType = $(this).parent()[0].className.split(' ')[1].split('-')[1];;
    currRunCodeText = $(this).text().replace(/&nbsp;/g, ' ');
    currRunCodeParent = $(this).parent()[0];
  });
});