class Statistics {
  constructor() {
    this.gameResults = [];

    this.addGameToStatistics = (win, bid) => {
      let gameResult = {
        win: win,
        bid: bid
      };
      this.gameResults.push(gameResult);
      console.log(gameResult);
    };

    this.showGameStatistics = () => {
      let games = this.gameResults.length;
      let numberWins = this.gameResults.filter(result => result.win).length;
      let numberLost = this.gameResults.filter(result => !result.win).length;
      return [games, numberWins, numberLost];
    };
  }
}
