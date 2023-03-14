class Player{
    constructor(nickName){
        this.nickName = nickName;
        this._scores = [];
    }

    addScore(num){
        if(!isNaN(parseFloat(num)) && isFinite(num)){
            this._scores.push(Number(num));
        }
        return(this);
    }

    get scoreCount(){
        return this._scores.length;
    }

    get highestScore(){
        return this._scores.sort((a, b) => b-a)[0];
    }

    get topFiveScore(){
        return this._scores.sort((a, b) => b-a).slice(0, 5);
    }

    toString(){
        return `${this.nickName}: [${this._scores.sort((a, b) => b-a)}]`;
    }
}