var noAngkot = 1;
var jmlAngkot = 10;
var angkotBeroperasi = 6;
while(noAngkot <= angkotBeroperasi){
    console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik.');
    noAngkot++;
}

for(noAngkot > angkotBeroperasi; noAngkot <= jmlAngkot; noAngkot++){
    console.log('Angkot no. ' + noAngkot + ' sedang tidak beroperasi');
}