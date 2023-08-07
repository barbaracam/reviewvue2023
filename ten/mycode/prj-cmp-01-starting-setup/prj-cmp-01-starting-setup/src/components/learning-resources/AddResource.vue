<template>
    <div>
        <base-dialog v-if="inputIsInvalid" title="Invalid is Invalid" @close="confirmError">
            <template #default>
                <p>One value is not valid</p>
            </template>
            <template #actions>
                <base-button @click="confirmError">ok</base-button>
            </template>
        </base-dialog>
    <base-card>
            <form @submit.prevent="addData">
                <div class="form-control">
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title" ref="titleInput">
                </div> 
                <div class="form-control">
                    <label for="description">Description</label>
                    <textarea name="description" id="description" rows="3" ref="desInput"></textarea>
                </div>
                <div class="form-control">
                    <label for="link"></label>
                    <input type="url" name="link" id="link" ref="linkInput">
                </div>
                <div>
                    <base-button type="submit">Add Resource</base-button>
                </div>             
            </form>
        </base-card>
    </div>
    
</template>

<script>
export default {
    inject:['addResource'],
    data(){
        return{
            inputIsInvalid : false,
        }
    },
    methods:{
        addData(){
            const titleEnter= this.$refs.titleInput.value;
            const descEnter = this.$refs.desInput.value;
            const linkEnter = this.$refs.linkInput.value;
            // remove white space
            if(titleEnter.trim() === '' || descEnter.trim() === '' || linkEnter.trim() === ''){
                this.inputIsInvalid= true;
                return;
            }

            //this is the injection coming from TheResources component
            this. addResource(titleEnter, descEnter, linkEnter)
        },
        confirmError(){
            this.inputIsInvalid = false;
        }
    }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>