<template>
    <div class="demo-container">
        <s-container class="container">
            <s-header class="s-header"></s-header>
            <s-main>main</s-main>
            <s-footer class="s-footer"></s-footer>
        </s-container>
        <s-container >
            <s-header >Header</s-header>
            <s-container>
                <s-aside width="200px">Aside</s-aside>
                <s-main >Main</s-main>
            </s-container>
        </s-container>
        <s-container>
            <s-header>Header</s-header>
            <s-container>
                <s-aside width="200px">Aside</s-aside>
                <s-container>
                    <s-main>Main</s-main>
                    <s-footer>Footer</s-footer>
                </s-container>
            </s-container>
        </s-container>

        <s-container>
            <s-aside width="200px">Aside</s-aside>
            <s-container>
                <s-header>Header</s-header>
                <s-main>Main</s-main>
            </s-container>
        </s-container>

        <s-container>
            <s-aside width="200px">Aside</s-aside>
            <s-container>
                <s-header>Header</s-header>
                <s-main>Main</s-main>
                <s-footer>Footer</s-footer>
            </s-container>
        </s-container>
    </div>

</template>

<script>
    import SAside from "@/components/container/aside";
    import SContainer from "@/components/container/container";
    import SFooter from "@/components/container/footer";
    import SHeader from "@/components/container/header";
    import SMain from "@/components/container/main";

    export default {
        name: "ContainerDemo",
        components: {
            SMain,
            SHeader,
            SFooter,
            SAside,
            SContainer
        }
    }
</script>

<style scoped>
    .s-header, .s-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .s-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .s-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

     .demo-container > .s-container {
        margin-bottom: 40px;
    }

    .s-container:nth-child(5) .s-aside,
    .s-container:nth-child(6) .s-aside {
        line-height: 260px;
    }

    .s-container:nth-child(5) .s-aside {
        line-height: 320px;
    }
</style>
