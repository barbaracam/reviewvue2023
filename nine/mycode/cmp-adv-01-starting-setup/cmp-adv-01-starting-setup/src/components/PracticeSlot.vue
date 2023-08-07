<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal" another-item="hello"></slot>
        </li>
    </ul>
</template>

<script>

export default {
    data() {
        return {
            goals: ['finish', 'start']
        }
    },
}
</script>
