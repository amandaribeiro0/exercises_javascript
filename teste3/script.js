// molde para objeto
class aluno{
    _nome;
    _matricula;
    turno;
    situacao;
    _rg; 

        constructor(nome, matricula, turno, situacao, rg){
            this._nome = nome
            this._matricula = matricula
            this.turno = turno
            this.situacao = situacao
            this._rg = rg 
        }
};



class notas {
   aluno;
   media=0;
   qtdNotas =0;
    somanotas = 0;
   //metodo
   mediaGeral(nota){
       this.qtdNotas +=1
       this.somanotas = this.somanotas + nota
        this.media = (this.somanotas)/this.qtdNotas
   }
};

// add o molde da class para o object
var aluno1 = new aluno('amanda','202020','matutino','cursando','539217372');
var notaAluno1 = new notas();

notaAluno1.mediaGeral(100)
notaAluno1.mediaGeral(50)
notaAluno1.mediaGeral(25)
notaAluno1.mediaGeral(25)

notaAluno1.aluno = aluno1

console.log(notaAluno1.media)