export default function ImageViwer({ $target }){
    const $imageViewer = document.createElement('div')
    $imageViewer.className = 'ImaageViewer Modal'
    $target.appendChild($imageViewer)

    this.state = {
        imageUrselectedImageUrll: null
    }

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        $imageViewer.style.display = this.state.selectedImageUrl ? 'block' : 'none'
        
        $imageViewer.innerHTML =`
            <div class="content">
                <img src="${this.state.selectedImageUrl}" />
            </div>
        `
    }
}
