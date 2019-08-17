<template>
    <div class="tags">
        <s-tag>标签一</s-tag>
        <s-tag type="info" closable @close="handleClose1" v-if="show1">标签二</s-tag>
        <s-tag type="info" closable @close="handleClose2" v-if="show2" disable-transition>标签二</s-tag>
        <s-tag type="success" closable>标签三</s-tag>
        <s-tag type="warning">标签四</s-tag>
        <s-tag type="error">标签五</s-tag>
        <br>
        <s-tag closable>默认标签</s-tag>
        <s-tag size="medium" closable>中等标签</s-tag>
        <s-tag size="small" closable>小型标签</s-tag>
        <s-tag size="mini" closable>超小标签</s-tag>
        <br>
        <div class="tag-group">
            <span class="tag-group__title">Dark</span>
            <s-tag
                    v-for="item in items"
                    :key="item.label"
                    :type="item.type"
                    effect="dark" closable>
                {{ item.label }}
            </s-tag>
        </div>
        <div class="tag-group">
            <span class="tag-group__title">Plain</span>
            <s-tag
                    v-for="item in items"
                    :key="item.label"
                    :type="item.type"
                    effect="plain" closable>
                {{ item.label }}
            </s-tag>
        </div>
        <div class="tag-group">
            <span class="tag-group__title">Plain</span>
            <s-tag
                    v-for="item in items"
                    :key="item.label"
                    :type="item.type"
                    closable>
                {{ item.label }}
            </s-tag>
        </div>
    </div>
</template>

<script>
    import STag from "@/components/tag/tag";


    export default {
        name: "TagDemo",
        components: {
            STag
        },
        data() {
            return {
                show1: true,
                show2: true,
                items: [
                    { type: 'primary', label: '标签一' },
                    { type: 'success', label: '标签二' },
                    { type: 'info', label: '标签三' },
                    { type: 'error', label: '标签四' },
                    { type: 'warning', label: '标签五' }
                ]
            }
        },
        methods: {
            handleClose1() {
                this.show1 = false;
            },
            handleClose2() {
                this.show2 = false;
            }
        },
    }
</script>

<style scoped>
    .s-tag {
        margin-right: 10px;
    }
</style>
