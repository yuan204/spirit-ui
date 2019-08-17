<template>
    <div class="s-upload"
         @dragover.prevent
         @drop.prevent="handleDrop"
    >
        <div :class="{'s-upload-dragger':drag}">
            <div class="s-file-button" @click="upload">
                <slot></slot>
            </div>
        </div>
        <input type="file" class="s-upload-input" ref="input" @change="handleFiles" :multiple="multiple">
        <ul class="s-upload-filelist">
            <li v-for="(_file,i) in fileList" @mouseenter="currentHoverIndex = i" @mouseleave="currentHoverIndex = -1">
                <s-icon name="file"></s-icon>
                {{_file.file.name}}
                <s-icon :name="currentHoverIndex === i ? 'close-small' : 'success'"
                        @click.native="onRemoveFile(_file.file,i)" ref="icon" class="status-icon"></s-icon>
                <div class="s-process" v-show="_file.progress">
                    <div class="s-process-outer">
                        <div class="s-process-inner" :style="{  width: _file.percent + '%'}"></div>
                    </div>
                    <span class="s-process-text">{{_file.percent}}%</span>
                </div>
            </li>
        </ul>


    </div>
</template>

<script>
    import ajax from "./ajax";
    import SIcon from "../icon/icon";


    export default {
        name: "sUpload",
        components: {
            SIcon
        },
        props: {
            action: {
                type: String,
                required: true
            },
            multiple: {
                type: Boolean,
                default: false
            },
            limit: {
                type: Number
            },
            onRemove: {
                type: Function,
            },
            onExceed: {
                type: Function,
            },
            beforeUpload: {
                type: Function,
                default: () => true
            },
            drag: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                // files: [],
                fileList: [],
                currentHoverIndex: -1
            }
        },
        computed: {},
        methods: {
            onRemoveFile(file, i) {
                this.fileList.splice(i, 1)
                this.onRemove && this.onRemove(file,this.fileList.map(({file}) => file))

            },
            upload() {
                this.$refs.input.value = ""
                this.$refs.input.click()

            },
            onSucess(i) {

                setTimeout(() => {
                    // console.log(this.$refs.icon);
                    this.$refs.icon[i].$el.style.display = "inline-block"
                    this.fileList[i].progress = false
                    // this.$set(this.fileList,i, this.fileList[i])
                }, 1000)
            },
            uploadFile(files) {
                const len = this.fileList.length
                files.forEach((file, i) => {
                    const option = {
                        action: this.action,
                        type: "file",
                        file: file,
                        filename: file.name,
                        onProgress: percent => {
                            const _i = i + len
                            this.fileList[_i].percent = percent
                            // this.$set(this.fileList,_i, this.fileList[_i])
                        },
                        onLoad: this.onSucess.bind(this, i + len)

                    }
                    const _file = {
                        percent: 0,
                        progress: true,
                        file
                    }
                    if (!this.beforeUpload(file)) return;
                    this.fileList.push(_file)
                    if (this.limit && this.fileList.length > this.limit) {
                        this.fileList.pop()
                        this.onExceed && this.onExceed(file,this.fileList.map(({file}) => file))
                        return
                    }
                    ajax(option)
                })

            },
            handleFiles(e) {
                const files = [...e.target.files]
                console.log(files);
                this.uploadFile(files)


                // this.files = this.files.concat(files)

            },
            handleDrop(e) {
                const fileList = [...e.dataTransfer.files];
                this.uploadFile(fileList)

            }
        },
        created() {

        }
    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";

    .s-upload {
        .s-upload-input {
            display: none;
        }

        .s-upload-dragger {
            width: 360px;
            height: 180px;
            border: 1px dashed #d9d9d9;

            .s-file-button {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                flex-direction: column;

                .s-icon {
                    width: 65px;
                    height: 65px;
                }
            }
        }

        .s-file-button {
            display: inline-block;
        }

        .s-upload-filelist {
            font-size: 14px;
            margin-top: 10px;

            li {
                padding: 5px;
                color: #515a6e;
                position: relative;

                .status-icon {
                    display: none;
                    font-size: 20px;
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);

                }

                &:hover {
                    background-color: #f3f3f3;
                }

                /*&:hover .s-icon {*/
                /*    display: inline-block;*/
                /*}*/
            }
        }

        .s-process {

            .s-process-outer {
                width: calc(100% - 55px);
                height: 2px;
                background-color: #f3f3f3;
                display: inline-block;

                .s-process-inner {
                    background-color: #2d8cf0;
                    height: 100%;
                    width: 0;
                    transition: width 1s;
                }
            }

            .s-process-text {
                font-size: 12px;

            }
        }
    }

    /*#f3f3f3*/
    /*#2d8cf0*/

</style>
