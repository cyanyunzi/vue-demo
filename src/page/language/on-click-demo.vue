<template>
    <div>
        <div v-on:click="reverseMessage">
            {{msg}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "on-click-demo",
        data() {
            return {
                msg: "msg"
            }
        },
        methods: {
            reverseMessage: function () {
                this.msg = this.msg.split('').reverse().join('')
                alert(this.msg);
                console.log(this.msg)
            }
        }
    }
</script>