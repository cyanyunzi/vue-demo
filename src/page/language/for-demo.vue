<template>
    <div>
        <div v-for="msg in message" :key="msg">
            <li v-if="flag">
                {{msg}}
            </li>
        </div>
    </div>
</template>

<script>
    export default {
        name: "for-demo",
        data() {
            return {
                message: ['字符串1', '字符串2', '字符串3'],
                flag: true
            }
        }
    }
</script>