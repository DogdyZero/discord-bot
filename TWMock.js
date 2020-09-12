const TWRegistry =require('./TWRegistry'); 
class TWMock{

    constructor(){
        this._list = this._registros()
    }
	_registros(){
        return [
            new TWRegistry('TW1','fiusix',100,100),
            new TWRegistry('TW2','fiusix',150,120),
            new TWRegistry('TW1','backbulatov',100,100),
            new TWRegistry('TW2','backbulatov',150,120),
            new TWRegistry('TW1','dogdy',10,400),
            new TWRegistry('TW2','dogdy',20,300),
        ]
    }

    getByName(param){
        return this._list.filter(obj =>obj.player === param); 
    }
}
module.exports =TWMock;