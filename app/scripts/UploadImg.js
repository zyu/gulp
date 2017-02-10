var Upimg = (function () {
    var Upimg = {};
    Upimg.imgUI = "";
    Upimg.formUI = "";
    Upimg.reSubmit = function () {
        $(Upimg.formUI).submit(function (event) {
            event.preventDefault();
            //grab all form data  
            //var formData = $(this).serialize();
            var formData = new FormData(this);
           
            $(this).ajaxSubmit({
                url: '/handler/UploadImage',
                type: 'POST', 
                success: Upimg.su,
                error: Upimg.er
            });

            return false;
        });
    };
    Upimg.su = function (data) {
        $(Upimg.imgUI).attr("src", "http://img1.51aika.com/" + data); 
        popupbox();
        alert('上传成功');
    };
    Upimg.er = function (data) {
        alert(data);
    };
    Upimg.loadUI = function () {
        popupbox();
    };
    Upimg.ajaxSumit = function () {
        $(Upimg.formUI).submit();
    }
    return Upimg;
}());
 
  