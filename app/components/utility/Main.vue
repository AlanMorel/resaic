<template>
    <div class="main">
        <Header />
        <router-view :key="$route.path" />
        <Foot />
    </div>
</template>

<script>
    import { defineComponent } from "vue";

    import Header from "@/components/core/Header";
    import Foot from "@/components/core/Foot";

    export default defineComponent({
        name: "Main",
        components: {
            Header,
            Foot
        }
    });
</script>
