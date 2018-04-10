var heightyonatan = 170;
var heightadi = 195;
var ageyonatan = 36;
var ageadi = 25;
var ageprayitno = 25;
var heightprayitno = 165;
function hitungskor(tinggibadan,umur)
{
    var winner = tinggibadan + 5 * umur;
    return winner;
}
var nilaiyonatan=hitungskor(heightyonatan,ageyonatan);
var nilaiadi=hitungskor(heightadi,ageadi);
var nilaiprayitno=hitungskor(heightprayitno,ageprayitno);
console.log(nilaiyonatan);
console.log(nilaiadi);
console.log(nilaiprayitno);
if(nilaiadi>nilaiyonatan && nilaiadi>nilaiprayitno)
    console.log('Adi Menang Dengan Skor'+nilaiadi);
else if(nilaiprayitno>nilaiadi && nilaiprayitno>nilaiyonatan)
    console.log('Prayitno Menang Dengan Skor'+nilaiprayitno);
else
{
    console.log('Yonatan Menang Dengan Skor'+nilaiyonatan);
}