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

        <br/>
        <b>ComputedDemo</b>
        <ComputedDemo/>

        <br/>
        <b>MySelectComponentTest</b>
        <MySelectComponentTest/>

    </div>
</template>

<script>
    import IfDemo from './page/language/if-demo.vue'
    import ForDemo from './page/language/for-demo.vue'
    import OnClickDemo from './page/language/on-click-demo.vue'
    import ComputedDemo from './page/language/computed-demo.vue'
    import MySelectComponentTest from './page/language/MySelectComponentTest.vue'

    export default {
        name: 'app',
        components: {
            IfDemo, ForDemo, OnClickDemo, ComputedDemo, MySelectComponentTest
        }
    }
</script>
