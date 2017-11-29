// game , melanjutkan proxytia

var nama ='reza';
var peran ='ksatria';
var tahunLahir = 1993 ;
var umurSekarang = 2017- tahunLahir;
var kodeMonster = Math.floor(Math.pow(100, Math.random()));
var playerHealth = tahunLahir*Math.random();
var monsterHealth = tahunLahir*Math.random();


// Kondisional if-else 
if(nama===''){
  peran='kacung';
}
if (peran=='ksatria'){
  console.log('Selamat datang didunia proxytia, '+ nama );
  console.log('Kamu memilih peran sebagai ' + peran)
  console.log('Halo ksatria '+ nama + ', kamu dapat menyerang dengan senjatamu!');
} else if(peran=='tabib'){
  console.log('Selamat datang didunia proxytia,'+ nama);
    console.log('Kamu memilih peran sebagai ' + peran)
  console.log('Halo tabib '+ nama + ', kamu akan membantu temanmu yang terluka');
} else if(peran =='penyihir'){
  console.log('selamat datang didunia proxytia,'+ nama);
  console.log('Kamu memilih peran sebagai ' + peran)
  console.log('Halo penyihir '+nama + ', Ciptakan keajaiban yang membantu kemenanganmu! ');
} else if (peran=='kacung'){
  console.log('selamat datang di dunia proxytia');
  console.log('kamu di takdirkan untuk menjadi kacung , babu semua player di game ini'); 
} else{
  console.log('Halo '+nama+ ' pilih peranmu untuk memulai game!');
}
console.log ('untuk membantumu melawan monster pilih senjata sesuai peranmu');
console.log('')
console.log('Hp player awal = ' + playerHealth);
console.log('Hp monster awal = '+ monsterHealth);
console.log('');

// kondisi function and array
function menyerang (senjata){
  item = ['pedang','buku','tongkat'];
  if(senjata == item[0] && peran === 'ksatria' ){
      console.log('kamu memilih senjata ' + senjata);
      playerHealth += 500;
      }
      else if (senjata == item[1] && peran=='tabib'){
      console.log('kamu memilih senjata ' + senjata);
      playerHealth += 500;
      } 
      else if (senjata == item[2] && peran == 'penyihir'){
      console.log('kamu memilih senjata ' + senjata);
      playerHealth += 500;
      } 
      else {
      console.log('kamu tidak memakai senjata yang sesuai!!');  
      playerHealth -= 1000;
      }
}
// pilih senjatanya 
menyerang ('pedang');
console.log('Hp player saat ini = '+ playerHealth);

console.log('');
console.log('bertemu monster !!!');

//Looping For/while
  for (var i=0 ;i <= 50 ; i++){
    if(i%umurSekarang===0 && i%kodeMonster!==0){
      console.log(peran+' '+nama+' menyerang monster!');
      monsterHealth= monsterHealth - umurSekarang ;
      } else if(i%kodeMonster===0 && i%umurSekarang!==0){
      console.log('Monster menyerang '+ peran+' '+nama+'!');
      playerHealth = playerHealth - kodeMonster;
      }else if (i%umurSekarang===0 && i%kodeMonster===0){
      console.log('Health keduanya bertambah');
      playerHealth = playerHealth + kodeMonster;
      monsterHealt = monsterHealth + umurSekarang;
      } 
    }

console.log('hp player sekarang = '+ playerHealth);
console.log('Hp monster sekarang = '+ monsterHealth);
  if (playerHealth > monsterHealth){
    console.log ('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
    } else {
    console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');
  }
  
  




















