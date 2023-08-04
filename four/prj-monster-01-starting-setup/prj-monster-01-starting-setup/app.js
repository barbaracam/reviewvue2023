function getRandomValue(min, max){
    return Math.floor(Math.random() * (max - min)) + min
}


const app = Vue.createApp({
    data(){
        return{
            monsterHealth: 100,
            playerHealth:100,
            currentRound:0,
            winner:null,
            logMessage:[],

        }
    },
    computed:{
        monsterBar(){
            if(this.monsterHealth <= 0){
                return {width:'0%'};  
            } else {
               return {width: this.monsterHealth + '%'};  
            }
           
        },
        playerBar(){           
            if(this.playerHealth <= 0){
                return {width:'0%'};  
            } else {
               return {width: this.playerHealth + '%'};  
            }
        },
        disableSpecialAttack(){
            return this.currentRound % 3 !== 0;
        }
           
    },
    watch:{
        playerHealth(value){
            if(value <=0 && this.monsterHealth <= 0){
               this.winner = 'draw'
            } else if (value <=0){
                this.winner = 'monster'
            }
        },
        monsterHealth(value){
            if(value <=0 && this.playerHealth <= 0){
                this.winner = 'draw'
            } else if (value <=0) {
                this.winner = 'player'
            }
        }
    },
    methods:{
        attackMonster(){
            this.currentRound++;
            const attackValue = getRandomValue(5,12) 
            this.monsterHealth = this.monsterHealth - attackValue;    
            this.addLog('player', 'attack', attackValue);       
            this.attackPlayer();  
        },
        attackPlayer(){
            const attackValue = getRandomValue(8,15)
            this.playerHealth -= attackValue;
            this.addLog('monster', 'attack', attackValue);   
        },
        specialAttack(){
            this.currentRound++;
            const attackValue = getRandomValue(10,25);
            this.monsterHealth-= attackValue;
            this.addLog('player', 'Special Attack', attackValue);   
            this.attackPlayer();
        },
        playerHeal(){
            this.currentRound++
            const healValue = getRandomValue(8,20);
            if(this.playerHealth + healValue > 100){
                this.playerHealth =100;
            } else {
                this.playerHealth += healValue;
            }
            this.addLog('player', 'heal', healValue); 
            this.attackPlayer();
        },
        newGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100,
            this.currentRound = 0;
            this.winner = null;
            this.logMessage =[];
        },
        quit(){
            this.winner = 'monster';
        },
        addLog(who, what, value){
            this.logMessage.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
    }


})

app.mount('#game')