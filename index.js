function cong(so1, so2) {
    return so1 + so2;
}

function tru(so1, so2) {
    return so1 - so2;
}

function nhan(so1, so2) {
    return so1 * so2;
}

function chia(so1, so2) {
    return so1 / so2;
}

function tinhToan(_pheptinh, _so1, _so2) {
    var result;
    var pheptinh_obj = document.querySelector('input[name="pheptinh"]:checked');
    var so1 = parseFloat(document.getElementById(_so1).value);
    var so2 = parseFloat(document.getElementById(_so2).value);

    document.getElementById("ketqua").value="";

    if (pheptinh_obj == null) {
        document.getElementById("thongbao").style.color = "red";
        document.getElementById("thongbao").textContent = "Chưa chọn phép tính";
        return;
    }
    var pheptinh = pheptinh_obj.value;

    if (isNaN(so1) || isNaN(so2)) {
        document.getElementById("thongbao").style.color = "red";
        document.getElementById("thongbao").textContent = "Số nhập vào không hợp lệ";
        return;
    }

    document.getElementById("thongbao").style.color = "green";
    document.getElementById("thongbao").textContent = "Đã tính ra kết quả";


    switch (pheptinh) {
        case "cong":
            result = cong(so1, so2);
            break;

        case "tru":
            result = tru(so1, so2);
            break;

        case "nhan":
            result = nhan(so1, so2);
            break;

        case "chia":
            if (so2 != 0) {
                result = chia(so1, so2);
            }
            else {
                document.getElementById("thongbao").style.color = "red";
                document.getElementById("thongbao").textContent = "Không được chia cho 0";
                result = "error";
            }
            break;
        default:
            break;
    }
    document.getElementById("ketqua").value = result;
}

function kiemTraSoHang(_sohang) {
    var so = document.getElementById(_sohang).value;
    if (isNaN(so)) {
        if (_sohang == "so1") {
            var name = "Số thứ nhất";
        }

        if (_sohang == "so2") {
            var name = "Số thứ hai";
        }

        document.getElementById("thongbao").style.color = "red";
        document.getElementById("thongbao").textContent = "Giá trị nhập ở ô " + name + " không phải là số";
    }
    else {
        document.getElementById("thongbao").textContent = "";
    }
}