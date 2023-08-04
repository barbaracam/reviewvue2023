const app = Vue.createApp ({
data: function (){
    return {
        courseGoal: "Finish Vue",
        courseGoalA: "Learn",
        courseGoalB: "Master",
        link: "https://www.google.com/"
    }
}, 
methods:{
    outputGoal(){
        const randomNumber = Math.random();
        if(randomNumber < 0.5){
            return this.courseGoalA
        } else {
            return this.courseGoalB
        }
    }
}



})

app.mount("#user-goal");