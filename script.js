var tanya = true;
while(tanya){
    //Kyta yang main
    var pemain = prompt('Pilih : Batu , Kertas , Gunting');

    //komputer yang main
    var komp = Math.random();
    if(komp<0.34){
        komp = 'Batu';
    }else if(komp >= 0.34 && komp < 0.67){
        komp = 'Kertas';
    }else{
        komp = 'Gunting';
    }

    //Rules
    var hasil = '';
    if(pemain==komp){
        hasil = 'Seri!';
    }else if(pemain=='Gunting'){
        hasil = (komp == 'Kertas') ? ' Menang! ' : ' Kalah! ';
    }else if(pemain=='Kertas'){
        hasil = (komp == 'Batu') ? ' Menang! ' : ' Kalah! ';
    }else if(pemain=='Batu'){
        hasil = (komp == 'Gunting') ? ' Menang! ' : ' Kalah! ';
    }else{
        hasil = 'Memasukkan Pilihan Yang Salah!'
    }

    // hasilnya
    alert('Kamu Memilih : ' + pemain + ' dan komputer Memilih : ' + komp);
    alert('Maka Hasilnya : ' + hasil);

    tanya = confirm('Main Lagi?');
}

alert('Terimakasih Sudah Bermain!');