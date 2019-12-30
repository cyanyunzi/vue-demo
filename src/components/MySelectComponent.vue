<template>
    <select>
        <option v-for="option in selectOptions" :key="option">{{option}}</option>
    </select>
</template>

<script>
    export default {
        name: "MySelectComponent",
        props: {
            selectOptions: null,
        }
    }
</script>