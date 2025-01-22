let dang_dua_ong_tao = false;

$(document).ready(function () {
    const toast = $('#myToast');
    $('#CBox_MamCung').change(function () {
        if (this.checked) {
            $('.mam_cung').removeClass('d-none').addClass('d-inline');
        } else {
            $('.mam_cung').addClass('d-none').removeClass('d-inline');
        }
    });

    $('#CBox_ThapHuong').change(function () {
        if (this.checked) {
            $('.thap_huong').attr('src', './images/lu_huong.gif');
        } else {
            $('.thap_huong').attr('src', './images/lu_huong_static.png');
        }
    });

    $('#startDuaOngTao').click(function () {
        if (!$('#CBox_MamCung').prop('checked') || !$('#CBox_ThapHuong').prop('checked')) {
            showToast(toast, 'Vui lòng chọn đầy đủ mâm cúng và thắp hương!', 'danger', 3000);
            return;
        }

        dang_dua_ong_tao = true;
        $("#startDuaOngTao").attr('disabled', 'disabled');
        showToast(toast, 'Đang đưa ông táo về trời...', 'info');

        const callbackFinish = () => {
            hideToast(toast);
            showToast(toast, 'Đã đưa ông táo về trời thành công!', 'success', 3000);
            $("#startDuaOngTao").removeAttr('disabled');
            dang_dua_ong_tao = false;
        }

        $('.ong_tao').animate({
            left: '100%',
            top: '0',
            opacity: 0
        }, 7000, callbackFinish);
    });

    $('#resetDuaOngTao').click(function () {
        if (dang_dua_ong_tao) {
            showToast('Vui lòng chờ đợi quá trình đưa ông táo về trời hoàn tất!', 'warning', 3000);
            return;
        }

        $('.ong_tao').attr('style', '');
    });
});