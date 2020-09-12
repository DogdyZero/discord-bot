class TWRegistry{
	constructor(id,player,attack,deffense){
		this._id = id;
		this._player = player;
		this._attack = attack;
		this._deffense = deffense;
	}

	get id(){
		return this._id;
	}
	get player(){
		return this._player;
	}
	get attack(){
		return this._attack;
	}
	get deffense(){
		return this._deffense;
	}
}
module.exports = TWRegistry
