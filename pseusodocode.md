Simpan karakter pada variabel nama 
Simpan karakter pada variabel peran
Simpan number pada variabel tahunLahir 
Simpan number pada variabel umurSekarang
Simpan Math.floor(Math.pow(100, Math.random())) pada variabel kodeMonster
Simpan tahunLahir*Math.random() pada variabel playerHealth
Simpan tahunLahir*Math.random() pada variabel monsterHealth 

// Kondisional if-else
if nama sama dengan karakter kosong 
  maka perannya sama dengan kacung
end if 

if peran sama dengan ksatria 
  tuliskan Selamat datang didunia proxytia, + nama 
  tuliskan Kamu memilih peran sebagai  +  peran
    tuliskan Halo ksatria  + nama + , kamu dapat menyerang dengan senjatamu!
  else if peran sama dengan tabib 
    tuliskan  Selamat datang didunia proxytia, + nama 
    tuliskan  Kamu memilih peran sebagai  +  peran
    tuliskan  Halo tabib  + nama +  , kamu akan membantu temanmu yang terluka
  else if peran sama dengan penyihir 
    tuliskan Selamat datang didunia proxytia, + nama 
    tuliskan Kamu memilih peran sebagai  +  peran
    tuliskan Halo penyihir  +nama + , Ciptakan keajaiban yang membantu kemenanganmu! 
  else if peran sama dengan kacung 
    tulisan selamat datang di dunia proxytia
    tuliskan kamu di takdirkan untuk menjadi kacung , babu semua player di game ini
  else 
    tuliskan Halo + nama +  pilih peranmu untuk memulai game!
end if 

tuliskan untuk membantumu melawan monster pilih senjata sesuai peranmu
tuliskan karakter kosong 
tuliskan Hp player awal =  + playerHealth
tuliskan Hp monster awal =  + monsterHealth
tusliskan karakter kosong


// kondisi function and array
tuliskan sebuah function dengan nama menyerang dengan parameter senjata 
  bikin array dengan nama item didalamnya terdapat value string pedang,buku dan tongkat
  if senjata sama dengan item index ke 0 dan peran yang di pilih merupakan ksatria 
    tuliskan kamu memilih senjata + parameter senjata
    playerHealth bertambah 500
    else if senjata sama dengan item index ke 1 dan peran yang di pilih merupakan tabib 
      tuliskan kamu memilih senjata + parameter senjata
      playerHealth bertambah 500
    else if senjata sama dengan index ke 2 dan peran yang dipilih merupakan penyihir  
      tuliskan kamu memilih senjata + parameter senjata 
      playerHealth betambah 500
    else 
      tuliskan kamu tidak memakai senjata yang sesuai !!!
      playerHealth dikurangi 1000
  end if 
      
// pilih senjatanya
tuliskan menyerang dan masukan parameter kedalamnya berupa item (pedang,buku atau pedang)
tuliskan hp player saat ini = playerHealth
tuliskan karakter kosong
tuliskan bertemu monster !!!!


//Looping For/while
for setiap pertambahan 1 pada index dari 0 sampai 50
    if index habis dibagis dengan umurSekarang dan index tidak habis dibagi kodeMonster
      tuliskan peran + nama + menyerang monster !
      monsterHealth = monsterHealth - umurSekarang
      else if index habis dibagi dengan kodeMonster dan index tidak habis dibagi umurSekarang 
      tuliskan monster menyerang + peran + nama 
      playerHealth = playerHealth - kodeMonster
      else if index habis di bagi dengan umurSekarang dan index habis dibagi dengan kodeMonster
      tuliskan health keduanya bertambah 
      playerHealth = playerHealth + kodeMonster
      monsterHealth = monsterHealth + umurSekarang
    end if
and for     

tuliskan hp player sekarang = + playerHealth
tuliskan hp monster sekrang = + monsterHealth
if player health > monsterHealth
  tuliskan selamat + peran + nama + memenagkan pertarungan 
  else 
  tuliskan sayang sekali + peran + nama + dikalahkan monster 
end if 


  
  




















