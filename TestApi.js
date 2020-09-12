const googleSheets = require('./GoogleApi')
const TWRegistry = require('./TWRegistry')
class TestApi{

    constructor(param){
        this._init()
        this._resposta=[];
    }

    _init(){
        let res = googleSheets.init()
        let index =1;
        let hasNext = true;
        let idTWColumn = 0
        let playerColumn = 1
        let attackColumn = 2
        let deffenseColumn = 3

        res.then(p=>{
            while(index <=492){
                if(p[index][idTWColumn] && p[index][playerColumn] && 
                    p[index][attackColumn] && p[index][idTWColumn] == undefined ){
                        hasNext = false;
                        console.log('entrou')
                } else {
                    console.log(index, p[index][idTWColumn],p[index][playerColumn],p[index][attackColumn],p[index][deffenseColumn])
                    this._resposta.push(new TWRegistry(p[index][idTWColumn],p[index][playerColumn],p[index][attackColumn],p[index][deffenseColumn]))
                    index++;
                    // console.log(p[index][playerColumn])
                    // console.log(p[index][attackColumn])
                    // console.log(p[index][deffenseColumn])
                }

            }
            // console.log(p[1][idTWColumn])
            // console.log(p[1][playerColumn])
            // console.log(p[1][attackColumn])
            // console.log(p[1][deffenseColumn])


        })
    }

    findByPlayer(param){
        return this._resposta.filter(p =>p.player.toLowerCase().includes(param.toLowerCase()))
    }
}

module.exports = TestApi
