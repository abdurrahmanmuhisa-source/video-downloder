function download(){
    const url=document.querySelector("input").value;

    if(url==""){
        alert("Masukkan URL terlebih dahulu!");
        return;
    }

    alert("Contoh tampilan. Backend belum dihubungkan.");
}
