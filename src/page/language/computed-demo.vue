<template>
    <div>
        <input v-model="x" type="number"/>
        <span>{{addNum}}</span>
    </div>
</template>

<script>
    export default {
        name: "computed",
        data() {
            return {
                x: 1
            }
        },
        computed: {
            addNum: function () {
                let number = parseInt(this.x);
                return number + 1;
            }
        }
    }
</script>