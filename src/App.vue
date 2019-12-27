<template>
    <div id="app">
        <b>if</b>
        <IfDemo/>

        <br/>
        <b>for</b>
        <ForDemo/>

        <br/>
        <b>OnClick</b>
        <OnClickDemo/>

    </div>
</template>

<script>
    import IfDemo from './components/language/if-demo.vue'
    import ForDemo from './components/language/for-demo.vue'
    import OnClickDemo from './components/language/on-click-demo.vue'

    export default {
        name: 'app',
        components: {
            IfDemo, ForDemo, OnClickDemo
        }
    }
</script>
