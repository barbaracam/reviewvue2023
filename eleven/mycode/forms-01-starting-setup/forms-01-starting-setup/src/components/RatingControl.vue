<template>
    <ul>
        <li :class="{active: activeOption === 'poor'}"><button type="button" @click="changeActive('poor')">Poor</button></li>
        <li :class="{active: activeOption === 'average'}"><button type="button" @click="changeActive('average')">Average</button></li>
        <li :class="{active: activeOption === 'great'}"><button type="button" @click="changeActive('great')">Great</button></li>
    </ul>
</template>
<script>
export default {
    props: ['modelValue'],
    emits:['update:modelValue'],
    // data() {
    //     return{
    //         activeOption: this.modelValue,
    //     }
    // },
    computed:{
        activeOption() {
            return this.modelValue;
        }
    },
    methods: {
        changeActive(option){
            // this.activeOption = option;
            this.$emit('update:modelValue', option)
        }
    },
    
}
</script>

<style scoped>
.active, .active button {
    border-color:purple;
}
ul {
    list-style: none;
    margin: 0.5rem 0;
    padding:0;
    display: flex
}
li {
    margin: 0 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
button {
    font:inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
</style>