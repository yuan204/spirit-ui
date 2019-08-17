export const RenderContent = {
    name: "render-content",
    props: {
        renderContent: {
            type: Function
        }
    },
    render(h) {

        return this.renderContent(h)
    }
}


