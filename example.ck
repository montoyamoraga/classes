//Maquina de ritmos, version 1.0
// por programador con ritmo, 31 de diciembre 1999

//SndBufs para bombo (kick, bass drum) y caja (snare)
//(1) SndBuf a mezclador Gain master y a dac
SndBuf kick => Gain master => dac;
//(2) Otro sndBuf al mezclador Gain master
SndBuf snare => master;

//carga algunos archivos
//(3) Carga tus archivos de sonido
me.dir() + "/audio/kick_01.wav" => kick.read;
me.dir() + "/audio/snare_01.wav" => snare.read;

while(true)
{
  //En el tiempo 1, toca solo el bombo
  //(4) En los tiempos impares, solo toca el bombo
  0 => kick.pos;
  0.6 :: second => now;

  //Toca ambos tambores en el tiempo 2
  //(5) En cada tiempo par, toca tanto el bombo como la caja
  0 => kick.pos;
  0 => snare.pos;
  0.6 :: second => now;
}

