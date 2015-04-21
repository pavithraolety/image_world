$(document).ready(function(){

    function initBestClicks(){
        bindPageEvents();
    }

   


    function bindPageEvents(){
        $('#img_1').on('click', function(event){
            $('#img_1_body').toggle(10);
        });

        $('#js_accounts').on('change', function(event){
            selectedReportPack = $('#js_accounts option:selected').val();
            getAccounts(selectedReportPack);
        })
        $('#rep_accounts').on('change', function(event){
            selectedAccountCode = $('#rep_accounts option:selected').val();
            $('#js_generate_btn').prop('disabled', false);
        })
    }


    initBestClicks();

})
