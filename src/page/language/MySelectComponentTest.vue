<template>
    <form>
        <my-select-component
                v-bind:selectOptions="this.selectOptions"
                v-on:select="onsubmit(this.value)"></my-select-component>
    </form>
</template>

<script>
    export default {
        name: "MySelectComponentTest",
        data() {
            return {
                form: {
                    selectModel: ''
                },
                selectOptions: [1, 2]
            }
        },
        methods: {
            onsubmit: function (val) {
                console.log(val);
            }
        }
    }
</script>