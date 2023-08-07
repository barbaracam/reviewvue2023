<template>
    <div>
        <base-card>
            <base-button @click="switchTab('stored-resources')" :mode="switchButtonStore">Stored Resources</base-button>
            <base-button @click="switchTab('add-resource')" :mode="switchButtonAdd">Add Resource</base-button>
        </base-card>
        <keep-alive>
            <component :is="selectedTab"></component>
        </keep-alive>
    </div>    
</template>
<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
    components:{
        StoredResources, AddResource
    },
    data() {
        return{
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Vue Guide',
                    description: 'The official Vue documentation',
                    link: ' https://vuejs.org',
                },
                {
                    id: 'google-search',
                    title: ' Google',
                    description: 'Search tool Google',
                    link: ' https://www.google.com',
                },
            ],
        }
    },
    computed:{
        switchButtonStore(){
            return this.selectedTab ==='stored-resources' ? null :'flat'
        },
        switchButtonAdd(){
             return this.selectedTab ==='add-resource' ? null :'flat'
        }
    },
    methods:{
        switchTab(tab){
            this.selectedTab = tab;
        },
        addResource(title,description, url){
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url

            };
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources'
        },
        removeResource(resId){
            //need to use the index because inject wont provide the modify array even js knows, we dont override old array
           const resIndex = this.storedResources.findIndex(res => res.id === resId); 
           this.storedResources.splice(resIndex,1);
        }
    },
    provide(){
      return{
        resources: this.storedResources,
        addResource:this.addResource,
        deleteResource:this.removeResource,
      }
    }
}
</script>
